parcelRequire=function(e,t,n,i){var r,s="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function a(n,i){if(!t[n]){if(!e[n]){var r="function"==typeof parcelRequire&&parcelRequire;if(!i&&r)return r(n,!0);if(s)return s(n,!0);if(o&&"string"==typeof n)return o(n);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}d.resolve=function(t){return e[n][1][t]||t},d.cache={};var c=t[n]=new a.Module(n);e[n][0].call(c.exports,d,c,c.exports,this)}return t[n].exports;function d(e){return a(d.resolve(e))}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=t,a.parent=s,a.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]};for(var l=0;l<n.length;l++)try{a(n[l])}catch(e){r||(r=e)}if(n.length){var c=a(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}if(parcelRequire=a,r)throw r;return a}({NENU:[function(e,t,n){var i=void 0;window.addEventListener("load",(function e(){window.Swiper&&(i||(new Promise((function(e){new Swiper(".achievements__swiperParent",{slidesPerView:"auto",spaceBetween:15,pagination:{el:".achievements__swiperPagination",clickable:!0},mousewheel:{releaseOnEdges:!0}}),i=!0,e()})),window.removeEventListener("load",e)))}))},{}],yeke:[function(e,t,n){var i=void 0;window.addEventListener("load",(function e(){window.Swiper&&(i||(new Promise((function(e){new Swiper(".staff__swiper",{spaceBetween:10,slidesPerView:"auto",freeMode:!0,loop:!0,loopFillGroupWithBlank:!0,autoplay:{delay:0,disableOnInteraction:!1,pauseOnMouseEnter:!0},speed:2200,mousewheel:{releaseOnEdges:!0}}),i=!0,e()})),window.removeEventListener("load",e)))}))},{}],rSus:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=[{"#":"",title:"ARtillery","---":"",description:"\\n\\nЗадача игрока — продержаться как можно дольше, отстреливаясь от противников, появляющихся в пространстве вокруг него. Для защиты игрок может перемещать и наклонять телефон, а также сбивать летящие в него снаряды.\\nДля стрельбы нужно коснуться экрана. Со временем сложность увеличивается. Существует три типа противников с разными моделями поведения и сложностью, каждый из которых появляется реже или чаще других.\\n\\nПриложение реализовано с использованием ARCore, что позволяет ему работать без привязки к _печатным_ меткам.\\n\\n> Печатные метки — это распечатанные на бумаге или нарисованные ярким цветом специальные символы, которые являются опорным маркером для камеры. [Подробнее](https://habr.com/ru/post/563666/?)\\n\\nРанняя версия приложения была реализована с использованием Vuforia, для работы требовалось распечатать метку.",images:["/images/projects/ARtillery/resized_ARtillery_Moment-min.webp","/images/projects/ARtillery/resized_ARtillery_Moment3.webp","/images/projects/ARtillery/resized_ARtillery_Moment2-min.webp","/images/projects/ARtillery/ARtilleryAction.gif"],videos:["https://youtu.be/BIoWlE25bD4"],tags:["Игра","AR","Unity","Android"],tech:["Unity"],developers:["Поздняков Д.В."],sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/ARtillery"}],link:"ARtillery"},{"#":"",title:"Многопользовательская сборка ракетного двигателя","---":"",description:"\\n\\n\\nИгроки собирают ракетный двигатель серии CFM-56 в VR-пространстве.\\n\\nКаждый этап сборки сопровождается руководствами и подсказками, все детали документированы и подробно описаны. Собранная модель анимирована и демонстрирует принципы своей работы.\\n\\nПроект является демонстрацией процесса обучения специалистов по оборудованию в VR-пространстве: погружение позволяет быстро освоить материал без риска порчи настоящего оборудования и получения травм.\\n\\n",images:["/images/projects/Engine-VR/resized_s4.webp","/images/projects/Engine-VR/resized_s3.webp","/images/projects/Engine-VR/resized_s2.webp","/images/projects/Engine-VR/resized_s1.webp","/images/projects/Engine-VR/resized_141155619-bb28a0e8-fd3b-4359-97e5-36f3d1cf71c3.webp","/images/projects/Engine-VR/resized_141160470-a31d20dd-86bd-4be8-9308-a631227b5ba0.webp","/images/projects/Engine-VR/resized_141155697-f247130d-e9a9-4f7d-812c-7a328e3022af.webp","/images/projects/Engine-VR/resized_141155722-2e5c8eab-dfef-42f7-ae67-daf43e1756d6.webp"],videos:["https://youtu.be/6FTMDRp5fN4"],tags:["VR","Взаимодействие","Образовательная"],tech:["Unity","C#"],developers:["Сиротенко М.Р.","Корчиков М.Д.","Смирнов М.А","Лысаков И.А.","Смирнов Я.А."],site:"",sourcecode:[{name:"Исходный код",link:"https://github.com/RTUITLab/Engine-VR"}],link:"Engine-VR"},{"#":"",title:"GameCenter (система рекордов)","---":"",description:"\\n\\nСистема предназначена для формирования очереди на выставочные стенды, для контроля посещаемости проектов лаборатории ИТ и предоставления игровой статистики пользователей. Также предусмотрено администрирование  рекордов пользователей, игр, очередей.",images:["/images/projects/GameCenter-Front/resized_1.webp","/images/projects/GameCenter-Front/resized_2.webp","/images/projects/GameCenter-Front/resized_3.webp","/images/projects/GameCenter-Front/resized_4.webp"],videos:[],tags:["Frontend","Информационная система","Обработка данных"],tech:["Angular","Asp.net core"],developers:["Китанин С.C.","Южаков В.Е."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/GameCenter-Front"},{name:"Бэкенд",link:"https://github.com/RTUITLab/GameCenter-Backend"}],link:"GameCenter-Front"},{"#":"",title:"GeoHelper","---":"",description:"\\n\\n\\nПроект для реализации AR-слоя мира, в котором отображаются объекты  дополненной реальности в зависимости от заданного географического  положения.\\n\\nПользователи могут «привязывать» информацию к географическим объектам с помощью телефона, а после просматривать её. Простейшие примеры использования: AR-подсказки для навигации, исторические справки о памятниках архитектуры, справочная информация для коммунальных служб.\\n\\nПроект состоит из сайта и приложений для платформ Android и IOS.\\n\\nСайт предназначен для управления внесёнными данными. Мобильное приложение служит для отображения AR-слоя мира на  экране используемого устройства.\\n\\n",images:["/images/projects/GeoHelperUnity/resized_s1.webp","/images/projects/GeoHelperUnity/resized_s2.webp","/images/projects/GeoHelperUnity/resized_s3.webp","/images/projects/GeoHelperUnity/resized_s4.webp"],videos:[],tags:["Frontend","Backend","Mobile","AR"],tech:["Vue","Node.js","Unity","AR Foundation","C#"],developers:["Лаптев И.А.","Китанин С.С.","Быковская О.C.","Смирнов Я.А."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/GeoHelper-Front"},{name:"Бэкенд",link:"https://github.com/RTUITLab/GeoHelper-Back"},{name:"Unity проект (приложение для Android или Ios)",link:"https://github.com/RTUITLab/GeoHelperUnity"}],link:"GeoHelperUnity"},{"#":"",title:"GyroBall","---":"",description:"\\n\\nИгра для проверки удобства использования механики акселерометра.\\n\\nИгра состоит из уровней-лабиринтов с препятствиями, через которые необходимо прокатить шар. Управление — наклонами телефона. Для шарика доступно 4 различные механики, соответствующие стихиям: вода, земля, огонь, воздух.\\n\\nЛокации соответствуют выбранной стихийной тематике.",images:["/images/projects/GyroBall/resized_21.webp","/images/projects/GyroBall/resized_22.webp","/images/projects/GyroBall/resized_24.webp","/images/projects/GyroBall/resized_25.webp","/images/projects/GyroBall/resized_Снимок.webp","/images/projects/GyroBall/resized_Снимок2.webp","/images/projects/GyroBall/resized_Снимок3.webp","/images/projects/GyroBall/resized_Снимок4.webp","/images/projects/GyroBall/resized_Снимок5.webp","/images/projects/GyroBall/resized_Снимок22.webp","/images/projects/GyroBall/resized_23.webp","/images/projects/GyroBall/resized_21.webp","/images/projects/GyroBall/resized_1.webp","/images/projects/GyroBall/resized_2.webp","/images/projects/GyroBall/resized_3.webp"],videos:[],tags:["Игра","Аркада","Mobile"],tech:["C#","3D modeling","Unity 3D"],developers:["Баканова М.В.","Новаков Н.Ю."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/GyroBall"}],link:"GyroBall"},{"#":"",title:"ITLab (система управления лабораторией)","---":"",description:"\\n\\nДля организации работы людей в лаборатории создана система, учитывающая активность людей, в рамках деятельности лаборатории. Система позволяет распределять нагрузку, обеспечивать прозрачность выполняемых действий и мероприятий, контролировать оплату работы.\\n\\nДля использования системы можно использовать браузер, либо специальные мобильные приложения. Поддерживаются уведомления с помощью ботов в социальных сетях и почты.",images:["/images/projects/ITLab/resized_s1.webp","/images/projects/ITLab/resized_s2.webp","/images/projects/ITLab/resized_s3.webp","/images/projects/ITLab/resized_s4.webp","/images/projects/ITLab/resized_1.webp","/images/projects/ITLab/resized_2.webp"],videos:[],tags:["Информационная система","Frontend","Backend","Mobile"],tech:["Vue","ASP","Ktor","Swift"],developers:["Макущенко М.А.","Романов Д.Е.","Комар Б.Г.","Кузнецов А.А.","Иванов М.Е."],site:"",sourcecode:[{name:"Фронтенд",link:"https://github.com/RTUITLab/ITLab-Front"},{name:"Система событий/оборудования",link:"https://github.com/RTUITLab/ITLab-Back"},{name:"Система уведомлений",link:"https://github.com/RTUITLab/ITLab-Notify"},{name:"Система записей о работе",link:"https://github.com/RTUITLab/ITLab-Reports"},{name:"Система учета зарплат",link:"https://github.com/RTUITLab/ITLab-Salary"},{name:"Приложение для iOS",link:"https://github.com/RTUITLab/ITLab-iOS"}],link:"ITLab"},{"#":"",title:"Сервис проектов RTUITLab","---":"",description:"\\n\\nСервис проектов является отдельным модулем, интегрированным в систему управления лабораторией.\\n\\nСервис позволяет отслеживать проекты лаборатории, мониторить процесс их выполнения, контроллировать выполнение задач каждой выпускаемой версии. Присутствует возможность хранить файлы, относящиеся к проекту, оставлять комментарии, публиковать новости. Дополнительно реализована система ролей и ведения документации.",tags:["Backend","Golang"],tech:["Go","MongoDB"],developers:["Демин Д.Д.","Миронов Н.М.","Лаптев И.А.","Корольков А.Д.","Баикин К.Е."],images:["/images/projects/ITLab-Projects/resized_list.webp","/images/projects/ITLab-Projects/resized_show_ArtWay.webp","/images/projects/ITLab-Projects/resized_show_ArtWay2.webp","/images/projects/ITLab-Projects/resized_show_VIKA.webp","/images/projects/ITLab-Projects/resized_edit_VIKA.webp"],videos:[],site:"https://manage.rtuitlab.dev/projects",sourcecode:[{name:"Бекенд",link:"https://github.com/RTUITLab/ITLab-Projects"},{name:"Фронтенд",link:"https://github.com/RTUITLab/ITLab-Projects-Front"}],link:"ITLab-Projects"},{"#":"",title:"Owl Cabin — Летай-созерцай-собирай-улучшай","---":"",description:"\\n\\nУправляем самолётом от третьего лица. Собираем звёздочки, улучшаем самолёт, набираем очки.\\n\\nКрасивая, спокойная музыка, красочные локации, спокойный полёт.",images:["/images/projects/OwlCabin/resized_s6.webp","/images/projects/OwlCabin/resized_s2.webp","/images/projects/OwlCabin/resized_s3.webp","/images/projects/OwlCabin/resized_s4.webp","/images/projects/OwlCabin/resized_s5.webp","/images/projects/OwlCabin/resized_s1.webp","/images/projects/OwlCabin/resized_s7.webp"],videos:[],tags:["VR","Game","Aircraft","Relax","Easy play"],tech:["Unity","Google Cardboard"],developers:["Миронов Н. М.","Иерусалимов И. Д.","Корчиков М. Д.","Валяев Д. А.","Шошников И. К."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/OwlCabin"}],link:"OwlCabin"},{"#":"",title:"Plane crash simulator","---":"",description:"\\n\\nСимулятор, помещающий пользователя в ситуацию, когда он находится в падающем самолете. Самолет находится в турбулентности и постепенно наклоняется вперед с раскачкой в разные стороны.",images:["/images/projects/PlaneCrashSimulator/resized_1.webp","/images/projects/PlaneCrashSimulator/resized_2.webp","/images/projects/PlaneCrashSimulator/resized_3.webp"],videos:[],tags:["VR","Симулятор"],tech:["Unity","Steam VR","C#"],developers:["Валяев Д.А.","Шорин И.А."],site:"",sourcecode:[{name:"Исходный код",link:"https://github.com/RTUITLab/PlainCrashSimulator"}],link:"PlaneCrashSimulator"},{"#":"",title:"ЗИЛ","---":"",description:"\\n\\nИгра для кресла [Futurift](https://6-dof.ru/futurift/).\\n\\nОтрыв от преследования в автомобиле, в зоне боевых действий. Стрельба и оружие прилагаются.",images:["/images/projects/Project-3IL/resized_s2.webp","/images/projects/Project-3IL/resized_s1.webp","/images/projects/Project-3IL/resized_s3.webp","/images/projects/Project-3IL/resized_s4.webp"],videos:[],tags:["VR"],tech:["Unity","Steam VR","C#"],developers:["Смирнов М.А.","Новаков Н.Ю.","Егоркин Н.Е.","Валяев Д.А.","Макаров Д.В.","Макущенко М.А.","Баканова М.В.","Шорин И.А.","Иерусалимов И.Д."],site:"",sourcecode:[{name:"Source code",link:"https://github.com/RTUITLab/Project-3IL"}],link:"Project-3IL"},{"#":"",title:"Виртуальный ситуационный центр","---":"",description:"\\n\\nВиртуальный ситуационный центр позволяет множеству людей в любой точке планеты взаимодействовать между собой в единой среде виртуальной реальности. При этом возможно использование любого доступного на данный момент шлема виртуальной реальности.\\n\\nСервисом можно пользоваться без шлема, используя клавиатуру и мышь. В сервисе реализована концепция комнат, к которым подключаются люди, и их общение происходит только внутри данного пространства. Разговоры и обмен файлами не выйдут за пределы выделенного пространства, что обеспечивает конфиденциальность приватного общения. Внутри выделенного виртуального пространства люди могут общаться при помощи голосового чата, могут обмениваться документами из облачных хранилищ (OneDrive, Google drive…), просматривать их, комментировать и обсуждать. В данный момент сервис находится на стадии открытого тестирования.",images:["/images/projects/SC/resized_1.webp","/images/projects/SC/resized_2.webp","/images/projects/SC/resized_s1.webp","/images/projects/SC/resized_s2.webp","/images/projects/SC/resized_s3.webp","/images/projects/SC/resized_s4.webp"],videos:["https://www.youtube.com/embed/HRFRQa3tMcI"],tags:["VR","Виртуальное рабочее пространство","Social"],tech:["NodeJS","ASP. net core","Unreal Engine"],developers:["Макущенко М.А.","Иванов И.Е."],site:"",sourcecode:[],link:"SC"},{"#":"",title:"StuDo","---":"",description:"\\n\\nСервис предназначен для людей, кто желает найти себе партнёров или команду для осуществления своей мечты!\\n\\nОснова сервиса — лента объявлений, с контактами автора, кратким описанием проекта и ролей в нём.\\n\\nНа данный момент проект находится в разработке, в скором времени будет доступен для публичного тестирования.",images:["/images/projects/StuDo/resized_1.webp","/images/projects/StuDo/resized_2.webp","/images/projects/StuDo/resized_3.webp"],videos:["https://youtu.be/WyLDHwuZedc"],tags:["Сервис","Web","Mobile","Tool"],tech:["Vue","ASP.NET core"],developers:["Миронов Н. М.","Цуканов Д. М.","Яковлев А. А.","Алексеев Н. Е.","Лаптев И. А."],site:"",sourcecode:[{name:"Бэкенд",link:"https://github.com/RTUITLab/StuDo-Back"},{name:"Фронтэнд",link:"https://github.com/RTUITLab/StuDo-Front"},{name:"IOS",link:"https://github.com/MrFoggz/StuDo-iOS"},{name:"Android",link:"https://github.com/Suput/StuDo-Android"}],link:"StuDo"},{"#":"",title:"VRDuel — шутер в виртуальной реальности","---":"",description:"\\n\\n\\nШутер в формате виртуальной реальности, позволяющий оттачивать стрельбу из оружия разных видов и уворачиваться от вражеских пуль. В игре можно бросить вызов сразу нескольким противникам, либо сначала потренироваться в спокойной обстановке. В таком режиме у пользователя есть возможность стрелять по бутылкам в баре и мишеням в тире. На выбор представлено 5 моделей оружия, 4 локации и 3 уровня сложности.\\n",images:["/images/projects/VRDuel/resized_148579235-a4f9e25e-dc3c-49d8-b1a6-7dbabfa52a99.webp","/images/projects/VRDuel/resized_148580147-297f79e2-15e3-4b34-8108-9550982b0fe2.webp","/images/projects/VRDuel/resized_148580160-84ee7b40-83f9-439c-a37e-4e1184bd4dd5.webp","/images/projects/VRDuel/resized_148580059-71f366be-9f6c-44bf-a662-abf7e3e00003.webp"],videos:[],tags:["Симулятор","Стрельба","VR","Game"],tech:["Unity","C#"],developers:["Егоркин Н.Е.","Шорин И.А."],site:"",sourcecode:[{name:"GitHub",link:"https://github.com/RTUITLab/VRDuel"}],link:"VRDuel"},{"#":"",title:"VRTherapy — Приложение для релаксации в VR со множеством разнообразных активностей","---":"",description:"\\n\\nВ VRTherapy вы можете погрузиться в захватывающую и успокаивающую виртуальную реальность с приятным звуковым сопровождением. Отдохните у виртуального костра, прогуляйтесь по летнему лесу, послушайте шум прибоя или же сыграйте в мини-игру, где вам предстоит управлять бумажным самолётиком на ветру. Данная игра предназначена исключительно для запуска в портативном VR-шлеме для Android, например, Google Cardboard.",images:["/images/projects/VRTherapy/resized_screenshot1.webp","/images/projects/VRTherapy/resized_screenshot2.webp","/images/projects/VRTherapy/resized_screenshot3.webp","/images/projects/VRTherapy/resized_screenshot4.webp"],videos:[],tags:["VR","Экспириенс","Game","Simulator","Arcade"],tech:["Unity","Android","Google VR","Google Cardboard"],developers:["Баканова М.","Левандровский А.","Матчин А.","Новаков Н."],site:"",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/VRTherapy"}],"разработчики":"",link:"VRTherapy"},{"#":"",title:"BunnyHuntVR — Web VR шутер","---":"",description:"\\n\\nVR игра, обороняйте грядки от проворных и назойливых зайцев. Узнайте сколько морковки вы сможете сохранить.",images:["/images/projects/WebVRShoot/resized_BunnyHuntVR.webp","/images/projects/WebVRShoot/resized_BunnyHuntVR2.webp"],videos:[],tags:["VR","Game","Shooter"],tech:["A-Frame","Javascript","Html"],developers:["Соколов А.В","Иерусалимов И.Д."],site:"https://webvrshoot.rtuitlab.dev/",sourcecode:[{name:"Проект",link:"https://github.com/RTUITLab/WebVRShoot"}],link:"WebVRShoot"}];n.default=i},{}],jM7F:[function(e,t,n){},{}],Z6W6:[function(e,t,n){"use strict";function i(){return!!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=850)}function r(e,t,n,r,s){var o=0,a=200,l=0,c=0,d=function(t,n){return 0==o&&c-l>0&&void 0!==n?1-.2*Math.abs(n):o==e.children.length-1&&c-l<0&&void 0!==n?1-.2*n:1-.2*Math.abs(t)/a},p=function(t,n){return 0==o&&c-l>0&&void 0!==n?Math.pow(t/1.2,2/3)+(a*Math.abs(n)-Math.pow(a*Math.abs(n),2/3))/1.2:o==e.children.length-1&&c-l<0&&void 0!==n?-Math.pow(-t/1.2,2/3)-(a*n-Math.pow(a*n,2/3))/1.2:t/1.2},u=function(t){var n=Number(t),i=e.children[n];if(i){i.style.zIndex=5;var r=Array.from(e.children);n-1>=0&&(r[n-1].style.zIndex=4,n-2>=0&&(r[n-2].style.zIndex=3)),n+1<r.length&&(r[n+1].style.zIndex=4,n+2<r.length&&(r[n+2].style.zIndex=3))}},m=function(t){var n=Number(t),i=e.querySelectorAll(".gallery__parent > *"),r=Array.from(i);r.forEach((function(e){e.style.opacity="0"}));var s=e.children[n];s&&(s.style.opacity=1),n-1>=0&&(r[n-1].style.opacity=1,n-2>=0&&(r[n-2].style.opacity=1)),n+1<r.length&&(r[n+1].style.opacity=1,n+2<r.length&&(r[n+2].style.opacity=1))},g=function(t){var n=Number(t),i=e.children;if(0!==i.length){o=n,function(t){var n=e.children;Array.from(n).forEach((function(e,n){e.style.opacity="0",e.style.transform=n<t?"translate(".concat(p(2*-a-20),"px,0px) scale(").concat(d(-2*a-20),")"):"translate(".concat(p(2*a+20),"px,0px) scale(").concat(d(2*a+20),")")}))}(n),u(n),m(n),i[n].style.transform="",i[n].style.filter="";for(var r=Array.from(e.children),s=0,l=n-1;l>=0;l--)s--,r[Number(l)].style.transform="translate(".concat(p(a*s),"px,0px) scale(").concat(d(a*s),")");s=0;for(var c=n+1;c<r.length;c++)s++,r[Number(c)].style.transform="translate(".concat(p(a*s),"px,0px) scale(").concat(d(a*s),")")}},b=function(){var t=o+Math.round((l-c)/a);t>=0&&e.children.length>t&&(u(t),m(t),r(t)),e.children[o].style.transform="translate(".concat(p(c-l,0),"px,0px) scale(").concat(d(c-l,0),")"),function(t){for(var n=Array.from(e.children),i=0,r=t-1;r>=0;r--)i++,n[r].style.transform="translate(".concat(p(c-l-a*i,i),"px,0px) scale(").concat(d(c-l-a*i,i),")");i=0;for(var s=t+1;s<n.length;s++)i--,n[s].style.transform="translate(".concat(p(c-l-a*i,i),"px,0px) scale(").concat(d(c-l-a*i,i),")")}(o)};function h(t){e.ontouchmove=null,e.onmousemove=null,function(t){e.ontouchmove=null,e.classList.add("gallery__anim");var n=o+Math.round((l-c)/a);0===c&&(n=o),Math.abs(c-l)<5&&t&&(s&&0===t.button&&s.call(this),s&&!t.button&&s.call(this)),n>=0&&e.children.length>n?(g(n),r(n)):n<0?(g(0),r(0)):(g(e.children.length-1),r(e.children.length-1)),setTimeout((function(){e.classList.remove("gallery__anim")}),250)}(t),i()?window.removeEventListener("touchend",h):window.removeEventListener("mouseup",h),n(t)}function f(){var e=window.innerWidth;return e>1150?200:e>1020?150:e>820?130:e>640?100:e>520?80:e>370?60:50}return e.classList.add("gallery__anim"),a=f(),g(0),window.addEventListener("resize",(function(){a=f(),g(o)})),i()?e.ontouchstart=function(n){e.classList.remove("gallery__anim"),window.addEventListener("touchend",h,{passive:!0}),l=n.touches[0].clientX,c=n.touches[0].clientX,t(n),e.ontouchmove=function(e){c=e.touches[0].clientX,b()}}:e.onmousedown=function(n){e.classList.remove("gallery__anim"),window.addEventListener("mouseup",h,{passive:!0}),l=n.clientX,c=n.clientX,t(n),e.onmousemove=function(e){c=e.clientX,b()}},{setActiveView:function(t){if(e.children.length<=t)return!1;o=t,e.classList.add("gallery__anim"),g(t),setTimeout((function(){e.classList.remove("gallery__anim")}),250)},galleryDestroy:function(){e.onmousedown=null,e.onmouseup=null,e.ontouchstart=null,e.ontouchmove=null,e.ontouchend=null,e.onmousemove=null,h()},next:function(){if(o+1>=e.children.length)return null;e.classList.add("gallery__anim"),g(o+1),r(o),setTimeout((function(){e.classList.remove("gallery__anim")}),250)},back:function(){if(o-1<0)return null;e.classList.add("gallery__anim"),g(o-1),r(o),setTimeout((function(){e.classList.remove("gallery__anim")}),250)}}}function s(){}Object.defineProperty(n,"__esModule",{value:!0}),n.GalleryConstrucor=s,n.GalleryItem=function(e){var t=e.children,n=e.hide,i=void 0!==n&&n;return React.createElement("div",{className:"gallery__galleryItem noselect",hide:i.toString(),draggable:!1},t)},n.default=r,n.isMobile=i,e("./gallery.scss"),s.prototype.init=function(e,t,n,i,s){var o=r(e,t,n,i,s),a=o.setActiveView,l=o.galleryDestroy,c=o.next,d=o.back;return this.setActiveView=a,this.galleryDestroy=l,this.next=c.bind(this),this.back=d.bind(this),this},s.prototype.destroy=function(){return this.galleryDestroy(),this},s.prototype.next=function(){return this.next(),this},s.prototype.back=function(){return this.back(),this}},{"./gallery.scss":"jM7F"}],TB2l:[function(e,t,n){"use strict";var i,r=(i=e("../data/projectsData"))&&i.__esModule?i:{default:i},s=e("../gallery/gallery");var o=!1,a=0,l=document.getElementById("projectsStatusBar"),c=document.getElementById("projectInfoContent"),d=document.getElementById("GalleryParent"),p=document.getElementById("currentProjectTitle"),u=document.getElementById("currentProjectLink"),m=r.default,g=null;function b(e){c.classList.add("projects__hide")}function h(){window.location.href=u}function f(e){w(),c.classList.remove("projects__hide")}function w(){0!==m.length&&(p.innerText=m[a].title,u.href="projects/"+m[a].link,u.style.display="block")}function y(e){v(e),w()}function v(e){0!==Array.from(l.children).length&&(l.children[a].setAttribute("active","false"),l.children[e].setAttribute("active","true"),a=e)}function j(e){l.innerHTML="";for(var t=0;t<e;t++)l.appendChild(document.createElement("div"))}function _(){var e=function(e){l.children[e].onclick=function(){g.setActiveView(e),v(e),w()}};for(var t in Array.from(l.children))e(t)}window.generateProjects=function(e){g.destroy();var t=r.default;"all"!==e&&(t=r.default.filter((function(t){return-1!==t.tags.indexOf(e)||-1!==t.tech.indexOf(e)}))),d.innerHTML="",0===t.length?(a=0,j(0),d.append("Тут пусто :("),p.innerHTML="",u.style.display="none"):(t.forEach((function(e){var t=document.createElement("div");t.className="gallery__galleryItem noselect";var n=document.createElement("img",{draggable:"false",src:"."+e.images[0]});n.draggable="false",n.src="."+e.images[0],t.appendChild(n),d.appendChild(t)})),m=t,j(t.length),v(a=Math.floor(t.length/2)),g.init(document.getElementById("GalleryParent"),b,f,y,h),g.setActiveView(a),w(),globalThis.gallery.next=g.next,globalThis.gallery.back=g.back),_()}.bind(void 0),window.addEventListener("load",function e(){if(o)return!1;o=!0,window.removeEventListener("load",e),_.call(this),g=(new s.GalleryConstrucor).init(document.getElementById("GalleryParent"),b,f,y,h),v.call(this,Math.floor(r.default.length/2)),g.setActiveView.call(this,Math.floor(r.default.length/2)),w.call(this),document.getElementById("projects__tags__all").checked=!0,globalThis.gallery={},globalThis.gallery.next=g.next,globalThis.gallery.back=g.back}.bind(globalThis))},{"../data/projectsData":"rSus","../gallery/gallery":"Z6W6"}],N0LX:[function(e,t,n){window.addEventListener("scroll",(function(){a(o);var e=s;(e=l(e))!==s&&(c(e),e>=0?window.history.pushState(null,null,"#"+i[e+1].id):window.history.pushState(null,null,"#"))}),{passive:!0});var i=Array.from(document.getElementById("pageContentParent").children),r=Array.from(document.getElementById("headerElements").children),s=0,o=document.getElementById("header");function a(e){window.scrollY>50?e.setAttribute("scroll","true"):e.setAttribute("scroll","false")}function l(e){for(var t=0;t<i.length;t++)window.scrollY+window.innerHeight/2*1>=i[t].offsetTop&&(e=t);return e-1}function c(e){s>=0&&r[s].setAttribute("active","false"),e>=0&&r[e].setAttribute("active","true"),s=e}new Promise((function(e){a(o),c(l(s)),e()}))},{}],lDcJ:[function(e,t,n){var i,r=window.innerWidth<1e3;function s(){if(window.innerWidth<1e3&&r)i&&i.destroy(),r=!1;else if(!r)if(window.Parallax)i=new Parallax(document.getElementById("scene")),r=!0;else{var e=document.createElement("script");e.src="./dist/parallax.min.js",document.getElementsByTagName("head")[0].appendChild(e),e.onload=function(){i=new Parallax(document.getElementById("scene")),r=!0}}}window.addEventListener("resize",s.bind(this)),new Promise((function(e){s(),e()}))},{}],E4PW:[function(e,t,n){var i=!1;window.addEventListener("load",(function e(){i||(new Promise((function(e){for(var t=Array.from(document.getElementsByClassName("equipment__content")[0].children),n=3;n<t.length;n++)t[n].setAttribute("hidden","true");e()})),i=!0,window.removeEventListener("load",e))}))},{}],imtx:[function(e,t,n){"use strict";e("./js/achievements/achievements.js"),e("./js/staff/staff.js"),e("./js/projects/projects.js"),e("./js/header/header.js"),e("./js/about/about.js"),e("./js/equipment/equipment.js")},{"./js/achievements/achievements.js":"NENU","./js/staff/staff.js":"yeke","./js/projects/projects.js":"TB2l","./js/header/header.js":"N0LX","./js/about/about.js":"lDcJ","./js/equipment/equipment.js":"E4PW"}]},{},["imtx"]);