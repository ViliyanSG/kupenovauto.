/* Kupenov Auto — i18n (BG default, RU, EN) */
(function () {
  const MONTHS = {
    'Януари': { ru: 'Январь', en: 'January' },
    'Февруари': { ru: 'Февраль', en: 'February' },
    'Март': { ru: 'Март', en: 'March' },
    'Април': { ru: 'Апрель', en: 'April' },
    'Май': { ru: 'Май', en: 'May' },
    'Юни': { ru: 'Июнь', en: 'June' },
    'Юли': { ru: 'Июль', en: 'July' },
    'Август': { ru: 'Август', en: 'August' },
    'Септември': { ru: 'Сентябрь', en: 'September' },
    'Октомври': { ru: 'Октябрь', en: 'October' },
    'Ноември': { ru: 'Ноябрь', en: 'November' },
    'Декември': { ru: 'Декабрь', en: 'December' }
  };

  const MAP = {
    /* chrome / dividers / chips */
    'Налични автомобили': { ru: 'Доступные автомобили', en: 'Available Vehicles' },
    'Услуги': { ru: 'Услуги', en: 'Services' },
    'Мърч': { ru: 'Мерч', en: 'Merch' },
    'Технически характеристики': { ru: 'Технические характеристики', en: 'Technical Specifications' },
    'Налично': { ru: 'В наличии', en: 'Available' },
    '← Назад към всички автомобили': { ru: '← Назад ко всем автомобилям', en: '← Back to all vehicles' },
    'Свържи се': { ru: 'Связаться', en: 'Contact' },
    'Свържете се': { ru: 'Свяжитесь с нами', en: 'Contact us' },
    'За оглед, въпроси или допълнителна информация — свържете се с нас.': { ru: 'Для осмотра, вопросов или дополнительной информации — свяжитесь с нами.', en: 'For a viewing, questions, or additional information — get in touch with us.' },
    /* class labels */
    'Ежедневен': { ru: 'Повседневный', en: 'Everyday' },
    'Спортен': { ru: 'Спортивный', en: 'Sport' },
    'Луксозен': { ru: 'Премиум', en: 'Luxury' },
    /* filter / sort */
    'Подредба:': { ru: 'Сортировка:', en: 'Sort:' },
    'Клас:': { ru: 'Класс:', en: 'Class:' },
    'Всички': { ru: 'Все', en: 'All' },
    'Последно добавени': { ru: 'Последние добавленные', en: 'Recently added' },
    '↑ Възходяща сума': { ru: '↑ Возрастание цены', en: '↑ Price ascending' },
    '↓ Низходяща сума': { ru: '↓ Убывание цены', en: '↓ Price descending' },
    '↑ Възходяща година': { ru: '↑ Возрастание года', en: '↑ Year ascending' },
    '↓ Низходяща година': { ru: '↓ Убывание года', en: '↓ Year descending' },
    /* service titles */
    'Внос на автомобил по поръчка': { ru: 'Импорт автомобиля под заказ', en: 'Custom vehicle import' },
    'Изкупуване на стария Ви автомобил': { ru: 'Выкуп вашего автомобиля', en: 'Buying your old vehicle' },
    'Съдействие в КАТ': { ru: 'Помощь в регистрации (КАТ)', en: 'Vehicle registration assistance' },
    'Съдействие при намиране на автомобил': { ru: 'Помощь в подборе автомобиля', en: 'Vehicle search assistance' },
    /* spec section titles */
    'Общи характеристики': { ru: 'Общие характеристики', en: 'General Specifications' },
    'Екстри': { ru: 'Оснащение', en: 'Features' },
    'Административни': { ru: 'Административные данные', en: 'Administrative Information' },
    /* spec labels — general */
    'Модел': { ru: 'Модель', en: 'Model' },
    'Година на производство': { ru: 'Год выпуска', en: 'Year of Manufacture' },
    'Фейслифт': { ru: 'Рестайлинг', en: 'Facelift' },
    'Километри': { ru: 'Пробег', en: 'Mileage' },
    'Гориво': { ru: 'Тип топлива', en: 'Fuel Type' },
    'Кубатура на двигател': { ru: 'Объём двигателя', en: 'Engine Displacement' },
    'Код на двигател': { ru: 'Код двигателя', en: 'Engine Code' },
    'Скоростна кутия': { ru: 'Коробка передач', en: 'Transmission' },
    'Задвижване': { ru: 'Привод', en: 'Drivetrain' },
    'Размер на гуми': { ru: 'Размер шин', en: 'Tire Size' },
    'Конски сили': { ru: 'Мощность (л.с.)', en: 'Horsepower (hp)' },
    'Нютон метри': { ru: 'Тяга мотора (Н·м)', en: 'Torque (Nm)' },
    'Турбо': { ru: 'Турбонаддув', en: 'Turbocharged' },
    'Произход': { ru: 'Происхождение', en: 'Origin' },
    'Ускорение 0–100 км/ч': { ru: 'Разгон 0–100 км/ч', en: '0–100 km/h Acceleration' },
    'Цвят': { ru: 'Цвет', en: 'Color' },
    'Салон': { ru: 'Салон', en: 'Interior' },
    /* spec labels — features */
    'Безключов достъп': { ru: 'Бесключевой доступ', en: 'Keyless Entry' },
    'Подгрев седалки': { ru: 'Подогрев сидений', en: 'Heated Seats' },
    'Подгрев волан': { ru: 'Подогрев рулевого колеса', en: 'Heated Steering Wheel' },
    'Вентилация на седалки': { ru: 'Вентиляция сидений', en: 'Ventilated Seats' },
    'Подгрев челно стъкло': { ru: 'Подогрев лобового стекла', en: 'Heated Windshield' },
    'Панорама': { ru: 'Панорамная крыша', en: 'Panoramic Roof' },
    '360° камера': { ru: 'Камера 360°', en: '360° Camera' },
    'Парктроник': { ru: 'Парктроник', en: 'Parking Sensors' },
    'Паркинг асистент': { ru: 'Ассистент парковки', en: 'Parking Assist' },
    'Адаптивен автопилот': { ru: 'Адаптивный круиз-контроль', en: 'Adaptive Cruise Control' },
    'Вид салон': { ru: 'Тип салона', en: 'Interior Type' },
    'Електрически багажник': { ru: 'Электропривод багажника', en: 'Power Tailgate' },
    'Затъмнени стъкла': { ru: 'Тонированные стёкла', en: 'Tinted Windows' },
    'Прибиране на огледала': { ru: 'Электроскладывание зеркал', en: 'Power Folding Mirrors' },
    'Електрически седалки': { ru: 'Электрорегулировка сидений', en: 'Power Seats' },
    'Carplay / Android Auto': { ru: 'Apple CarPlay / Android Auto', en: 'Apple CarPlay / Android Auto' },
    'Heads Up Display': { ru: 'Проекционный дисплей (Head-Up Display)', en: 'Head-Up Display' },
    'Озвучителна система': { ru: 'Аудиосистема', en: 'Sound System' },
    'Задна камера': { ru: 'Камера заднего вида', en: 'Rear View Camera' },
    'Фарове': { ru: 'Фары', en: 'Headlights' },
    'Спорт пакет': { ru: 'Спортивный пакет', en: 'Sport Package' },
    /* spec labels — admin */
    'Годишен технически преглед': { ru: 'Годовой технический осмотр', en: 'Annual Technical Inspection' },
    'Застраховка ГО': { ru: 'ОСАГО', en: 'Third-Party Liability Insurance' },
    'Каско': { ru: 'КАСКО', en: 'Comprehensive Insurance (Casco)' },
    'Винетка': { ru: 'Виньетка', en: 'Road Toll Sticker (Vignette)' },
    'Годишен данък': { ru: 'Годовой транспортный налог', en: 'Annual Vehicle Tax' },
    /* values */
    'Да': { ru: 'Да', en: 'Yes' },
    'Не': { ru: 'Нет', en: 'No' },
    'Бензин': { ru: 'Бензин', en: 'Petrol' },
    'Дизел': { ru: 'Дизель', en: 'Diesel' },
    'Бензин + Електричество': { ru: 'Бензин + электричество', en: 'Petrol + Electric' },
    'Дизел + Електричество': { ru: 'Дизель + электричество', en: 'Diesel + Electric' },
    'Бензин + Газ': { ru: 'Бензин + газ', en: 'Petrol + LPG' },
    'Автоматична': { ru: 'Автоматическая', en: 'Automatic' },
    '8-степенна автоматична': { ru: '8-ступенчатая автоматическая', en: '8-speed automatic' },
    '6-степенна автоматична': { ru: '6-ступенчатая автоматическая', en: '6-speed automatic' },
    'Автоматична, 7-степенна DCT': { ru: 'Автоматическая, 7-ступенчатая DCT', en: 'Automatic, 7-speed DCT' },
    'Ръчна': { ru: 'Механическая', en: 'Manual' },
    '4×4 (xDrive)': { ru: '4×4 (xDrive)', en: '4×4 (xDrive)' },
    'Задно': { ru: 'Задний', en: 'Rear-wheel drive' },
    'Предно': { ru: 'Передний', en: 'Front-wheel drive' },
    'Кожен': { ru: 'Кожаный', en: 'Leather' },
    'Кожен, черен': { ru: 'Кожаный, чёрный', en: 'Leather, black' },
    'Плат': { ru: 'Ткань', en: 'Cloth' },
    'Плат, спортен': { ru: 'Ткань, спортивный', en: 'Cloth, sport' },
    'Черен': { ru: 'Чёрный', en: 'Black' },
    'Сив': { ru: 'Серый', en: 'Grey' },
    'Червен': { ru: 'Красный', en: 'Red' },
    'Син, матов': { ru: 'Синий, матовый', en: 'Blue, matte' },
    'Тъмно Сив': { ru: 'Тёмно-серый', en: 'Dark grey' },
    'Германия': { ru: 'Германия', en: 'Germany' },
    'България': { ru: 'Болгария', en: 'Bulgaria' },
    'Швейцария': { ru: 'Швейцария', en: 'Switzerland' },
    'Италия': { ru: 'Италия', en: 'Italy' },
    'Халогенни': { ru: 'Галогенные', en: 'Halogen' },
    'Стандартна': { ru: 'Стандартная', en: 'Standard' },
    'Не, само AUX': { ru: 'Нет, только AUX', en: 'No, AUX only' },
    'Да, без челно': { ru: 'Да, кроме лобового', en: 'Yes, except windshield' },
    'Да, само заден': { ru: 'Да, только задний', en: 'Yes, rear only' },
    'Платен за 2026': { ru: 'Оплачен за 2026', en: 'Paid for 2026' },
    'Платен 2026': { ru: 'Оплачен 2026', en: 'Paid 2026' },
    /* merch */
    '← Назад към начало': { ru: '← Назад на главную', en: '← Back to home' },
    'Елегантен ключодържател': { ru: 'Элегантный брелок', en: 'Elegant keychain' },
    'Ключодържател': { ru: 'Брелок', en: 'Keychain' },
    'Характеристики': { ru: 'Характеристики', en: 'Specifications' },
    'Материал': { ru: 'Материал', en: 'Material' },
    'Неръждаема стомана': { ru: 'Нержавеющая сталь', en: 'Stainless steel' },
    'Ринг': { ru: 'Кольцо', en: 'Ring' },
    'За лесно поставяне': { ru: 'Для удобного крепления', en: 'For easy attachment' },
    'Надпис': { ru: 'Надпись', en: 'Inscription' },
    'Лазерно гравиран': { ru: 'Лазерная гравировка', en: 'Laser-engraved' },
    'Изработка': { ru: 'Исполнение', en: 'Build' },
    'Здрава, стилна и дълготрайна': { ru: 'Прочное, стильное и долговечное', en: 'Durable, stylish and long-lasting' },
    'Поръчай сега': { ru: 'Заказать', en: 'Order now' },
    'Поръчай': { ru: 'Заказ', en: 'Order' },
    'Свържете се с нас за поръчка на ключодържателя — ще се радваме да помогнем.': { ru: 'Свяжитесь с нами для заказа брелока — будем рады помочь.', en: 'Contact us to order the keychain — we’ll be happy to help.' },
    /* pen */
    'Черен химикал': { ru: 'Чёрная ручка', en: 'Black pen' },
    'Химикал': { ru: 'Ручка', en: 'Pen' },
    'Химикал със стилус': { ru: 'Ручка со стилусом', en: 'Pen with stylus' },
    'Мастило': { ru: 'Чернила', en: 'Ink' },
    'Стилус': { ru: 'Стилус', en: 'Stylus' },
    'Неръждаема стомана + Пластмаса': { ru: 'Нержавеющая сталь + пластик', en: 'Stainless steel + plastic' },
    'Черно': { ru: 'Чёрные', en: 'Black' },
    'За работа по тъч скрийн': { ru: 'Для работы с сенсорным экраном', en: 'For use with a touchscreen' },
    'Свържете се с нас за поръчка на химикала — ще се радваме да помогнем.': { ru: 'Свяжитесь с нами для заказа ручки — будем рады помочь.', en: 'Contact us to order the pen — we’ll be happy to help.' }
  };

  const HTML_MAP = {
    'contact-title': {
      bg: 'Свържете се<br>с <span>нас</span>',
      ru: 'Свяжитесь<br>с <span>нами</span>',
      en: 'Get in<br><span>touch</span>'
    },
    'contact-sub': {
      bg: 'За въпроси, огледи или допълнителна информация — не се колебайте да се свържете с нас.',
      ru: 'Не стесняйтесь связаться с нами. По вопросам, осмотрам или дополнительной информации.',
      en: 'For questions, viewings, or additional information — don’t hesitate to contact us.'
    },
    'pen-title': {
      bg: 'Черен <span>Химикал</span>',
      ru: 'Чёрная <span>Ручка</span>',
      en: 'Black <span>Pen</span>'
    }
  };

  const SERVICES = [
    {
      title: { bg: 'Внос на автомобил по поръчка', ru: 'Импорт автомобиля под заказ', en: 'Custom vehicle import' },
      text: {
        bg: 'Предлагаме цялостно съдействие при внос на автомобили по поръчка, съобразено с Вашите изисквания за марка, година на производство, пробег, бюджет и оборудване. Работим с наши доказани партньори по цял свят и внасяме автомобили от Южна Корея, цяла Европа, САЩ и Канада. Извършваме предварителна проверка на всеки автомобил, анализ на неговата история и състояние. Организираме процеса по транспортиране до България. Нашата цел е да получите автомобил с доказан произход, реално състояние и максимално добра стойност според Вашия бюджет.',
        ru: 'Мы предлагаем полный комплекс услуг по индивидуальному подбору и импорту автомобилей в соответствии с Вашими требованиями к марке, году выпуска, пробегу, бюджету и комплектации. Мы сотрудничаем с проверенными партнёрами по всему миру и импортируем автомобили из Южной Кореи, стран Европы, США и Канады. Перед покупкой каждый автомобиль проходит тщательную проверку, включая анализ его истории и технического состояния. Мы также организуем весь процесс доставки автомобиля в Болгарию. Наша цель — предоставить Вам автомобиль с подтверждённым происхождением, реальным техническим состоянием и максимально выгодным соотношением цены и качества в рамках Вашего бюджета.',
        en: 'We offer comprehensive assistance with custom vehicle imports, tailored to your requirements regarding make, model year, mileage, budget, and equipment. We work with trusted partners worldwide and import vehicles from South Korea, across Europe, the United States, and Canada. Every vehicle undergoes a thorough pre-purchase inspection, including a detailed review of its history and overall condition. We also organize the entire transportation process to Bulgaria. Our goal is to provide you with a vehicle of verified origin, genuine condition, and the best possible value within your budget.'
      }
    },
    {
      title: { bg: 'Изкупуване на стария Ви автомобил', ru: 'Выкуп вашего автомобиля', en: 'Buying your old vehicle' },
      text: {
        bg: 'Ако желаете да продадете настоящия си автомобил, предлагаме бърза и коректна оценка според неговото състояние, година, пробег, пазарна стойност и технически характеристики. Изкупуването може да бъде извършено като отделна сделка или като част от покупката на нов автомобил. Осигуряваме удобен процес, ясни условия и спестяване на време при търсенето на купувач.',
        ru: 'Если Вы хотите продать свой текущий автомобиль, мы предлагаем быструю и объективную оценку с учётом его технического состояния, года выпуска, пробега, рыночной стоимости и технических характеристик. Мы можем выкупить Ваш автомобиль как в рамках отдельной сделки, так и в рамках покупки нового автомобиля. Мы обеспечиваем удобный процесс, прозрачные условия и экономим Ваше время, избавляя Вас от необходимости самостоятельно искать покупателя.',
        en: 'If you wish to sell your current vehicle, we offer a fast and fair appraisal based on its condition, model year, mileage, market value, and technical specifications. We can purchase your vehicle either as a separate transaction or as part of the purchase of your next vehicle. We provide a convenient process, transparent terms, and save you the time and effort of finding a buyer on your own.'
      }
    },
    {
      title: { bg: 'Съдействие в КАТ', ru: 'Помощь в регистрации (КАТ)', en: 'Vehicle registration assistance' },
      text: {
        bg: 'Оказваме съдействие при административните процедури, свързани с регистрация, пререгистрация, смяна на собственост, издаване на регистрационни табели и подготовка на необходимите документи. Целта е да улесним процеса и да Ви спестим време, като Ви насочим през всички необходими стъпки за коректно и спокойно приключване на регистрацията.',
        ru: 'Мы оказываем содействие при прохождении всех административных процедур, связанных с регистрацией, перерегистрацией, переоформлением права собственности, получением регистрационных номерных знаков и подготовкой необходимых документов. Наша цель — максимально упростить процесс, сэкономить Ваше время и сопровождать Вас на каждом этапе, обеспечивая правильное и спокойное оформление регистрации автомобиля.',
        en: 'We provide assistance with all administrative procedures related to vehicle registration, re-registration, ownership transfer, license plate issuance, and the preparation of the required documentation. Our goal is to simplify the entire process, save you valuable time, and guide you through every necessary step to ensure a smooth, accurate, and hassle-free vehicle registration experience.'
      }
    },
    {
      title: { bg: 'Съдействие при намиране на автомобил', ru: 'Помощь в подборе автомобиля', en: 'Vehicle search assistance' },
      text: {
        bg: 'Помагаме Ви да откриете автомобил, който отговаря на Вашите нужди, предпочитания и бюджет. Анализираме пазара, сравняваме оферти, проверяваме историята и състоянието на избрани автомобили и Ви консултираме при вземането на решение. Независимо дали търсите семеен автомобил, градска кола, SUV, бизнес автомобил или лекотоварен модел, съдействаме за намиране на подходящо и сигурно решение.',
        ru: 'Мы помогаем Вам подобрать автомобиль, который полностью соответствует Вашим потребностям, предпочтениям и бюджету. Мы анализируем рынок, сравниваем предложения, проверяем историю и техническое состояние выбранных автомобилей, а также консультируем Вас на каждом этапе принятия решения. Независимо от того, ищете ли Вы семейный автомобиль, городской автомобиль, внедорожник, автомобиль бизнес-класса или лёгкий коммерческий транспорт, мы поможем найти наиболее подходящее и надёжное решение.',
        en: 'We help you find a vehicle that perfectly matches your needs, preferences, and budget. We analyze the market, compare available offers, verify the history and condition of selected vehicles, and provide expert guidance throughout the decision-making process. Whether you are looking for a family car, a city vehicle, an SUV, a business vehicle, or a light commercial vehicle, we are committed to finding the right and reliable solution for you.'
      }
    }
  ];

  let LANG = 'bg';

  function tr(s, lang) {
    lang = lang || LANG;
    s = (s == null ? '' : String(s)).trim();
    if (!s || lang === 'bg') return s;
    if (MAP[s] && MAP[s][lang]) return MAP[s][lang];
    const m = s.match(/^([А-Яа-яA-Za-z]+)\s+(\d{4})$/);
    if (m && MONTHS[m[1]]) return MONTHS[m[1]][lang] + ' ' + m[2];
    const d = s.match(/^До\s+([А-Яа-я]+)\s+(\d{4})$/);
    if (d && MONTHS[d[1]]) return (lang === 'en' ? 'Until ' : 'До ') + MONTHS[d[1]][lang] + ' ' + d[2];
    let u;
    if ((u = s.match(/^(.+?)\s*сек\.?$/))) return lang === 'en' ? u[1].trim() + ' sec' : s;
    if ((u = s.match(/^([\d\s.]+)\s*к\.\s*с\.?$/))) return u[1].trim() + (lang === 'en' ? ' hp' : ' л.с.');
    if ((u = s.match(/^([\d\s]+)\s*см³$/))) return lang === 'en' ? u[1].trim() + ' cc' : s;
    return s;
  }

  const STATIC_SEL = [
    '[data-i18n]',
    '.divider span',
    '.specs-full-title',
    '.specs-full-table td',
    '.hero-table td',
    '.tag-available',
    '.tag-class',
    '.service-title',
    '.back-link',
    '.contact-cta',
    '.filter-btn-pre',
    '.filter-option',
    '.service-modal-title',
    '.service-modal-text',
    '.product-sub',
    '.product-specs-title',
    '.product-specs td',
    '.product-cta'
  ].join(', ');

  function applyStatic(lang) {
    document.querySelectorAll(STATIC_SEL).forEach(el => {
      if (el.dataset.i18nBg === undefined) el.dataset.i18nBg = el.textContent.trim();
      el.textContent = tr(el.dataset.i18nBg, lang);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const h = HTML_MAP[el.dataset.i18nHtml];
      if (h) el.innerHTML = h[lang] || h.bg;
    });
  }

  function applyLang(lang) {
    LANG = lang;
    window.KA_LANG = lang;
    try { localStorage.setItem('ka_lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
    applyStatic(lang);
    document.dispatchEvent(new CustomEvent('ka:lang', { detail: lang }));
  }

  function initSwitcher() {
    const sw = document.getElementById('langSwitch');
    if (!sw) return;
    const btn = document.getElementById('langBtn');
    const current = document.getElementById('langCurrentFlag');
    const options = Array.from(sw.querySelectorAll('.lang-option'));
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = sw.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', () => {
      sw.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
    function sync(lang) {
      const act = options.find(o => o.dataset.lang === lang) || options[0];
      options.forEach(o => o.classList.toggle('active', o === act));
      if (current) current.innerHTML = act.querySelector('.lang-flag').innerHTML;
    }
    document.addEventListener('ka:lang', e => sync(e.detail));
    options.forEach(opt => {
      opt.addEventListener('click', e => {
        e.stopPropagation();
        sw.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        applyLang(opt.dataset.lang);
      });
    });
    sync(LANG);
  }

  function init() {
    initSwitcher();
    let saved = 'bg';
    try { saved = localStorage.getItem('ka_lang') || 'bg'; } catch (e) {}
    applyLang(saved);
  }

  window.KA = { tr: tr, applyLang: applyLang, services: SERVICES, get lang() { return LANG; } };
  window.KA_LANG = 'bg';

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
