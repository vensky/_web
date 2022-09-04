
# Что можно положить в тег <head>
#head #meta #link

### Рекомендуемый минимум

Ниже приведены основные элементы для любого веб-документа (веб-сайта/приложения):

    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!--
       Вышеуказанные 2 мета-тега *должны* стоять как можно раньше в <head>.
       для обеспечения правильного отображения документов.
       Любой другой элемент заголовка должен идти *после* этих тегов.
      -->
      <title>Заголовок страницы</title>
    </head>

`meta charset` - определяет кодировку веб-сайта, стандартом является `utf-8`.

`meta name="viewport"` - настройки viewport, связанные с мобильной отзывчивостью

`width=device-width` - физическая ширина устройства (отлично подходит для мобильных устройств!)

`initial-scale=1` - начальный масштаб, 1 означает отсутствие масштабирования.

### Элементы

Допустимые элементы `<head>` включают `base`, `link`, `meta`, `noscript`, `script`, `style`, `template` и `title`.

Эти элементы предоставляют информацию о том, как документ должен восприниматься и отображаться веб-технологиями, например, браузерами, поисковыми системами, ботами и так далее.

    <!--
     Установите кодировку символов для этого документа так, чтобы
     все символы в пространстве UTF-8 (например, эмодзи)
     отображались правильно.
    -->
    <meta charset="utf-8">
    
    <!-- Установите заголовок документа -->
    <title>Заголовок страницы</title>
    
    <!-- Установите базовый URL для всех относительных URL в документе -->
    <base href="https://example.com/page.html">
    
    <!-- Ссылка на внешний файл CSS -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- Используется для добавления CSS в документ. Используется для важной стилизации -->
    <style>
    /* ... */
    </style>
    
    <!-- Ссылка на внешний JavaScript файл -->
    <script src="script.js"></script>
    
    <!-- Используется для добавление JS в документ-->
    <script>
     // функция(и) идут здесь
    </script>
    
    <!-- Используется на случай если JavaScript отключен в браузере -->
    <noscript>
    
     <!-- Альтернатива, когда JS отключен -->
    </noscript>
    
    <!-- Используется для объявления HTML-фрагментов, которые могут быть клонированы и вставлены в документ. Если указан в <head>, то <template> может содержать только метаданные -->
    <template>
      
    </template>

### Мета

    <!--
     Вышеуказанные 2 мета-тега должны стоять как можно раньше в <head>.
     для обеспечения правильного отображения документов.
     Любой другой элемент заголовка должен идти после этих тегов.
    -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--
     Позволяет контролировать, откуда загружаются ресурсы.
     Поместите как можно раньше в <head>, так как тег 
     применяется только к ресурсам, которые объявлены после него.
    -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'">
    
    <!-- Название веб-приложения (должно использоваться только в том случае, если веб-сайт используется как приложение) -->
    <meta name="application-name" content="Имя приложения">.
    
    <!-- Цвет вкладки для Chrome на Android, Vivaldi, Safari 15 -->
    <meta name="theme-color" content="#4285f4">
    
    <!-- Краткое описание документа (ограничение до 150 символов) -->
    <!-- Это содержимое может использоваться в результатах поисковых систем. -->
    <meta name="description" content="Описание страницы">.
    
    <!-- Управление поведением поисковых машин при осмотре и индексации сайта -->
    <meta name="robots" content="index,follow"><!-- Все поисковые системы -->
    <meta name="googlebot" content="index,follow"><!-- Специфика Google -->
    
    <!-- Указывает Google не показывать поисковую строку sitelinks -->
    <meta name="google" content="nositelinkssearchbox">
    
    <!-- Указывает Google не переводить документ -->
    <meta name="google" content="notranslate">
    
    <!-- Проверить право собственности сайта -->
    <meta name="google-site-verification" content="verification_token"><!-- Google Search Console -->
    <meta name="yandex-verification" content="verification_token"><!-- Яндекс Вебмастерам -->
    <meta name="msvalidate.01" content="verification_token"><!-- Bing Webmaster Center -->
    <meta name="alexaVerifyID" content="verification_token"><!-- Alexa Console -->
    <meta name="p:domain_verify" content="code_from_pinterest"><!-- Pinterest Console-->
    <meta name="norton-safeweb-site-verification" content="norton_code"><!-- Norton Safe Web -->
    
    <!-- Укажите программное обеспечение, использованное для создания документа (например, WordPress, Dreamweaver) -->
    <meta name="generator" content="название программного обеспечения">
    
    <!-- Краткое описание темы вашего документа -->
    <meta name="subject" content="тема вашего документа">
    
    <!-- Дает общую возрастную оценку, основанную на содержании документа -->
    <meta name="rating" content="General">
    
    <!-- Позволяет контролировать, как передается информация о реферере -->
    <meta name="referrer" content="no-referrer">
    
    <!-- Отключить автоматическое определение и форматирование возможных телефонных номеров -->
    <meta name="format-detection" content="phone=no">
    
    <!-- Полностью отказаться от предварительной выборки DNS, установив значение "off" -->
    <meta http-equiv="x-dns-prefetch-control" content="off">
    
    <!-- Указывает документ, который будет отображаться в определенном фрейме -->
    <meta http-equiv="Window-Target" content="_value">
    
    <!-- Гео-теги -->
    <meta name="ICBM" content="широта, долгота">.
    <meta name="geo.position" content="широта;долгота">
    <meta name="geo.region" content="country[-state]"><!-- Код страны (ISO 3166-1): обязательный, код штата (ISO 3166-2): необязательный; например, content="US" / content="US-NY" -->
    <meta name="geo.placename" content="city/town"><!-- например, content="New York City" -->
    
    <!-- Монетизация веб-сайтов https://webmonetization.org/docs/getting-started -->
    <meta name="monetization" content="$paymentpointer.example">

*   ​ [Мета-теги, которые понимает Google](https://support.google.com/webmasters/answer/79812?hl=en)
    
*   ​ [WHATWG Wiki: MetaExtensions](https://wiki.whatwg.org/wiki/MetaExtensions)
    
*   ​ [ICBM в Википедии](https://en.wikipedia.org/wiki/ICBM_address#Modern_use)
    
*   ​ [Геотеги в Википедии](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)
    

### Ссылки

    <!-- Путь до внешней таблицы стилей -->
    <link rel="stylesheet" href="https://example.com/styles.css">.
    
    <!-- Помогает предотвратить проблемы дублированного контента -->
    <link rel="canonical" href="https://example.com/article/?page=2">
    
    <!-- Ссылки на AMP HTML версию текущего документа -->
    <link rel="amphtml" href="https://example.com/path/to/amp-version.html">
    
    <!-- Ссылка на JSON-файл, в котором указаны данные для "установки" веб-приложения -->
    <link rel="manifest" href="manifest.json">
    <link rel="manifest" href="manifest.webmanifest">
    
    <!-- Ссылки на информацию об авторе (авторах) документа -->
    <link rel="author" href="humans.txt">
    
    <!-- Ссылается на заявление об авторском праве, применимое к контексту ссылки -->
    <link rel="license" href="copyright.html">
    
    <!-- Дает ссылку на место в вашем документе, который может быть на другом языке -->
    <link rel="alternate" href="https://es.example.com/" hreflang="es">
    
    <!-- Предоставляет информацию об авторе или другом человеке -->
    <link rel="me" href="https://google.com/profiles/thenextweb" type="text/html">
    <link rel="me" href="mailto:name@example.com">.
    <link rel="me" href="sms:+15035550125">
    
    <!-- Ссылки на документ, описывающий коллекцию записей, документов или других материалов, представляющих исторический интерес -->
    <link rel="archives" href="https://example.com/archives/">
    
    <!-- Ссылки на ресурс верхнего уровня в иерархической структуре -->
    <link rel="index" href="https://example.com/article/">
    
    <!-- Обеспечивает самостоятельную ссылку - полезно, когда документ имеет несколько возможных ссылок -->
    <link rel="self" type="application/atom+xml" href="https://example.com/atom.xml">
    
    <!-- Первый, последний, предыдущий и следующий документы в серии документов, соответственно -->
    <link rel="first" href="https://example.com/article/">
    <link rel="last" href="https://example.com/article/?page=42">
    <link rel="prev" href="https://example.com/article/?page=1">
    <link rel="next" href="https://example.com/article/?page=3">
    
    <!-- Используется, когда для ведения блога используется сторонний сервис -->
    <link rel="EditURI" href="https://example.com/xmlrpc.php?rsd" type="application/rsd+xml" title="RSD">
    
    <!-- Формирует автоматический комментарий, когда другой блог WordPress ссылается на ваш блог WordPress или пост -->
    <link rel="pingback" href="https://example.com/xmlrpc.php">
    
    <!-- Уведомляет URL, когда вы ссылаетесь на него в вашем документе -->
    <link rel="webmention" href="https://example.com/webmention">
    
    <!-- Позволяет размещать сообщения на вашем собственном домене с помощью клиента Micropub -->
    <link rel="micropub" href="https://example.com/micropub">
    
    <!-- Open Search -->
    <link rel="search" href="/open-search.xml" type="application/opensearchdescription+xml" title="Заголовок поиска">.
    
    <!-- Фиды -->
    <link rel="alternate" href="https://feeds.feedburner.com/example" type="application/rss+xml" title="RSS">
    <link rel="alternate" href="https://example.com/feed.atom" type="application/atom+xml" title="Atom 0.3">
    
    <!-- Prefetching, preloading, prebrowsing -->
    <!-- Дополнительная информация: https://css-tricks.com/prefetching-preloading-prebrowsing/ -->
    <link rel="dns-prefetch" href="//example.com/">
    <link rel="preconnect" href="https://www.example.com/">
    <link rel="prefetch" href="https://www.example.com/">
    <link rel="prerender" href="https://example.com/">.
    <link rel="preload" href="image.png" as="image">

*   ​ [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml)
    

### Иконки

    <!-- Для IE 10 и ниже -->
    <!-- Поместите favicon.ico в корневой каталог - тег не нужен -->
    <!-- Иконка в максимальном разрешении, для которого она нам нужна -->
    <link rel="icon" sizes="192x192" href="/path/to/icon.png">
    
    <!-- Иконка Apple Touch (повторное использование 192px icon.png) -->
    <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">
    
    <!-- Значок прикрепленной вкладки Safari -->
    <link rel="mask-icon" href="/path/to/icon.svg" color="blue">

*   ​ [Все о фавиконах (и сенсорных иконках)](https://bitsofco.de/all-about-favicons-and-touch-icons/)
    
*   ​ [Создание прикрепленных иконок вкладок](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html)
    
*   ​ [Favicon Cheat Sheet](https://github.com/audreyr/favicon-cheat-sheet)
    
*   ​ [Иконки и цвета браузера](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/)
    

### Социальные сети

#### Facebook Open Graph

> Большинство материалов передается на Facebook в виде URL, поэтому важно, чтобы вы разметили свой сайт тегами Open Graph, чтобы взять под контроль то, как ваши материалы появляются на Facebook. [Подробнее о разметке Facebook Open Graph](https://developers.facebook.com/docs/sharing/webmasters#markup)

    <meta property="fb:app_id" content="123456789">
    <meta property="og:url" content="https://example.com/page.html">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Заголовок содержимого">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:image:alt" content="Описание того, что находится на изображении (не подпись)">
    <meta property="og:description" content="Описание">
    <meta property="og:site_name" content="Название сайта">
    <meta property="og:locale" content="ru_RU">
    <meta property="article:author" content="">

*   ​ [Open Graph protocol](http://ogp.me/)
    
*   ​ Протестируйте свою страницу с помощью [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
    

#### Twitter Card

> С помощью Twitter Cards вы можете прикреплять к твитам фотографии, видео и мультимедийные файлы, тем самым способствуя привлечению трафика на ваш сайт. [Подробнее о Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)

    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@site_account">
    <meta name="twitter:creator" content="@individual_account">
    <meta name="twitter:url" content="https://example.com/page.html">
    <meta name="twitter:title" content="Заголовок контента">.
    <meta name="twitter:description" content="Описание контента менее 200 символов">.
    <meta name="twitter:image" content="https://example.com/image.jpg">.
    <meta name="twitter:image:alt" content="Текстовое описание изображения, передающее его суть пользователям с ослабленным зрением. Максимум 420 символов.">

*   ​ [Начало работы с карточками - Twitter Developers](https://dev.twitter.com/cards/getting-started)
    
*   ​ Проверьте свою страницу с помощью [Twitter Card Validator](https://cards-dev.twitter.com/validator)
    

#### Twitter Privacy

Если вы встраиваете твиты в свой сайт, Twitter может использовать информацию с вашего сайта для адаптации контента и предложений для пользователей Twitter. [Подробнее о возможностях конфиденциальности Twitter](https://dev.twitter.com/web/overview/privacy#what-privacy-options-do-website-publishers-have).

    <!-- запретить Twitter использовать информацию о вашем сайте в целях персонализации -->
    <meta name="twitter:dnt" content="on">

#### Schema.org

    <html lang="" itemscope itemtype="https://schema.org/Article">
       <head>
         <link rel="author" href="">
         <link rel="publisher" href="">
         <meta itemprop="name" content="Заголовок контента">.
         <meta itemprop="description" content="Описание содержимого менее 200 символов">.
         <meta itemprop="image" content="https://example.com/image.jpg">

**Примечание:** Эти мета-теги требуют добавления атрибутов `itemscope` и `itemtype` к тегу `<html>`.

*   ​ [Начало работы - schema.org](https://schema.org/docs/gs.html)
    
*   ​ Протестируйте свою страницу с помощью [Rich Results Test](https://search.google.com/test/rich-results)
    

#### Pinterest

Pinterest позволяет запретить людям сохранять страницы вашего сайта, согласно [их центру помощи](https://help.pinterest.com/en/business/article/prevent-saves-to-pinterest-from-your-site). Описание `description` является необязательным.

    <meta name="pinterest" content="nopin" description="Извините, вы не можете сохранить с моего сайта!">.

#### Facebook Instant Articles

    <meta charset="utf-8">
    <meta property="op:markup_version" content="v1.0">
    
    <!-- URL веб-версии вашей статьи -->
    <link rel="canonical" href="https://example.com/article.html">
    
    <!-- Стиль, который будет использоваться для этой статьи -->
    <meta property="fb:article_style" content="myarticlestyle">

*   ​ [Создание статей - мгновенные статьи](https://developers.facebook.com/docs/instant-articles/guides/articlecreate)
    
*   ​ [Образцы кода - мгновенные статьи](https://developers.facebook.com/docs/instant-articles/reference)
    

#### OEmbed

    <link rel="alternate" type="application/json+oembed"
     href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=json"
     title="Профиль oEmbed: JSON">
     
    <link rel="alternate" type="text/xml+oembed"
     href="https://example.com/services/oembed?url=http%3A%2F%2Fexample.com%2Ffoo%2F&amp;format=xml"
     title="oEmbed Profile: XML">

*   ​ [oEmbed format](https://oembed.com/)
    

#### QQ/Wechat

Пользователи обмениваются веб-страницами в qq wechat с помощью форматированного сообщения

    <meta itemprop="name" content="название акции">
    <meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png">
    <meta name="description" itemprop="description" content="поделиться содержимым">

*   ​ [Code Format Docs](http://open.mobile.qq.com/api/mqq/index#api:setShareInfo)
    

### Браузеры / Платформы

#### Apple iOS

    <!-- Баннер умного приложения -->
    <meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">
    
    <!-- Отключить автоматическое определение и форматирование возможных телефонных номеров -->
    <meta name="format-detection" content="phone=no">
    
    <!-- Иконка запуска (180x180px или больше) -->
    <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">
    
    <!-- Изображение экрана запуска -->
    <link rel="apple-touch-startup-image" href="/path/to/launch.png">
    
    <!-- Заголовок значка запуска -->
    <meta name="apple-mobile-web-app-title" content="Название приложения">.
    
    <!-- Включить автономный (полноэкранный) режим -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    
    <!-- Внешний вид строки состояния (не влияет, если не включен автономный режим) -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    
    <!-- Глубокое связывание приложений iOS -->
    <meta name="apple-itunes-app" content="app-id=APP-ID, app-argument=http/url-sample.com">
    <link rel="alternate" href="ios-app://APP-ID/http/url-sample.com">

*   ​ [Configuring Web Applications](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
    

#### Google Android

    <!-- Цветовая тем приложения -->
    <meta name="theme-color" content="#E64545">
    
    <!-- Добавить на главный экран -->
    <meta name="mobile-web-app-capable" content="yes">
    <!-- Дополнительная информация: https://developer.chrome.com/multidevice/android/installtohomescreen -->
    
    <!-- Глубокое связывание приложений Android -->
    <meta name="google-play-app" content="app-id=package-name">
    <link rel="alternate" href="android-app://package-name/http/url-sample.com">

#### Google Chrome

    <link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/APP_ID">.
    <!-- Отключить подсказку перевода -->
    <meta name="google" content="notranslate">

#### Microsoft Internet Explorer

    <!-- Заставить IE 8/9/10 использовать свой последний движок рендеринга -->
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    
    <!-- Отключить автоматическое определение и форматирование возможных телефонных номеров расширением для браузера Skype Toolbar-->
    <meta name="skype_toolbar" content="skype_toolbar_parser_compatible">
    
    <!-- Плитки Windows -->
    <meta name="msapplication-config" content="/browserconfig.xml">

Минимально необходимая разметка xml для `browserconfig.xml`:

    <?xml version="1.0" encoding="utf-8"?>
    <browserconfig>
        <msapplication>
            <tile>
                <square70x70logo src="small.png"/>
                <square150x150logo src="medium.png"/>
                <wide310x150logo src="wide.png"/>
                <square310x310logo src="large.png"/>
            </tile>
        </msapplication>
    </browserconfig>

*   ​ [Ссылка на схему конфигурации браузера](https://msdn.microsoft.com/en-us/library/dn320426.aspx)
    

### Браузеры (китайские)

#### 360 Browser

    <!-- Выбор порядка движков рендеринга -->
    <meta name="renderer" content="webkit|ie-comp|ie-stand">

#### QQ Mobile Browser

    <!-- Фиксирует экран в заданной ориентации -->
    <meta name="x5-orientation" content="landscape/portrait">
    
    <!-- Отображение этого документа в полноэкранном режиме -->
    <meta name="x5-fullscreen" content="true">
    
    <!-- Документ будет отображаться в "режиме приложения" (полноэкранный режим и т.д.) -->
    <meta name="x5-page-mode" content="app">

#### UC Mobile Browser

    <!-- Фиксация экрана в заданной ориентации -->
    <meta name="screen-orientation" content="landscape/portrait">
    
    <!-- Отображение этого документа в полноэкранном режиме -->
    <meta name="full-screen" content="yes">
    
    <!-- Браузер UC будет отображать изображения, даже если находится в "текстовом режиме" -->
    <meta name="imagemode" content="force">
    
    <!-- Документ будет отображаться в "режиме приложения" (полноэкранный режим, запрещающий жест и т.д.) -->
    <meta name="browsermode" content="application">
    
    <!-- Отключение "ночного режима" браузера UC для этого документа -->
    <meta name="nightmode" content="disable">
    
    <!-- Упростить документ, чтобы уменьшить передачу данных -->
    <meta name="layoutmode" content="fitscreen">
    
    <!-- Отключить функцию браузера UC "увеличивать масштаб шрифта, когда в документе много слов" -->
    <meta name="wap-font-scale" content="no">

*   ​ [UC Browser Docs](https://www.uc.cn/download/UCBrowser_U3_API.doc)
    

### Ссылки на приложения

    <!-- iOS -->
    <meta property="al:ios:url" content="applinks://docs">
    <meta property="al:ios:app_store_id" content="12345">
    <meta property="al:ios:app_name" content="App Links">
    
    <!-- Android -->
    <meta property="al:android:url" content="applinks://docs">
    <meta property="al:android:app_name" content="App Links">
    <meta property="al:android:package" content="org.applinks">
    
    <!-- Web fall back -->
    <meta property="al:web:url" content="https://applinks.org/documentation">

*   ​ [Ссылки на приложения](https://developers.facebook.com/docs/applinks)
    

### Другие ресурсы

*   ​ [HTML5 Boilerplate Docs: The HTML](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/html.md)
    
*   ​ [HTML5 Boilerplate Docs: Extend and customize](https://github.com/h5bp/html5-boilerplate/blob/master/dist/doc/extend.md)
    

### Связанные проекты

*   [Atom HTML Head Snippets](https://github.com/joshbuchea/atom-html-head-snippets) - Atom пакет для `HEAD` сниппетов
    
*   [Sublime Text HTML Head Snippets](https://github.com/marcobiedermann/sublime-head-snippets) - пакет Sublime Text для `HEAD` сниппетов
    
*   [head-it](https://github.com/hemanth/head-it) - CLI интерфейс для `HEAD` сниппетов
    
*   [vue-head](https://github.com/ktquez/vue-head) - Манипулирование метаинформацией тега `HEAD` для Vue.js
    

### Другие форматы

*   ​ [PDF eng](https://gitprint.com/joshbuchea/HEAD/blob/master/README.md)
    

### ​ Переводы

*   ​ [Индонезийский](https://github.com/rijdz/HEAD)
    
*   ​ [Бразильский португальский](https://github.com/Webschool-io/HEAD)
    
*   ​ [Китайский (упрощенный)](https://github.com/Amery2010/HEAD)
    
*   ​ [Немецкий](https://github.com/Shidigital/HEAD)
    
*   ​ [Итальянский](https://github.com/Fakkio/HEAD)
    
*   ​ [Японский](https://coliss.com/articles/build-websites/operation/work/collection-of-html-head-elements.html)
    
*   ​ [Корейский](https://github.com/Lutece/HEAD)
    
*   ​ [Испанский](https://github.com/alvaroadlf/HEAD)
    
*   ​ [Турецкий](https://github.com/mkg0/HEAD)
    

### ​ Contributing

**Откройте** `issue` или `PR`, чтобы предложить изменения или дополнения.

### ​ Contributors

Посмотрите на всех супер классных [авторов](https://github.com/joshbuchea/HEAD/graphs/contributors) ​

### ​ Автор оригинального репозитория

**Josh Buchea**

*   GitHub: [@joshbuchea](https://github.com/joshbuchea)
    
*   Twitter: [@joshbuchea](https://twitter.com/joshbuchea)
    

### ​ Поддержка

Если этот проект был полезен для вас или вашей организации, пожалуйста, рассмотрите возможность прямой поддержки моей работы автора оригинального репозитория:

*   ​ [Sponsor me on GitHub](https://github.com/sponsors/joshbuchea)
    
*   ​ [Star this project on GitHub](https://github.com/joshbuchea/HEAD)
    
*   ​ [Следуйте за Джошем на GitHub](https://github.com/joshbuchea)
    
*   ​ [Следуйте за Джошем в Twitter](https://twitter.com/joshbuchea)
    

Всем кто помогает, спасибо! ​

— Josh

* * *

**Примечание автора**: это русский перевод [репозитория HEAD](https://github.com/joshbuchea/HEAD) от Josh Buchea. Мы поддерживаем русскую версию [в отдельном репозитории](https://github.com/htmlacademy/HEAD), куда вы можете отправлять issue или PR напрямую, если нашли неточности или вам есть, что добавить. Публикуем перевод на Хабре, чтобы поделиться с русскоязычным сообществом полезным материалом.

* * *