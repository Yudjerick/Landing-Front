const projects = [
    {
        id: 1,
        title: 'Виртуальный ситуационный центр',
        description: '\tВиртуальный ситуационный центр позволяет множеству людей в любой точке планеты взаимодействовать между собой в единой среде виртуальной реальности. При этом возможно использование любого доступного на данный момент шлема виртуальной реальности. Также сервисом можно пользоваться без шлема, используя клавиатуру и мышь. \n\tВ сервисе реализована концепция комнат, к которым подключаются люди, и их общение происходит только внутри данного пространства. Разговоры и обмен файлами не выйдут за пределы выделенного пространства, что обеспечивает конфиденциальность приватного общения. \n\tВнутри выделенного виртуального пространства люди могут общаться при помощи голосового чата, могут обмениваться документами из облачных хранилищ (OneDrive, Google drive…), просматривать их, комментировать и обсуждать. \n\tВ данный момент сервис находится на стадии открытого тестирования. ',
        image: ['https://files.rtuitlab.ru/landing_src/situation_center/1.png',
                'https://files.rtuitlab.ru/landing_src/situation_center/2.png'],
        videos: ["https://www.youtube.com/embed/HRFRQa3tMcI"],
        date: '10/10/2019 ',
        tags: ['VR', 'Backend', 'Frontend'],
        tech: ['ASP', 'UE'],
        developers: 'Макущенко М.А. Иванов И.Е.',
        // site: 'dev.sc.rtuitlab.ru',
        site: '',
        source_code: ''
    },
    {
        id: 2,
        title: 'ITLab (система управления лабораторией)',
        description: '\tДля организации работы людей в лаборатории создана система, учитывающая активность людей, участие в мероприятиях, оплату работы сотрудников. Система позволяет распределять нагрузку, обеспечивать прозрачность выполняемых действий и мероприятий. Сайт создан для внутреннего использования и доступ к имеют только сотрудники лаборатории. \n\tПроект состоит из нескольких бекендов, написанный на разных языках программирования, таких как C#, GO, Kotlin. Фронтенд реализован на фреймворке Vue.JS. \n\tТак же система имеет возможность уведомлять людей о изменениях, при помощи бота вконтакте или почты. ',
        image: ['https://files.rtuitlab.ru/landing_src/rtuitlab/1.png',
                'https://files.rtuitlab.ru/landing_src/rtuitlab/2.png'],
        videos: [],
        date: '28/03/2020',
        tags: ['Frontend', 'Backend'],
        tech: ['Vue', 'ASP'], // TODO add Ktor
        developers: 'Макущенко М.А. Романов Д.Е. Комар Б.Г. Кузнецов А.А.',
        site: 'https://rtuitlab.ru',
        source_code: [{name: 'Фронтенд', value: 'https://github.com/RTUITLab/ITLab-Front'},
                      {name: 'Система событий/оборудования', value: 'https://github.com/RTUITLab/ITLab-Back'},
                      {name: 'Система уведомлений', value: 'https://github.com/RTUITLab/ITLab-Notify'},
                      {name: 'Система записей о работе', value: 'https://github.com/RTUITLab/ITLab-Reports'},
                      {name: 'Система учета зарплат', value: 'https://github.com/RTUITLab/ITLab-Salary'}]
    },
    {
        id: 3,
        title: 'Квиддич',
        description: '\tИгровое приложение для очков виртуальной реальности и тренажера Futurift V2. Игра основа на вселенной Гарри Поттера. Во время сессии игрок, находясь в тренажере Futurift и Oculus Rift CV1, управляет метлой с помощь левого контроллера, перемещая его позицию, а правым - происходит взаимодействие с квофлом (игровым мячом). Задача игрока забить как можно больше мячей в кольцо за отведенное время. \n\tКресло Futurift позволяет симулировать наклоны метлы, тем самым улучшая погружение игрока в виртуальной реальности. \n\tДля написания игры использовался игровой движок Unreal Engine 4 и плагин для управления креслом Futurift (данный плагин написан сотрудниками лаборатории).',
        image: ['https://files.rtuitlab.ru/landing_src/kvidich/1.png',
                'https://files.rtuitlab.ru/landing_src/kvidich/3.png',
                'https://files.rtuitlab.ru/landing_src/kvidich/2.png',
                'https://files.rtuitlab.ru/landing_src/kvidich/4.png',],
        videos: ["https://www.youtube.com/embed/ua2ugfrAVNM"],
        date: '03/03/2020',
        tags: ['VR'],
        tech: ['UE'],
        developers: 'Калинин И.М.',
        site: '',
        source_code: 'https://github.com/RTUITLab/Quidditch-RTU',
    },
    {
        id: 4,
        title: 'ALPHA3 (Grundfos)',
        description: '\tПриложение, созданное на базе движка Unity для компании Grundfos. Позволяет работать с насосом ALPHA3 производства вышеуказанной компании в среде виртуальной реальности. Проект призван заменить физический стенд с насосом на его виртуальный клон. Благодаря точному симулированию поведения рабочих элементов, а также окружающего пространства, приложение можно использовать в образовательных целях. \n\tВ связи с повышенными требованиями заказчиков к графической составляющей проекта, в Unity был использован улучшенный набор шейдеров «HDRP». ',
        image: ['https://files.rtuitlab.ru/landing_src/grundfos/1.png',
                'https://files.rtuitlab.ru/landing_src/grundfos/2.png',
                'https://files.rtuitlab.ru/landing_src/grundfos/3.png',
                'https://files.rtuitlab.ru/landing_src/grundfos/4.png'],
        videos: [],
        date: '02/03/2020',
        tags: ['VR', 'Unity'],
        tech: ['Unity'],
        developers: 'Сиротенко М.Р. Смирнов М.А. Егоркин Н.Е. Шорин И.А.',
        site: '',
        source_code: 'https://github.com/WeTeamA/ALPHA3',
    },
    {
        // TODO
        id: 5,
        title: 'HoloTD',
        description: '\tИгровое приложение для очков смешанной реальности Microsoft HoloLens. Управление происходит посредствам жестов, поддерживаемых HoloLens первого поколения. Расстановка игровых объектов зависит от пространства, в котором находится игрок в реальном мире. \n\tВо время сессии игрок или несколько игроков, находящихся в одной комнате, расставляют защитные башни по карте, для обеспечения безопасности главного здания, находящегося в центре игрового поля. С двух противоположных углов игровой доски выдвигаются противники в сторону главного здания, которым должен воспрепятствовать игрок. ',
        image: ['https://files.rtuitlab.ru/landing_src/holotd/1.png',
                'https://files.rtuitlab.ru/landing_src/holotd/2.png',
                'https://files.rtuitlab.ru/landing_src/holotd/3.png',],
        videos: ["https://www.youtube.com/embed/N09CstmJpTo"],
        date: '3/03/2020',
        tags: ['AR', 'Unity'],
        tech: ['Unity'],
        developers: 'Шошников И. К. Быковская О. С. Корчиков М. Д.',
        site: '',
        source_code: 'https://github.com/D0rG/HoloTD',
    },
    {
        id: 6,
        title: 'AR Assistant',
        description: '\tВ среде дополненной реальности выполнена визуализация совмещения элементов содержания технической документации с соответствующим промышленным изделием, обеспечивающая возможность интерактивного получения справочного мультимедийного контента. Реализации: для гарнитур дополненной реальности Epson (BT-300, BT-35E и Pro BT-2200) выполнена разработка приложения, синхронизирующего элементы содержания технической документации с соответствующими отладочными платами из лаборатории кафедры вычислительной техники. В соответствии с моделью платы, а также направлением взгляда оператора на ее элементы, выполняется отображение справочного мультимедийного контента.',
        image: ['https://files.rtuitlab.ru/landing_src/ar_assistant/1.png',],
        videos: ["https://www.youtube.com/embed/sH8T9JKN880"],
        date: '25/10/2019',
        tags: ['AR', 'Unity'],
        tech: ['Unity', 'Angular'],
        developers: 'Пушкин А.А.',
        site: '',
        source_code: 'https://github.com/pushkinman/Epson_Plata_AR ',
    },
    {
        id: 7,
        title: 'Info Table',
        description: '\tРазработанное решение направлено на предоставление дополнительной информации о жизни института ИТ для посетителей и гостей университета. Проект представляет собой автономную станцию доступа к информации, выполненную в виде сенсорного стола-монитора. Программное обеспечение устройства позволяет пользователю ознакомиться с актуальными новостями и видеороликами, повествующими о значимых событиях. Специальный раздел меню содержит интегрированные мини-игры, позволяющие отвлечься и скоротать время в ожидании своей очереди. \n\tПрограммное обеспечение совместимо с любой аппаратной реализацией сенсорного терминала под управлением операционных систем Windows и Mac OS и разработано на SPA-фреймворке Angular. Поддерживается как запуск в автономном режиме через Electron (без доступа к сети Интернет контент необходимо обновлять вручную), так и запуск в браузере с обновлением контента в реальном времени (система управления контентом находится в разработке). Интегрированные мини-игры разработаны на Unity. ',
        image: ['https://files.rtuitlab.ru/landing_src/touchscreen_table/1.png',
                'https://files.rtuitlab.ru/landing_src/touchscreen_table/2.png',
                'https://files.rtuitlab.ru/landing_src/touchscreen_table/3.png',
                'https://files.rtuitlab.ru/landing_src/touchscreen_table/4.png',],
        videos: [],
        date: '25/02/2020',
        tags: ['Frontend', 'Unity'],
        tech: ['Angular', 'Unity', 'Electron'],
        developers: 'Дергунов А.А. Нечипоренко А.Ю.',
        site: '',
        source_code: [{name: 'Фронтенд', value: 'https://github.com/enselerizer/RTUPlayer'}],
    },
    {
        id: 8,
        title: 'Симулятор боевого шагохода AT-ST',
        description: '\tИгровое приложение для очков виртуальной реальности и кресла Futurift V2. Игра основана на вселенной Звездных Войн. Во время сессии игрок, находясь в кресле Futurift и шлеме Oculus Rift, управляет боевым шагоходом AT-ST с помощью контроллеров для авиасимуляторов Saitek X52. Основная цель игры - отстрел расставленных на карте врагов (Эвоков). \n\tКресло Futurift позволяет симулировать наклоны кабины шагохода при ходьбе.  \n\tДля написания игры использовался игровой движок Unreal Engine 4 и плагин для управления креслом Futurift (данный плагин написан сотрудниками лаборатории). ',
        image: ['https://files.rtuitlab.ru/landing_src/shagohod/1.png',
                'https://files.rtuitlab.ru/landing_src/shagohod/2.png',
                'https://files.rtuitlab.ru/landing_src/shagohod/3.png',
                'https://files.rtuitlab.ru/landing_src/shagohod/4.png',],
        videos: ["https://www.youtube.com/embed/3QS8Wd79b2o"],
        date: '01/03/2020 ',
        tags: ['VR'],
        tech: ['UE'],
        developers: 'Смирнов Михаил, Меркулов Егор, Шорин Иван, Матчин Артемий, Александр Левандовский',
        site: '',
        source_code: '',
    },
    {
        id: 9,
        title: 'Комары',
        description: '\tИгровое приложение для шлема виртуальной реальности Oculus Rift и контроллера захвата движения рук leap motion. В игре реализована возможность хлопать комаров при их приближении и стрелять, при складывании пальцев определенным образом. Присутствуют различные виды противников, включая босса, разные уровни сложности ведение игрового счета. ',
        image: ['https://files.rtuitlab.ru/landing_src/komari/1.png',
                'https://files.rtuitlab.ru/landing_src/komari/2.png',],
        videos: ['https://www.youtube.com/embed/eQh7gIjKSPE'],
        date: '18/02/2019',
        tags: ['VR', 'Unity'],
        tech: ['Unity'],
        developers: 'Сиротенко М.Р. Смирнов М.А.',
        site: '',
        source_code: 'https://github.com/darke333/MosqGame.git '
    },
    {
        id: 10,
        title: 'GameCenter (система рекордов)',
        description: '\tСистема предназначена для формирования очереди на выставочные стенды, для контроля посещаемости проектов лаборатории ИТ и предоставления игровой статистики пользователей. \n\tТакже предусмотрено администрирование рекордов пользователей, игр, очередей.',
        image: ['https://files.rtuitlab.ru/landing_src/records/1.png',
                'https://files.rtuitlab.ru/landing_src/records/2.png',
                'https://files.rtuitlab.ru/landing_src/records/3.png',
                'https://files.rtuitlab.ru/landing_src/records/4.png',],
        videos: [],
        date: '12/03/2019',
        tags: ['Frontend', 'Backend'],
        tech: ['Angular', 'ASP'],
        developers: 'Китанин С.C. Южаков В.Е.',
        site: '',
        source_code: [{name: 'Фронтенд', value: 'https://github.com/RTUITLab/GameCenter-Front',},
                      {name: 'Бэкенд', value: 'https://github.com/RTUITLab/GameCenter-Backend'}]
    },
    {
        id: 11,
        title: 'ARtillery',
        description: '\tИгровое приложение в дополненной реальности для Android (ранее Android, iOS). \n\tЗадача игрока – продержаться как можно дольше, отстреливаясь от противников, появляющихся в пространстве вокруг него. Для защиты игрок может перемещать и наклонять телефон, а также сбивать летящие в него снаряды. Для стрельбы нужно коснуться экрана. Со временем сложность увеличивается.  \n\tСуществует три типа противников с разными моделями поведения и сложностью, каждый из которых появляется реже или чаще других. \n\tПриложение реализовано с использованием ARCore, что позволяет ему работать без привязки к печатной метке. \n\tРанняя версия риложения была реализована с использованием Vuforia, для работы требуется распечатать метку',
        image: ['https://files.rtuitlab.ru/landing_src/artillery/1.png',
                'https://files.rtuitlab.ru/landing_src/artillery/2.png',],
        videos: ["https://www.youtube.com/embed/BIoWlE25bD4"],
        date: '7/03/2020',
        tags: ['AR', 'Unity'],
        tech: ['Unity'],
        developers: 'Поздняков Д.В.',
        site: '',
        source_code: '',
    },
    {
        id: 12,
        title: 'S0urceHack',
        description: '\tСкрипт автоматизации для демонстрации возможностей Python в сфере Computer Vision, распознавания символов и эмуляции ввода пользователя. \n\tВ качестве примера была выбрана –IO игра (http://s0urce.io/), задача в которой – вводить символы с картинки на скорость. \n\tСкрипт взаимодействует со всеми игровыми элементами, самостоятельно выбирает цель, вводит все необходимые слова, после чего повторяет это. Скрипт не вмешивается в память сторонних процессов, используя в качестве входных данных только скриншот экрана. Он эмулирует пользователя, перехватывая управление мышью и клавиатурой, что делает невозможным его обнаружение многими способами. \n\tВ игре есть много других игроков, вместо которых играет программа, однако именно эта программа показала наиболее элегантное и быстрое решение, не зависящее от периодически меняющегося словаря игры. Скрипт стабильно достигает топ-1 в течение 4-6 часов и не уступает это место никому. \n\tПредобученная модель и датасет внутри проекта. Кроме того, в проекте есть код, позволяющий самостоятельно собрать необходимый для обучения датасет, играя в игру в течение нескольких минут. ',
        image: ['https://files.rtuitlab.ru/landing_src/sourcehack/1.png'],
        videos: [],
        date: '16/09/2019',
        tags: ['Machine Learning'],
        tech: [],
        developers: 'Поздняков Д.В.',
        site: '',
        source_code: 'https://github.com/wndenis/S0urceHack',
    },
    {
        id: 13,
        title: 'SwordMachine',
        description: '\tИгровое приложение для виртуальной реальности. Игровой процесс заключается в сражении на мечах с физически достоверными противниками. Противники используют сложные анимации, которые передаются на игровой рэгдолл, что позволяет смешивать анимированное движение с последствиями воздействий окружающей среды. Таким образом, игрок может заблокировать удар противника, а противники могут как падать, будучи выведенными из строя сильным ударом, так и вставать после этого. Помимо этого, противники используют экстраполяцию (интерполяционный многочлен Ньютона), что позволяет им с достаточной точностью предугадывать движения игрока на 0.5 секунды вперёд.  \n\tАлгоритм поведения противников позволяет им выбирать дистанцию ведения боя, защищаться блокированием, защищаться отступлением, атаковать игрока в наиболее уязвимую точку тела. Есть возможность задать приоритет между тактикой защиты и тактикой атаки. По умолчанию обе тактики имеют одинаковый приоритет. Кроме того, можно задать уровень “Мастерства” противника, влияющий на точность, скорость и непредсказуемость его движений. Приоритет тактики и уровень “Мастерства” вместе задают общую сложность противника.  \n\tИгрок имеет две способности – телепортация и замедление времени. Все взаимодействия в игре имеют визуализацию и звуковое сопровождение. \n\tПроект находится в разработке. ',
        image: ['https://files.rtuitlab.ru/landing_src/swordmachine/1.png',
                'https://files.rtuitlab.ru/landing_src/swordmachine/2.png',
                'https://files.rtuitlab.ru/landing_src/swordmachine/3.png',
                'https://files.rtuitlab.ru/landing_src/swordmachine/4.png',],
        videos: ["https://www.youtube.com/embed/diLe5KwWv0Y"],
        date: '29/02/2020',
        tags: ['VR', 'Unity'],
        tech: ['Unity'],
        developers: 'Поздняков Д.В. Смирнов М.А.',
        site: '',
        source_code: '',
    },
    {
        id: 14,
        title: 'RTUFileManager',
        description: '\tСистема предназначена для структурно-организованного хранения документов. Имеется возможность отслеживания изменений и своевременного оповещения ответственных. При обработке доумента пользователи системы могут общаться и оставлять комментарии.\n\tПроект состоит из бэкенда, написанного на C# с использованием фреймфорка ASP .NET CORE. Для реализации фронтенда используется технология Razor Pages фреймворка ASP .NET CORE. ',
        image: ['https://files.rtuitlab.ru/landing_src/document_system/1.png',
                'https://files.rtuitlab.ru/landing_src/document_system/2.png',
                'https://files.rtuitlab.ru/landing_src/document_system/3.png',
                'https://files.rtuitlab.ru/landing_src/document_system/4.png',],
        videos: [],
        date: '7/02/2020',
        tags: ['Frontend', 'Backend'],
        tech: ['ASP'],
        developers: 'Китанин С.C. ',
        site: '',
        source_code: 'https://github.com/RTUITLab/RTUMIREA-FileManager/tree/develop',
    },
    {
        id: 15,
        title: 'Шестерка',
        description: '\tИгровое приложение для шлема виртуальной реальности HTC Vive. В игре реализована возможность сборки подвески машины “Шестерка”. Инструкция реализована распараллеленной последовательностью действий, где можно каждое колесо собирать отдельно. Каждая часть машины интерактивна, реализована автосборка. Присутствует возможность открыть ворота гаража и проехаться на собранной машине.  ',
        image: ['https://files.rtuitlab.ru/landing_src/6ka/1.png',
                'https://files.rtuitlab.ru/landing_src/6ka/2.png',],
        videos: ["https://www.youtube.com/embed/ViQypjFA1IA"],
        date: '5/03/2019',
        tags: ['VR', 'Unity'],
        tech: ['Unity'],
        developers: 'Сиротенко М.Р. Калинин И.М.',
        site: '',
        source_code: 'https://github.com/darke333/WinterCar.git',
    },
    {
        id: 16,
        title: 'Химическая лаборатория',
        description: '\tИгровое приложение для шлема виртуальной реальности Oculus. Цель приложения – получить необходимые навыки работы со сложным дорогостоящим оборудованием: роторным испарителем. Для этого необходимо следовать инструкциям, последовательно появляющимся на доске и взаимодействовать с определенными объектами. В приложении представлен полный функционал устройства, а также релизована физика воды и смешивания жидкостей.',
        image: ['https://files.rtuitlab.ru/landing_src/him_lab/1.png',
                'https://files.rtuitlab.ru/landing_src/him_lab/2.png',],
        videos: ["https://www.youtube.com/embed/TFXQUm3DMc8"],
        date: '7/03/2020',
        tags: ['VR', 'Unity'],
        tech: ['Unity'],
        developers: 'Сиротенко М.Р. Егоркин Н.',
        site: '',
        source_code: 'https://github.com/darke333/VPHR.git',
    },
    {
        id: 17,
        title: 'RTU Assistant',
        description: '\tRTU Assistant – программный продукт, предназначенный для использования в стенах университета. Голосовой помощник RTU Assistant способен предоставить любую информацию, повседневно требуемую студентам и преподавателям: покажет расположение корпусов, проложит маршрут до аудитории, кафедры или учебного отдела, подскажет расписание на любой день для любой учебной группы, аудитории или экзамена, расскажет, где быстро перекусить или как пройти до ближайшего санузла.  RTU Assistant отлично понимает естественную русскую и английскую речь, благодаря чему запросы выполняются быстрее традиционных методов ввода. \n\tГолосовой помощник выполнен в виде одностраничного web-приложения, разработанного на фреймворке Angular, и предназначенного для установки на информационные терминалы любого рода; единственное требование – наличие микрофона и доступа в Интернет. На данный момент находится в разработке информационный backend, который позволит оперативно обновлять базу данных ассистента, отслеживать запущенные по всему университету экземпляры приложения и предоставлять актуальные маршруты и подсказки с учетом расположения пользователя. ',
        image: ['https://files.rtuitlab.ru/landing_src/speech_assistant/2.png',
                'https://files.rtuitlab.ru/landing_src/speech_assistant/1.png',
                'https://files.rtuitlab.ru/landing_src/speech_assistant/3.png',],
        videos: [],
        date: '06/03/2020',
        tags: ['Frontend', 'Backend', "Machine Learning"],
        tech: ['Angular', 'Node'],
        developers: 'Дергунов А.А.',
        site: '',
        source_code: [{name: 'Фронтенд', value: 'https://github.com/enselerizer/RTUassistant'},
                      {name: 'Информационный бэкенд', value: 'https://github.com/enselerizer/RTUAssistantBackend'}]
    },
    {
        id: 18,
        title: 'ВПХР',
        description: '\tИгровое приложение для шлема виртуальной реальности Oculus. Цель приложения – измерить присутствие отравляющий газов в воздухе. Для этого необходимо провести определенные действия с ампулами и следить за изменением цвета индикатора внутри опытной ампулы. Проводить измерение помогают подсказки. Справа обозначены измеряемые газы. Слева указана температура, которая определяет необходимость нагревания ампулы перед использованием. Отдельно реализовано тестирование в реальных условиях.',
        image: ['https://files.rtuitlab.ru/landing_src/vphr/1.png',
                'https://files.rtuitlab.ru/landing_src/vphr/2.png',],
        videos: ["https://www.youtube.com/embed/ZAXZgctEE5I"],
        date: '16/11/2019',
        tags: ['VR'],
        tech: ['Unity'],
        developers: 'Сиротенко М.Р. Смирнов М.А.',
        site: '',
        source_code: 'https://github.com/darke333/VPHR.git',
    }
]

export default projects;
