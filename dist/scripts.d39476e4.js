parcelRequire=function(e,t,n,i){var r,o="function"==typeof parcelRequire&&parcelRequire,s="function"==typeof require&&require;function a(n,i){if(!t[n]){if(!e[n]){var r="function"==typeof parcelRequire&&parcelRequire;if(!i&&r)return r(n,!0);if(o)return o(n,!0);if(s&&"string"==typeof n)return s(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(t){return e[n][1][t]||t},d.cache={};var c=t[n]=new a.Module(n);e[n][0].call(c.exports,d,c,c.exports,this)}return t[n].exports;function d(e){return a(d.resolve(e))}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=t,a.parent=o,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]};for(var l=0;l<n.length;l++)try{a(n[l])}catch(e){r||(r=e)}if(n.length){var c=a(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}if(parcelRequire=a,r)throw r;return a}({NENU:[function(e,t,n){var i=void 0;window.addEventListener("load",(function e(){window.Swiper&&(i||(new Promise((function(e){new Swiper(".achievements__swiperParent",{slidesPerView:"auto",spaceBetween:15,pagination:{el:".achievements__swiperPagination",clickable:!0},mousewheel:{releaseOnEdges:!0}}),i=!0,e()})),window.removeEventListener("load",e)))}))},{}],yeke:[function(e,t,n){var i=void 0;window.addEventListener("load",(function e(){window.Swiper&&(i||(new Promise((function(e){new Swiper(".staff__swiper",{spaceBetween:10,slidesPerView:"auto",freeMode:!0,loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:2200,mousewheel:{releaseOnEdges:!0}}),i=!0,e()})),window.removeEventListener("load",e)))}))},{}],rSus:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=[{"#":"",title:"ARtillery","---":"",description:"Игровое приложение в дополненной реальности для Android (ранее Android, iOS). Задача игрока – продержаться как можно дольше, отстреливаясь от противников, появляющихся в пространстве вокруг него. Для защиты игрок может перемещать и наклонять телефон, а также сбивать летящие в него снаряды. Для стрельбы нужно коснуться экрана. Со временем сложность увеличивается. Существует три типа противников с разными моделями поведения и сложностью, каждый из которых появляется реже или чаще других. Приложение реализовано с использованием ARCore, что позволяет ему работать без привязки к печатной метке. Ранняя версия приложения была реализована с использованием Vuforia, для работы требуется распечатать метку.",images:["/images/projects/ARtillery/resized_ARtillery_Moment3.webp","/images/projects/ARtillery/resized_ARtillery_Moment-min.webp","/images/projects/ARtillery/resized_ARtillery_Moment2-min.webp","/images/projects/ARtillery/ARtilleryAction.gif"],videos:["https://youtu.be/BIoWlE25bD4"],tags:["AR","Unity"],tech:["Unity"],developers:["Поздняков Д.В."],sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/ARtillery"}],link:"ARtillery"},{"#":"",title:"Многопользовательская сборка ракетного двигателя","---":"",description:"Приложение дает пользователям возможность осуществлять процесс сборки предоставленной модели в формате виртуальной реальности. Люди могут собирать ракетный двигатель как самостоятельно, так и в многопользовательской комнате, объединившись с напарниками. Процесс сопровождают различные подсказки и тексты с описаниями деталей. Все это, вкупе с глубоким погружением, способствует быстрому усвоению материала. При окончании сборки модель становится анимированной и демонстрирует свой принцип работы.",images:["/images/projects/Engine-VR/resized_141160470-a31d20dd-86bd-4be8-9308-a631227b5ba0.webp","/images/projects/Engine-VR/resized_141155619-bb28a0e8-fd3b-4359-97e5-36f3d1cf71c3.webp","/images/projects/Engine-VR/resized_141155697-f247130d-e9a9-4f7d-812c-7a328e3022af.webp","/images/projects/Engine-VR/resized_141155722-2e5c8eab-dfef-42f7-ae67-daf43e1756d6.webp"],videos:["https://youtu.be/6FTMDRp5fN4"],tags:["VR","Game"],tech:["Unity","C#"],developers:["Сиротенко М.Р.","Корчиков М.Д.","Смирнов М.А","Лысаков И.А.","Смирнов Я.А."],site:"",sourcecode:[{name:"Исходный код",link:"https://github.com/RTUITLab/Engine-VR"}],link:"Engine-VR"},{"#":"",title:"GameCenter (система рекордов)","---":"",description:"Система предназначена для формирования очереди на выставочные стенды, для контроля посещаемости проектов лаборатории ИТ и предоставления игровой статистики пользователей. Также предусмотрено администрирование рекордов пользователей, игр, очередей.",images:["/images/projects/GameCenter-Front/resized_1.webp","/images/projects/GameCenter-Front/resized_2.webp","/images/projects/GameCenter-Front/resized_3.webp","/images/projects/GameCenter-Front/resized_4.webp"],videos:[],tags:["Frontend"],tech:["Angular","Asp.net core"],developers:["Китанин С.C.","Южаков В.Е."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/GameCenter-Front"},{name:"Бэкенд",link:"https://github.com/RTUITLab/GameCenter-Backend"}],link:"GameCenter-Front"},{"#":"",title:"GyroBall","---":"",description:"Мобильное приложение – игра для проверки удобства использования механики акселерометра.\nИспользование поворотов телефона для управления шариком. У шарика предполагается 4 состояния, соответствующих стихиям, каждое состояние несёт в себе определённую соответствующую механику. Локации к игре будут соответствовать стихийной тематике.",images:["/images/projects/GyroBall/resized_23.webp","/images/projects/GyroBall/resized_21.webp","/images/projects/GyroBall/resized_1.webp","/images/projects/GyroBall/resized_2.webp","/images/projects/GyroBall/resized_3.webp"],videos:[],tags:["Mobile"],tech:["C#","3D modeling","Unity 3D"],developers:["Баканова М.В.","Новаков Н.Ю."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/GyroBall"}],link:"GyroBall"},{"#":"",title:"ITLab (система управления лабораторией)","---":"",description:"Для организации работы людей в лаборатории создана система, учитывающая активность людей, участие в мероприятиях, оплату работы сотрудников. Система позволяет распределять нагрузку, обеспечивать прозрачность выполняемых действий и мероприятий. Сайт создан для внутреннего использования и доступ к имеют только сотрудники лаборатории. Проект состоит из нескольких бекендов, написанный на разных языках программирования, таких как C#, GO, Kotlin. Фронтенд реализован на фреймворке Vue.JS. Мобильное приложение для iOS реализовано на языке Swift с использованием фреймворка SwiftUI. Так же система имеет возможность уведомлять людей о изменениях, при помощи бота вконтакте или почты.",images:["/images/projects/ITLab/resized_1.webp","/images/projects/ITLab/resized_2.webp","/images/projects/ITLab/resized_ios_1.webp","/images/projects/ITLab/resized_ios_2.webp"],videos:[],tags:["Frontend","Backend","Mobile"],tech:["Vue","ASP","Ktor","Swift"],developers:["Макущенко М.А.","Романов Д.Е.","Комар Б.Г.","Кузнецов А.А.","Иванов М.Е."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/ITLab-Front"},{name:"Система событий/оборудования",link:"https://github.com/RTUITLab/ITLab-Back"},{name:"Система уведомлений",link:"https://github.com/RTUITLab/ITLab-Notify"},{name:"Система записей о работе",link:"https://github.com/RTUITLab/ITLab-Reports"},{name:"Система учета зарплат",link:"https://github.com/RTUITLab/ITLab-Salary"},{name:"Приложение для iOS",link:"https://github.com/RTUITLab/ITLab-iOS"}],link:"ITLab"},{"#":"",title:"Сервис проектов RTUITLab","---":"",description:"Сервис позволяет отслеживать проекты лаборатории, мониторить их прогресс\nВозможность хранить файлы, относящиеся к проекту, оставлять новости\nА также распределение ролей",tags:["Backend","Golang"],tech:["Go","MongoDB"],developers:["Демин Д.Д.","Миронов Н.М.","Лаптев И.А.","Корольков А.Д.","Баикин К.Е."],images:["/images/projects/ITLab-Projects/resized_list.webp","/images/projects/ITLab-Projects/resized_show_ArtWay.webp","/images/projects/ITLab-Projects/resized_show_ArtWay2.webp","/images/projects/ITLab-Projects/resized_show_VIKA.webp","/images/projects/ITLab-Projects/resized_edit_VIKA.webp"],videos:[],site:"https://manage.rtuitlab.dev/projects",sourcecode:[{name:"Бекенд",link:"https://github.com/RTUITLab/ITLab-Projects"},{name:"Фронтенд",link:"https://github.com/RTUITLab/ITLab-Projects-Front"}],link:"ITLab-Projects"},{"#":"",title:"Plane crash simulator","---":"",description:"Симулятор, помещающий пользователя в ситуацию, когда он находится в падающем самолете",images:["/images/projects/PlaneCrashSimulator/resized_1.webp","/images/projects/PlaneCrashSimulator/resized_2.webp","/images/projects/PlaneCrashSimulator/resized_3.webp"],videos:[],tags:["VR"],tech:["Unity","Steam VR","C#"],developers:["Валяев Д.А.","Шорин И.А."],site:"",sourcecode:[{name:"Source code",link:"https://github.com/RTUITLab/PlainCrashSimulator"}],link:"PlaneCrashSimulator"},{"#":"",title:"Виртуальный ситуационный центр","---":"",description:"Виртуальный ситуационный центр позволяет множеству людей в любой точке планеты взаимодействовать между собой в единой среде виртуальной реальности. При этом возможно использование любого доступного на данный момент шлема виртуальной реальности. Также сервисом можно пользоваться без шлема, используя клавиатуру и мышь. В сервисе реализована концепция комнат, к которым подключаются люди, и их общение происходит только внутри данного пространства. Разговоры и обмен файлами не выйдут за пределы выделенного пространства, что обеспечивает конфиденциальность приватного общения. Внутри выделенного виртуального пространства люди могут общаться при помощи голосового чата, могут обмениваться документами из облачных хранилищ (OneDrive, Google drive…), просматривать их, комментировать и обсуждать. В данный момент сервис находится на стадии открытого тестирования.",images:["/images/projects/SC/resized_1.webp","/images/projects/SC/resized_2.webp"],videos:["https://youtu.be/HRFRQa3tMcI"],tags:["VR","Social"],tech:["NodeJS","ASP. net core","Unreal Engine"],developers:["Макущенко М.А.","Иванов И.Е."],site:"",sourcecode:[],link:"SC"},{"#":"",title:"StuDo","---":"",description:"Сервис предназначен для людей, кто желает найти себе партнёров или команду для осуществления своей мечты! В чём заключается задача сервиса: это платформа для поиска людей или команды. Как происходит поиск команды: Вы выкладываете объявление, в котором кратко сообщаете о том, что хотите сделать, что собираетесь сделать именно Вы, и какие люди нужны вам в команды. Другие же просматривают ленту объявлений (или ищут по тегам) и видят ваше объявление и сообщают вам, что готовы принять участие в вашем проекте. На данный момент проект находится в разработке, в скором времени будет доступен для публичного тестирования. Данный сервис реализован на мобильных устройствах и разрабатывается под браузер.",images:["/images/projects/StuDo/resized_1.webp","/images/projects/StuDo/resized_2.webp","/images/projects/StuDo/resized_3.webp"],videos:["https://youtu.be/WyLDHwuZedc"],tags:["Web","Mobile","Tool"],tech:["Vue","ASP.NET core"],developers:["Миронов Н. М.","Цуканов Д. М.","Яковлев А. А.","Алексеев Н. Е.","Лаптев И. А."],site:"",sourcecode:[{name:"Бэкенд",link:"https://github.com/RTUITLab/StuDo-Back"},{name:"Фронтэнд",link:"https://github.com/RTUITLab/StuDo-Front"},{name:"IOS",link:"https://github.com/MrFoggz/StuDo-iOS"},{name:"Android",link:"https://github.com/Suput/StuDo-Android"}],link:"StuDo"},{"#":"",title:"Шутер в виртуальной реальности","---":"",description:"Шутер в формате виртуальной реальности, позволяющий оттачивать стрельбу из оружия разных видов и уворачиваться от вражеских пуль. В игре можно бросить вызов сразу нескольким противникам, либо сначала потренироваться в спокойной обстановке. В таком режиме у пользователя есть возможность стрелять по бутылкам в баре и мишеням в тире. На выбор представлено 5 моделей оружия, 4 локации и 3 уровня сложности.",images:["/images/projects/VRDuel/resized_148579235-a4f9e25e-dc3c-49d8-b1a6-7dbabfa52a99.webp","/images/projects/VRDuel/resized_148580147-297f79e2-15e3-4b34-8108-9550982b0fe2.webp","/images/projects/VRDuel/resized_148580160-84ee7b40-83f9-439c-a37e-4e1184bd4dd5.webp","/images/projects/VRDuel/resized_148580059-71f366be-9f6c-44bf-a662-abf7e3e00003.webp"],videos:[],tags:["VR","Game"],tech:["Unity","C#"],developers:["Егоркин Н.Е.","Шорин И.А."],site:"",sourcecode:[{name:"GitHub",link:"https://github.com/RTUITLab/VRDuel"}],link:"VRDuel"},{"#":"",title:"VRTherapy - Приложение для релаксации в VR со множеством разнообразных активностей","---":"",description:"В VRTherapy вы можете погрузиться в захватывающую и успокаивающую виртуальную реальность с приятным звуковым сопровождением. Отдохните у виртуального костра, прогуляйтесь по летнему лесу, послушайте шум прибоя или же сыграйте в мини-игру, где вам предстоит управлять бумажным самолётиком на ветру. Данная игра предназначена исключительно для запуска в портативном VR-шлеме для Android, например, Google Cardboard.",images:["/images/projects/VRTherapy/resized_screenshot1.webp","/images/projects/VRTherapy/resized_screenshot2.webp","/images/projects/VRTherapy/resized_screenshot3.webp","/images/projects/VRTherapy/resized_screenshot4.webp"],videos:[],tags:["VR","Game","Simulator","Arcade"],tech:["Unity","Android","Google VR","Google Cardboard"],developers:["Баканова М.","Левандровский А.","Матчин А.","Новаков Н."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/VRTherapy"}],"разработчики":"",link:"VRTherapy"},{"#":"",title:"BunnyHuntVR - Web VR шутер","---":"",description:"VR игра, обороняйте грядки от проворных и назойливых зайцев. Узнайте сколько морковки вы сможете сохранить.",images:["/images/projects/WebVRShoot/resized_BunnyHuntVR.webp","/images/projects/WebVRShoot/resized_BunnyHuntVR2.webp"],videos:[],tags:["VR","Game","Shooter"],tech:["A-Frame","Javascript","Html"],developers:["Соколов А.В","Иерусалимов И.Д."],site:"https://webvrshoot.rtuitlab.dev/",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/WebVRShoot"}],link:"WebVRShoot"}];n.default=i},{}],jM7F:[function(e,t,n){},{}],Z6W6:[function(e,t,n){"use strict";function i(){return!!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=850)}function r(e,t,n,r,o){var s=0,a=200,l=0,c=0,d=function(t,n){return 0==s&&c-l>0&&void 0!==n?1-.2*Math.abs(n):s==e.children.length-1&&c-l<0&&void 0!==n?1-.2*n:1-.2*Math.abs(t)/a},u=function(t,n){return 0==s&&c-l>0&&void 0!==n?Math.pow(t/1.2,2/3)+(a*Math.abs(n)-Math.pow(a*Math.abs(n),2/3))/1.2:s==e.children.length-1&&c-l<0&&void 0!==n?-Math.pow(-t/1.2,2/3)-(a*n-Math.pow(a*n,2/3))/1.2:t/1.2},m=function(t){var n=Number(t),i=e.children[n];if(i){i.style.zIndex=5;var r=Array.from(e.children);n-1>=0&&(r[n-1].style.zIndex=4,n-2>=0&&(r[n-2].style.zIndex=3)),n+1<r.length&&(r[n+1].style.zIndex=4,n+2<r.length&&(r[n+2].style.zIndex=3))}},p=function(t){var n=Number(t),i=e.querySelectorAll(".gallery__parent > *"),r=Array.from(i);r.forEach((function(e){e.style.opacity="0"}));var o=e.children[n];o&&(o.style.opacity=1),n-1>=0&&(r[n-1].style.opacity=1,n-2>=0&&(r[n-2].style.opacity=1)),n+1<r.length&&(r[n+1].style.opacity=1,n+2<r.length&&(r[n+2].style.opacity=1))},h=function(t){var n=Number(t),i=e.children;if(0!==i.length){s=n,function(t){var n=e.children;Array.from(n).forEach((function(e,n){e.style.opacity="0",e.style.transform=n<t?"translate(".concat(u(2*-a-20),"px,0px) scale(").concat(d(-2*a-20),")"):"translate(".concat(u(2*a+20),"px,0px) scale(").concat(d(2*a+20),")")}))}(n),m(n),p(n),i[n].style.transform="",i[n].style.filter="";for(var r=Array.from(e.children),o=0,l=n-1;l>=0;l--)o--,r[Number(l)].style.transform="translate(".concat(u(a*o),"px,0px) scale(").concat(d(a*o),")");o=0;for(var c=n+1;c<r.length;c++)o++,r[Number(c)].style.transform="translate(".concat(u(a*o),"px,0px) scale(").concat(d(a*o),")")}},g=function(){var t=s+Math.round((l-c)/a);t>=0&&e.children.length>t&&(m(t),p(t),r(t)),e.children[s].style.transform="translate(".concat(u(c-l,0),"px,0px) scale(").concat(d(c-l,0),")"),function(t){for(var n=Array.from(e.children),i=0,r=t-1;r>=0;r--)i++,n[r].style.transform="translate(".concat(u(c-l-a*i,i),"px,0px) scale(").concat(d(c-l-a*i,i),")");i=0;for(var o=t+1;o<n.length;o++)i--,n[o].style.transform="translate(".concat(u(c-l-a*i,i),"px,0px) scale(").concat(d(c-l-a*i,i),")")}(s)};function f(t){e.ontouchmove=null,e.onmousemove=null,function(t){e.ontouchmove=null,e.classList.add("gallery__anim");var n=s+Math.round((l-c)/a);0===c&&(n=s),Math.abs(c-l)<5&&t&&(o&&0===t.button&&o.call(this),o&&!t.button&&o.call(this)),n>=0&&e.children.length>n?(h(n),r(n)):n<0?(h(0),r(0)):(h(e.children.length-1),r(e.children.length-1)),setTimeout((function(){e.classList.remove("gallery__anim")}),250)}(t),i()?window.removeEventListener("touchend",f):window.removeEventListener("mouseup",f),n(t)}function b(){var e=window.innerWidth;return e>1150?200:e>1020?150:e>820?130:e>640?100:e>520?80:e>370?60:50}return e.classList.add("gallery__anim"),a=b(),h(0),window.addEventListener("resize",(function(){a=b(),h(s)})),i()?e.ontouchstart=function(n){e.classList.remove("gallery__anim"),window.addEventListener("touchend",f,{passive:!0}),l=n.touches[0].clientX,c=n.touches[0].clientX,t(n),e.ontouchmove=function(e){c=e.touches[0].clientX,g()}}:e.onmousedown=function(n){e.classList.remove("gallery__anim"),window.addEventListener("mouseup",f,{passive:!0}),l=n.clientX,c=n.clientX,t(n),e.onmousemove=function(e){c=e.clientX,g()}},{setActiveView:function(t){if(e.children.length<=t)return!1;s=t,e.classList.add("gallery__anim"),h(t),setTimeout((function(){e.classList.remove("gallery__anim")}),250)},galleryDestroy:function(){e.onmousedown=null,e.onmouseup=null,e.ontouchstart=null,e.ontouchmove=null,e.ontouchend=null,e.onmousemove=null,f()},next:function(){if(s+1>=e.children.length)return null;e.classList.add("gallery__anim"),h(s+1),r(s),setTimeout((function(){e.classList.remove("gallery__anim")}),250)},back:function(){if(s-1<0)return null;e.classList.add("gallery__anim"),h(s-1),r(s),setTimeout((function(){e.classList.remove("gallery__anim")}),250)}}}function o(){}Object.defineProperty(n,"__esModule",{value:!0}),n.GalleryConstrucor=o,n.GalleryItem=function(e){var t=e.children,n=e.hide,i=void 0!==n&&n;return React.createElement("div",{className:"gallery__galleryItem noselect",hide:i.toString(),draggable:!1},t)},n.default=r,n.isMobile=i,e("./gallery.scss"),o.prototype.init=function(e,t,n,i,o){var s=r(e,t,n,i,o),a=s.setActiveView,l=s.galleryDestroy,c=s.next,d=s.back;return this.setActiveView=a,this.galleryDestroy=l,this.next=c.bind(this),this.back=d.bind(this),this},o.prototype.destroy=function(){return this.galleryDestroy(),this},o.prototype.next=function(){return this.next(),this},o.prototype.back=function(){return this.back(),this}},{"./gallery.scss":"jM7F"}],TB2l:[function(e,t,n){"use strict";var i,r=(i=e("../data/projectsData"))&&i.__esModule?i:{default:i},o=e("../gallery/gallery");var s=!1,a=0,l=document.getElementById("projectsStatusBar"),c=document.getElementById("projectInfoContent"),d=document.getElementById("GalleryParent"),u=document.getElementById("currentProjectTitle"),m=document.getElementById("currentProjectLink"),p=r.default,h=null;function g(e){c.classList.add("projects__hide")}function f(){window.location.href=m}function b(e){y(),c.classList.remove("projects__hide")}function y(){0!==p.length&&(u.innerText=p[a].title,m.href="projects/"+p[a].link,m.style.display="block")}function w(e){v(e),y()}function v(e){0!==Array.from(l.children).length&&(l.children[a].setAttribute("active","false"),l.children[e].setAttribute("active","true"),a=e)}function _(e){l.innerHTML="";for(var t=0;t<e;t++)l.appendChild(document.createElement("div"))}function j(){var e=function(e){l.children[e].onclick=function(){h.setActiveView(e),v(e),y()}};for(var t in Array.from(l.children))e(t)}window.generateProjects=function(e){h.destroy();var t=r.default;"all"!==e&&(t=r.default.filter((function(t){return-1!==t.tags.indexOf(e)||-1!==t.tech.indexOf(e)}))),d.innerHTML="",0===t.length?(a=0,_(0),d.append("Тут пусто :("),u.innerHTML="",m.style.display="none"):(t.forEach((function(e){var t=document.createElement("div");t.className="gallery__galleryItem noselect";var n=document.createElement("img",{draggable:"false",src:"."+e.images[0]});n.draggable="false",n.src="."+e.images[0],t.appendChild(n),d.appendChild(t)})),p=t,_(t.length),v(a=Math.floor(t.length/2)),h.init(document.getElementById("GalleryParent"),g,b,w,f),h.setActiveView(a),y(),globalThis.gallery.next=h.next,globalThis.gallery.back=h.back),j()}.bind(void 0),window.addEventListener("load",function e(){if(s)return!1;s=!0,window.removeEventListener("load",e),j.call(this),h=(new o.GalleryConstrucor).init(document.getElementById("GalleryParent"),g,b,w,f),v.call(this,Math.floor(r.default.length/2)),h.setActiveView.call(this,Math.floor(r.default.length/2)),y.call(this),document.getElementById("projects__tags__all").checked=!0,globalThis.gallery={},globalThis.gallery.next=h.next,globalThis.gallery.back=h.back}.bind(globalThis))},{"../data/projectsData":"rSus","../gallery/gallery":"Z6W6"}],N0LX:[function(e,t,n){window.addEventListener("scroll",(function(){a(s);var e=o;(e=l(e))!==o&&(c(e),e>-1&&window.history.pushState(null,null,"#"+i[e].id))}),{passive:!0});var i=Array.from(document.getElementById("pageContentParent").children),r=Array.from(document.getElementById("headerElements").children),o=0,s=document.getElementById("header");function a(e){window.scrollY>50?e.setAttribute("scroll","true"):e.setAttribute("scroll","false")}function l(e){for(var t=0;t<i.length;t++)window.scrollY+window.innerHeight/2*1>=i[t].offsetTop&&(e=t);return e-1}function c(e){o>=0&&r[o].setAttribute("active","false"),e>=0&&r[e].setAttribute("active","true"),o=e}new Promise((function(e){a(s),c(l(o)),e()}))},{}],lDcJ:[function(e,t,n){var i,r=window.innerWidth<1e3;function o(){if(window.innerWidth<1e3&&r)i&&i.destroy(),r=!1;else if(!r)if(window.Parallax)i=new Parallax(document.getElementById("scene")),r=!0;else{var e=document.createElement("script");e.src="./dist/parallax.min.js",document.getElementsByTagName("head")[0].appendChild(e),e.onload=function(){i=new Parallax(document.getElementById("scene")),r=!0}}}window.addEventListener("resize",o.bind(this)),new Promise((function(e){o(),e()}))},{}],E4PW:[function(e,t,n){var i=!1;window.addEventListener("load",(function e(){i||(new Promise((function(e){for(var t=Array.from(document.getElementsByClassName("equipment__content")[0].children),n=3;n<t.length;n++)t[n].setAttribute("hidden","true");e()})),i=!0,window.removeEventListener("load",e))}))},{}],imtx:[function(e,t,n){"use strict";e("./js/achievements/achievements.js"),e("./js/staff/staff.js"),e("./js/projects/projects.js"),e("./js/header/header.js"),e("./js/about/about.js"),e("./js/equipment/equipment.js")},{"./js/achievements/achievements.js":"NENU","./js/staff/staff.js":"yeke","./js/projects/projects.js":"TB2l","./js/header/header.js":"N0LX","./js/about/about.js":"lDcJ","./js/equipment/equipment.js":"E4PW"}]},{},["imtx"]);