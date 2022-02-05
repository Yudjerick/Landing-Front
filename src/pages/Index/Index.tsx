import React, {useEffect, useRef, useState} from "react";
import About from "../../modules/IndexSections/About/About";
import Header from "../../components/Header/Header";
import Projects from "../../modules/IndexSections/Projects/Projects";
import Achievements from "../../modules/IndexSections/Achievements/Achievements";

export default function Index(props: any) {
  const appContainer:any = useRef<HTMLDivElement>()



  useEffect(() => {
  }, [])
  return (
    <div ref={appContainer}>
      <Header appContainer={appContainer}/>
      <About/>
      <Projects/>
      <Achievements/>
    </div>
  )
}
