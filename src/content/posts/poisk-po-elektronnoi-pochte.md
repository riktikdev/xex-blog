---
title: Поиск и пробив по электронной почте (Email)
published: 2024-11-06
description: ''
image: ''
tags: ['osint', 'osint master', 'email', 'пробив', 'электронная почта']
category: 'OSINT'
draft: false 
lang: 'ru'
---
Привет, друг. Продолжаем качать скилуху осинтера. И сегодня у нас, на первый взгляд, простая, а на самом деле не очень, тема. Это поиск информации по адресу электронной почты (email). Конечно же, на самом деле, ничего сложного в этом нет. Просто это требует определенной скрупулезности. Потому, что чтобы найти что-то имея электронную почту придется перелопатить довольно большое количество ресурсов. При этом не менее важна внимательность, потому что можно банально провтыкать какой-то важный момент. OSINT и невнимательность вообще не совместимые вещи.

В этой статье будет минимум софта. Да и собственно основная цель её, не столько показать нужные ресурсы, хотя это тоже, но что более важно, хотелось бы научить тебя, на конкретных примерах, то что я называю «цепляться за информацию». Т.е. из всего того объёма который ты видишь на экране, выбирать и собирать именно ту информацию которая будет тебе полезна. Этот навык в OSINT не заменим. Знание софта, нужных ресурсов это конечно здорово. Но намного важнее правильно оценивать информацию и правильно выбирать направление дальнейшего расследования. Отфильтровывая информационный шум и вычленяя фактаж который приведет к результату. И, очень важно, научится работать в таком режиме всегда когда ты занимаешься поиском. Ну а потренируемся мы на примере поиска по электронной почте. Мы соберем все данные которые получится найти и наметим пути для дальнейшего расследования.

Итак начнем. В качестве подопытного я взял адрес email с которого рассылались фишинговые письма нацеленные на владельцев криптовалютных кошельков. Причем письма примитивно-дебильные, в стиле: «Поменяйте пароль, потому что старый устарел».

Любой поиск начинается с оценки исходных данных. Наши исходные данные: адрес электронной почты Blockchainemail@ireon.ru и письмо с него пришедшее:

<img src='https://hacker-basement.com/wp-content/uploads/2020/06/image-1.png' />

# Анализ заголовка email

Следующим шагом нам нужно увидеть оригинал письма. В разных почтовых клиентах это можно сделать по разному, но как правило, присутствует кнопка или пункт меню «Показать оригинал» либо «Исходный текст», всё зависит от клиента.

В общем тычем эту кнопку и получаем оригинал письма со всей сопутствующей технической информацией. И именно с неё мы и начнем наш путь, потому что оттуда можно получить довольно много полезной информации.

<img src='https://hacker-basement.com/wp-content/uploads/2020/06/image-2-1024x517.png' />

Вникать, что означают прям все эти данные нам не нужно. Разберем те которые могут быть нам полезны. И в первую очередь мы посмотрим на записи Received:

```txt
Received: from slimvps-1061908-21900.host4g.ru (slimvps-1061908-21900.host4g.ru. [89.253.226.57])
by mx.google.com with ESMTPS id bf13si1318586edb.64.2020.06.02.04.35.52
for donallonline@gmail.com

Received-SPF: pass (google.com: domain of admin_ftp_12@ireon.ru designates 89.253.226.57 as permitted sender) client-ip=89.253.226.57;

Received: by slimvps-1061908-21900.host4g.ru (Postfix, from userid 10000)
id 2558A64FED; Tue, 2 Jun 2020 14:35:52 +0300 (MSK)
```

Тут учитывай что смотреть на них нужно начинать с низу т.е. в обратном порядке. Эти записи показывают путь письма пока оно достигало адресата. Т.е. в самом низу находится отправитель, в верху получатель, а между ними промежуточные сервера через которые шло письмо. И, как видишь тут мы получаем первую полезную информацию. А именно мы видим сервер с которого письмо отправлено: slimvps-1061908-21900.host4g.ru и ip-адрес этого сервера 89.253.226.57. А также видим ещё одну электронную почту admin_ftp_12@ireon.ru и видим домен ireon.ru. Пока что делать выводы рано, просто записываем полученные данные и идем смотреть дальше.

Следующий пункт который нам интересен это: `Return-Path: admin_ftp_12@ireon.ru`

Это адрес для ответного письма. Следующий пункт: `X-PHP-Originating-Script: 10000:hbHeSdgkUU.php`

Это имя скрипта который отправил нам это письмо. Иногда может пригодится.

Так же можно обратить внимание на записи `Authentication-Results` на предмет IP-адресов, доменов и адресов email. Но в нашем случае мы там ничего нового не находим, а потому пропускаем их.

# OSINT против фишинга

Теперь небольшое отступление от тематики с уклоном в практическую часть, применительно именно к нашему случаю. На самом деле мы сейчас идем по длинному и сложному пути, потому что если перейти по адресу ireon.ru то мы увидим что это хоть и заброшенный, но вполне реальный интернет-магазин, сделанный на OpenCart. Пусть и не порядочный магазин, с накрученными отзывами на Яндекс Маркете, но тем не менее вполне реальный. И даже с реальным владельцем, данные которого есть на этом сайте, это ИП Дараев Андрей Владимирович. Но это совсем не означает что нужно агрится на него, идти шатать магазин или делать какие-то гадости Андрюхе. Я более чем уверен, что Андрюха не причем. И это сайт был взломан и его просто используют для рассылки. И сейчас мы в этом убедимся. А за одно попробуем напасть на след наших мамкиных фишеров. Для этого мы глянем исходный код письма и найдем там ссылку по которой нам предлагают перейти:

```html
<a style="text-align: center; font-weight: 600; background-color: rgb(53, 88, 168); font-size: 18px; color: rgb(255, 255, 255); padding: 12px 30px; border-radius: 4px; text-decoration: none;" href="https://docs.google.com/document/d/e/2PACX-1vRtPV05LQhoAHFtmThV_H3EU3qmda0kqApaYzVj7_ruqL4TO6zyBkSw1FYLDH1ucosVsiU-KvD0ueYt/pub">Change data</a>
```

Теперь перейдем по ней и посмотрим что мы там увидим
(напомню что переходить по подобным ссылкам можно исключительно на виртуальной машине):

<img src='https://hacker-basement.com/wp-content/uploads/2020/06/image-3.png' />

И мы видим якобы страницу авторизации криптовалютного кошелька Blockchain. Делаем вид, что мы не заметили, что эта страница сделана в Google Docs. Смотрим исходный код и находим следующую ссылку: https://www.google.com/url?q=https://bucksshon.com/jferjvne.php&sa=D&ust=1591789067342000

И вот здесь мы видим еще один адрес: https://bucksshon.com/ — и вот это уже, с огромной долей вероятности, наши фишеры.

Ну, а мы возвращаемся к OSINT и теме нашей статьи. И продолжим собирать информацию о электронной почте (хотя на самом деле мы уже нашли все что хотели), но, тем не менее, чтобы статья была более информативной рассмотрим и другие инструменты.

# Проверка Email на существование

После того как мы изучили данные самого письма и уже получили немало полезной информации, нам следует убедится что адрес с которого пришло письмо действительно существует. Для этого идем на https://hunter.io/ и вводим там наш адрес почты:

<img src='https://hacker-basement.com/wp-content/uploads/2020/06/image-6.png' />

В принципе заниматься самим адресом на этом можно заканчивать, потому что адреса не существует и дальнейший поиск по нему не имеет смысла.

# Онлайн-ресурсы для анализа Email

Но для полной картины я покажу другие полезные сервисы, которые могут помочь в работе.

Так стоит сходить на http://metricsparrow.com/toolkit/. И, если мы, например знаем имя и фамилию, то там можно сгенерировать список возможных адресов на разных почтовых сервисах:

<img src='https://hacker-basement.com/wp-content/uploads/2020/06/image-8.png' />

Есть ещё такой вариант, что если известный нам адрес электронной почты зарегистрирован на каком-нибудь сервисе типа gmail, yandex, mail.ru и подобных им, то обязательно стоит воспользоваться кнопкой «Восстановить пароль». Потому, что перед тем как нам нужно будет вводить данные, нам покажет последние цифры телефона к которому привязан аккаунт или часть резервного адреса электронной почты, что иногда может быть полезно. Аналогичным способом можно пройтись и по социальным сетям, вдруг повезет.

Ну и не помешает ручками проверить адрес на предмет взлома на сайте https://haveibeenpwned.com/. Если он там окажется можно увидеть где человек регистрировался и чем интересуется, что тоже может быть не лишним.

Перейдем к другим инструментам для поиска информации о электронной почте:

https://github.com/theahmadov/vector - покажет, в каких утечках есть почта.

https://epieos.com/ - инструмент, который упрощает обратный поиск адресов электронной почты и номеров телефонов для выявления профилей в социальных сетях.

https://castrickclues.com/ - похоже на Epieos, ищет не только по номеру телефона и почте, а также и по никнейму.

https://t.me/iscerberusbot - Сбор данных в открытых источниках.

https://t.me/UniversalSearchProBot - Хуже Церберуса, но все же бесплатный и неплохо собирает информацию.

https://t.me/daoz6qezlbot - банальный Глаз Бога поиск, также не только по почте.

https://t.me/scorpion_robot_bot - поиск по базам данных.

https://t.me/best_leak_search_bot - поиск по базам данных

# Infoga. Инструкция по использованию

Теперь мы познакомимся с полезным инструментом по сбору информации по адресу электронной почты. Это утилита Infoga, она позволяет автоматизировать процесс сбора информации об адресе используя возможности поисковых систем.

Для начала устанавливаем:

```bash
git clone https://github.com/m4ll0k/Infoga.git infoga
cd infoga
sudo python setup.py install 
python infoga.py
```

После запуска мы видим справку и сразу вводим команду для поиска по нашему адресу:

```bash
python infoga.py --info blockchainemail@ireon.ru -b -v 3 -r mail.txt
```

Здесь мы дали команду собрать информацию о нужном нам адресе, проверить его по базе haveibeenpwned.com на предмет утечек и сохранить результаты в файл mail.txt

<img src='https://hacker-basement.com/wp-content/uploads/2020/06/image-4-1024x194.png' />

Так как Infoga не дала нам каких-либо результатов (по уже понятным причинам), мы переходим к следующему шагу.

Если все выше перечисленное, вдруг, не дало никаких результатов (что кстати маловероятно). То можно переходить к условно-агрессивным действиям и вспоминать о существовании сайта https://iplogger.ru/. И, пробудив в себе социального инженера, попытаться впихнуть на нужный адрес ссылку с логером, либо гео-логером. Тут уже всё зависит от наших талантов и степени наивности либо параноидальности нужного нам персонажа.

# OSINT и анализ данных

Также не стоит забывать о тех данных которые мы себе записывали:

<img src='https://hacker-basement.com/wp-content/uploads/2020/06/image-10.png' />

мы ведь это делали не для красоты, а чтобы с этими данными поработать. Если проведенным анализом основного адреса ничего найти не получилось, то переходим к каждому записанному пункту. И начинаем работам с ним. При этом учитывая уже найденную информацию и пытаясь найти совпадения, связи и дополнить уже сложившуюся картину. И так до получения нужного результата, как говорится: «Не мытьем так катанием». Тут какие-то рекомендации тяжело давать. Каждая ситуация по своему уникальна и все решает твой опыт и внимательность, а потому потренируйся и всё у тебя получится.

Вообщем с алгоритмом действий вроде как разобрались. Как видишь немного усидчивости и внимательности и ты наверняка найдешь нужную инфу. А со временем так вообще доведешь свой поиск до автоматизма и на автопилоте будешь выдергивать из контекста нужную тебе информацию.

На этом тему поиска по адресу электронной почты (email) можно считать рассмотренной. А твой навык в OSINT прокачанным ещё на +1. Но не забывай возвращаться к нам. Ведь нам предстоит изучить ещё много тем касающихся поиска в сети.