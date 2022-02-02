import styles from './Header.module.scss'
import React, {useEffect, useRef, useState} from "react";
export default function Header() {

  const pages = [
    {title: "О НАС"},
    {title: "ПРОЕКТЫ"},
    {title: "УСТРОЙСТВА"},
    {title: "ДОСТИЖЕНИЯ"},
    {title: "СОТРУДНИКИ"},
    {title: "КОНТАКТЫ"},
  ]

  const [active, setActive] = useState(0)
  const activeRef = useRef(active)
  const elemsParent: React.RefObject<any> = useRef<HTMLDivElement>()
  const line: React.RefObject<any> = useRef<HTMLDivElement>()
  const parentContainer: React.RefObject<any> = useRef<HTMLDivElement>()
  const [isMobile, setIsMobile] = useState(false)

  function setLineProperties(i?: number) {
    let obj = elemsParent.current.children[active]
    if (i !== undefined) {
      obj = elemsParent.current.children[i]
    }
    line.current.style.marginLeft = obj.offsetLeft + "px"
    line.current.style.width = obj.offsetWidth + "px"
  }

  function onMouseElemEnter(i: number) {
    setLineProperties(i)
  }

  function onMouseElemLeave() {
    setLineProperties(active)
  }

  function onElementsParentClick(e:any) {
    if (isMobile) {
      elemsParent.current.setAttribute("show", "false")
    }
  }

  function onElementClick(i: number,e:any) {
    setActive(i)
    onElementsParentClick(null)
  }

  useEffect(()=>{
    setLineProperties(active)
    window.addEventListener("resize",()=>{
      if(window.innerWidth<850){
        setIsMobile(true)
      }else{
        setIsMobile(false)
        setLineProperties(activeRef.current)
      }
    })
    window.addEventListener("scroll",()=>{
      if(window.scrollY>50){
        parentContainer.current.setAttribute("scroll","true")
      }else{
        parentContainer.current.setAttribute("scroll","false")
      }
    })
  }, [])
  useEffect(()=>{
    setLineProperties(active)
    activeRef.current=active
  }, [active])



  return (
    <div className={styles.headerParent} ref={parentContainer}>
      <div onClick={() => {
        let obj = elemsParent.current
        obj.setAttribute("show", (!(obj.getAttribute("show") === "true")).toString())
      }}>
        <img src="/images/logo.png" alt=""/>
      </div>
      <div>
        <div className={styles.elementsParent}
             ref={elemsParent} onMouseLeave={onMouseElemLeave}>
          {pages.map((e, i) => {
            return (
              <div key={"headerElem" + i.toString()} className={styles.element} onMouseEnter={() => onMouseElemEnter(i)}
                   onClick={(e) => onElementClick(i,e)}>
                {e.title}
              </div>
            )
          })}
          {isMobile?(
            <div style={{backgroundColor:"transparent",height:"100%",width:"100vw"}} onClick={onElementsParentClick}></div>
            ):null}
        </div>
        <div className={styles.line} ref={line}></div>
      </div>
    </div>
  )
}
