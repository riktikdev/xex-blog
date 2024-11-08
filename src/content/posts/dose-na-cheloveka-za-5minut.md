---
title: Как собрать досье на человека за 5 минут
published: 2024-11-06
description: ''
image: ''
tags: ["osint", "анонимность", "информационная безопасность"]
category: 'Информационная безопасность'
draft: true 
lang: ''
---
Привет, друг. Когда мы обсуждаем какой-то условный деанон, ну или в принципе поиск любой информации, мы, почти всегда, имеем ввиду информацию про основного фигуранта или группу фигурантов. Но ведь всё, что напоминает какое-никакое расследование, подразумевает, что там может фигурировать чуть больше одного человека. А иногда сильно больше. Т.е., условно говоря, там могут быть персонажи второго плана. Они могут быть не особо важны в общем контексте, но иногда, какие-то элементы информации про них, могут повлиять на общую картину ситуации или натолкнуть нас на нужные мысли. Ну или просто, нужно понят кто это, и какова его роль в общем контексте.

Единый смысл этой ситуации в том, что нам могут попадаться люди, на которых нет смысла тратить много времени, детально изучая их личность. Но, при этом, может возникнуть необходимость сформировать мнение о таком персонаже. Чтобы это сделать, хоть что-то о нём узнать нужно. Поэтому в этой статье мы разберем, как не особо заморачиваясь и не тратя много времени, получить базовый набор информации о каком-то человеке.

# Первичная идентификация

При сборе информации о человеке из любых открытых источников, первая, и самая важная задача, которую нам нужно решить, это точная идентификация этого человека. Причём это не разовый процесс, а всю найденную нами информацию нужно оценивать с позиции принадлежности к нужному нам человеку. Т.е. мы должны быть уверены, что то что мы нашли, относится именно к изучаемому объекту. Это делается двумя способами:

1. использование уникальных идентификаторов т.е. таких которые не могут быть одинаковыми у двух разных человек. Например это может быть ИНН или серия и номер паспорта. Или, если говорить обобщённо, то в этой ситуации хорошо работают те идентификаторы, которые человеку присваивает государство.
2. использование комбинации идентификаторов, которые в совокупности позволяют исключить шанс совпадения данных. Например, фамилия, имя и отчество, далеко не всегда гарантируют, что это именно тот кто нам нужен, а не его однофамилец. А вот комбинация ФИО, дата рождения и место рождения, уже практически гарантируют что это нужный человек.

Весь этот процесс можно назвать — первичная идентификация. Суть которой это получение базового набора данных, которые нужны для того чтобы, в последующем, отождествлять найденную информацию с нужным нам человеком. Базовый набор данных это, как правило ФИО, дата рождения, телефон, электронная почта, адрес проживания и регистрации. Я, как правило, также туда добавляю ИНН и серию номер паспорта. Я это делаю только из-за того, что, если вдруг эти данные понадобятся в будущем, а они уже у меня есть.

Причём необходимость в них, это довольно частая история. Например, по ИНН можно быстро проверить является ли человек предпринимателем, в том числе учредителем или руководителем юридических лиц. Именно по ИНН это делать лучше, потому что, как я уже говорил, это уникальный идентификатор и мы можем быть точно уверены, что это именно нужный нам человек. А по паспорту, например, проверяется всё что связано с транспортом, например авиаперелёты. Но это уже нюансы, о них отдельно поговорим.

# Агрегаторы

Где брать эту первичную информацию? Очевидно, что наиболее удобный вариант это агрегаторы утечек. Это могут быть либо боты в телеграмме, либо сайты с тем же функционалом. Какие именно использовать, не особо принципиальный вопрос. Тут дело вкуса, что удобнее то и используй. Я последнее время в основном использую https://osintkit.net — баз очень много, есть бесплатные запросы (а это сейчас редкость), ну и подписка стоит, что-то типа «почти даром».

<img src='https://hacker-basement.com/wp-content/uploads/2024/07/fmd1-3-1024x308.webp' />

Допустим первичные и контактные данные с агрегаторов мы собрали. Теперь переходим непосредственно к процесу сбора информации. Дальше материал будет в формате чек-листа с наиболее актуальными способами поиска информации. Но не забывай что твои действия, не должны быть шаблонными. Их набор, как и очередность, может манятся, в зависимости от контекста.

# Сбор информации

Первое, что мы делаем это используя ФИО и кавычки, смотрим что о человеке знает поисковик.

<img src='https://hacker-basement.com/wp-content/uploads/2024/07/fmd2-1-jpg.webp' />

Также стоит отдельно пробовать тоже самое, но без отчества. Это хорошо сработает если у человека хоть сколько-нибудь уникальная фамилия. С распространёнными фамилиями или совпадающими с фамилиями публичных людей, в таком виде это будет не особо эффективно. Но это не значит, что этого не нужно делать, просто скорее всего придется уточнить запрос с помощью дополнительных операторов.

Что касается дорков гугла и их использования, то я эту тему уже подробно разбирал. Кто пропустил может перейти почитать, ну а здесь не будем отвлекаться на нюансы, а сосредоточимся на практической части.

Проверить точное совпадение по ФИО этого всегда не достаточно. После этого запрос нужно уточнить и конкретизировать. Есть несколько наиболее актуальных способов это сделать:

- использование знака -минус. Таким способом мы можем убрать не нужные результаты. Например, если мы гуглим какого-то человека, пусть это будет некий «Гамлет Ваникович», который работает стоматологом. Соответственно нам показывает кучу объявлений о том что он стоматолог. А нам, допустим, сейчас это вообще не интересно. Что мы должны сделать? Нужно просмотреть несколько объявлений и найти общие, и при этом характерные, формулировки, которые мы сможем использовать в качестве фильтра. В описанном случае это будет «стоматолог», «стоматология» и «хирург». Соответственно запрос будет выглядеть: `"Гамлет Ваникович" -стоматолог -хирург -стоматология`

Итоговые результаты будут сильно отличаться от первоначальных:

<img src='https://hacker-basement.com/wp-content/uploads/2024/07/fmd3-2-jpg.webp' />

Используя минус мы также можем убирать не только ключевые слова, но и конкретные сайты. Например если человека много в какой-то соцсети, например ютубе, а нам это не интересно, то к запросу мы добавим: `-site:youtube.com`

- Фильтрация по региональному домену. Это полезно если нам нужно промониторить упоминание кого-то в какой-то конкретной стране. Соответственно мы переводим фамилию и имя на язык, или языки, которые используются в нужной нам стране и добавляем к запросу оператор site:, и используя звездочку (* т.е. оператор «любое значение»), ограничиваем поиск, не по какому-то конкретному сайту, а по любым сайтам имеющим национальный домен. `"Pavel Durov" site:*.fr`

В этом примере, мы получили выборку на тему Павла Дурова, в разрезе его упоминания на французских сайтах. Также не стоит забывать, что региональные домены есть не только у стран, но и у многих больших городов. Что даёт нам возможность, если мы знаем город нашего человека, сильно сузить географию поиска и проверить, вдруг, он упоминался на каких-то местных сайтах. Ну и в обратную сторону это тоже можно применять т.е. используя -минус убирать из результатов ненужные региональные домены.

- **Фильтрация по теме и контексту.** Тут мы будем использовать дорки `intitle:` и `intext:`. Первый позволяет искать по заголовкам, второй по содержимому страницы. И, комбинируя эти два оператора, очень удобно конкретизировать запрос. Как это работает? Используя intitle: мы обобщённо обозначаем конкретный объект, который нас интересует (именно в этом случае это какой-то человек). Это работает потому как если что-то упоминается в заголовке, то логично предположить, что это ключевая тема найденной страницы.

Затем, добавляя оператор `intext:`, мы уточняем что именно мы ищем по нашей теме. Например, если мы просто напишем: `intitle:"павел дуров"` то получим кучу рандомных заголовков с упоминанием Павла Дурова. А с учетом его медийности, найти что-то конкретное о нем будет практически невозможно. Но если добавить `intext:биография`, то мы получим гораздо более уточнённые результаты. `intitle:"павел дуров" intext:биография`

Важный момент который нужно понимать именно в этой ситуации, это то, что в оператор `intext:` мы должны вписать не вопрос, а ту часть ответа, которая, должна быть в тексте на странице. Ну и так как есть вероятность, что мы не угадали, то стоит попробовать разные вариации. Например, в приведенном примере с Дуровым, запрос биография сработал, так как он достаточно медийный персонаж. С менее медийным телом так не получится. Потому, если мы изучаем прошлое человека и есть понимание, что какая-то инфа о нём в сети, всё же, должна быть, то нужно вписывать фразы типичные для среднестатистического человека. Например: `"закончил институт"`, `"назначен на должность"`, `"переехал жить"`, ну и так далее, в таком же стиле. Это очень типичные фразы, используемые при описании своего или чужого прошлого. Ну и подбирать их нужно, в зависимости от личности персонажа. Под какого-то комерса одни фразы лучше сработают, под чиновника — другие. Но это уже нюансы.

Ну и опять же, подобный способ не обязательно применять именно к историческим данным. Смысл в том, что таким способом мы можем собирать о человеке какую-то конкретизированную информацию, не отвлекаясь на посторонние источники.

- **Поиск страниц и активностей**. Может быть такое что мы знаем что-то типа никнейма. Это не обязательно с какого-то форума, Discord или игры. Как вариант, мы нашли электронную почту формата durov@gmail.com т.е. такую где используемое имя, достаточно уникально. Ещё вариант — это у нас есть адрес какой-то социальной сети фигуранта и там в URL, в качестве User ID не числовое значение, а буквенная запись. Ещё один рабочий вариант это записать фамилию английскими буквами. В общем, всё это можно использовать для быстрого сбора дополнительной информации. Для этого нам понадобится дорк inurl:. Как понятно из названия, он может искать по url-адресу. Соответственно его мы используем тогда, когда понимаем что у нас есть что-то, что может быть частью адреса.

Для начала просто проверяем, какая есть информация, без дополнительных уточнений: `inurl:durov`

Условно говоря, это такой способ быстрого поиска по никнейму без использования стороннего софта. Таким же способом можно проверить конкретные сайты или, используя минус, убрать те, которые точно уже не нужны: `site:twitter.com inurl:durov`

Это необязательно использовать именно для поиска аккаунта. Мы можем уже его знать и, посмотрев как выглядит его URL, использовать эту комбинацию дорков, совместно с дополнительными инструментами поиска, чтобы, например, выбрать все посты пользователя за какой-то промежуток времени. Или ещё вариант, например, добавив дорк intext:, можно собрать все посты пользователя посвященные какой-то теме. `site:twitter.com inurl:durov intext:telegram`

<img src='https://hacker-basement.com/wp-content/uploads/2024/07/fmd5-jpg.webp' />

- **Поиск документов**. Собирая информацию о человеке, всегда стоит проверить наличие документов, в которых он упоминается. Но в рассматриваемой ситуации, так заморачиваться смысла нет, потому просто проверяем одним-двумя запросами. Это можно сделать как по ФИО полностью, там и по имени фамилии, а если человек публичный то не лишним будет сделать это на разных языках. Например: `"Pavel Durov" filetype:pdf OR filetype:doc OR filetype:xls OR filetype:csv `

Если что-то подобное приходится делать более-менее часто, то можно подготовить себе шаблон, с нужными расширениями, и просто вписывать в него ФИО.

# Дополнительные инструменты

В качестве альтернативного варианта обычному гуглению, также можно использовать https://whatsmyname.app. Он одновременно закрывает несколько задач. Можно искать как по никнейму, так и по ФИО, причем можно одновременно в разных транскрипциях. Там есть возможность вписывать сразу несколько имён, но это стоит использовать только если нужно чередовать очередность имя-фамилия или добавить отчество. Несколько разных лучше не проверять, чтобы не было путаницы.

Whatsmyname проверяет около 600 источников. Кроме того, он в том же окне показывает результаты поиска в гугле, причем он показывает как обычный поиск по точному совпадению, так и поиск документов. Самый главный плюс в том что, т.к. запрос к гуглу делается через Google CSE, то мы получаем абсолютно нейтральный результат, не зависящий ни от нашей геопозиции, ни от языка браузера, ни от аккаунта гугла, если мы в него вошли. Найденные результаты можно сохранить сразу в pdf или csv, что тоже иногда полезно.

<img src='https://hacker-basement.com/wp-content/uploads/2024/07/fmd6-1-1024x929.webp' />

Ещё один, иногда полезный сервис, это - https://seintpl.github.io/NAMINT

<img src='https://hacker-basement.com/wp-content/uploads/2024/07/fmd7-1-1024x391.webp' />

Причём это не только про поиск, но и про оптимизацию. Смысл в том, что мы вводим имеющиеся у нас данные. Например имя и фамилию, или полностью ФИО, можно добавить никнейм, а NAMINT из всего этого сформирует кучу разных комбинаций. И по каждой комбинации он даст кнопку, нажав на которую нас перекинет в поиск, либо в гугле, либо в других поисковиках, либо по социальным сетям. Это в первом блоке.

Во втором он предложит кучу вариантов сокращений которые могут быть потенциальным логином, и также как и в первом блоке, нам будут предложены варианты поиска по разным поисковикам и соцсетям.

Следующий блок тоже может быть полезен. Это разные варианты имени в адресе электронной почты. Каждый возможный адрес тут же можно проверить, причем проверить разными способами.

Важно помнить, что разделы с логином и электронной почтой актуальны только если мы вводили данные на английском. Там ещё есть раздел с поиском Gravatar и возможные вариации электронной почты, но эти разделы, как по мне, менее полезны чем первые три.

# Итого

Основная идея этой статьи и и основной смысл показанных инструментов и способов поиска, это быстро и не заморачиваясь получить какую-то базовую информацию о человеке. Я думаю проблем с этим возникать не должно, но не забывай, что в зависимости от контекста ситуации, набор твоих методик, способов и инструментов может меняться. Т.е. твой подход к любой ситуации должен быть не шаблонным, а достаточно гибким. Вот эта гибкость необходима для обеспечения твоей адаптивности. А адаптивность это практически равно эффективность. Но об этом подробно поговорим как-нибудь в другой раз.