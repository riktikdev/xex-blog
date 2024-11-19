---
title: "DDoS: Технологии атаки и защиты"
published: 2024-11-20
description: ''
image: ''
tags: [DDoS]
category: 'DDoS'
draft: false 
lang: ''
---


DDoS (Distributed Denial of Service) — это тип атак, направленных на выведение из строя сервиса, сервера или сети путем перегрузки их запросами. В этом посте разберем основные методы проведения атак, технологии защиты и инструменты для тестирования.

1. Типы DDoS-атак

# Сетевые атаки (L3 и L4):

Они нацелены на истощение пропускной способности сети или ресурсов протокола.

    UDP Flood: Поток UDP-пакетов перегружает сеть.
    SYN Flood: Злоумышленник посылает большое количество запросов SYN, не завершая handshake.
    ICMP Flood (Ping Flood): Массовая отправка ICMP-запросов для перегрузки сети.



# Прикладные атаки (L7):

Они воздействуют на уровень приложений, заставляя сервер обрабатывать большое количество сложных запросов.

HTTP Flood: Множество HTTP-запросов к ресурсу (GET или POST).
Slowloris: Медленное отправление данных для захвата всех доступных соединений.
DNS Amplification: Умножение трафика через открытые DNS-серверы.


2. Технологии атаки


# a) Ботнеты

    Что это? Сеть зараженных устройств, выполняющих команды атакующего.
    Пример: Mirai Botnet, который использует IoT-устройства для DDoS.
    Технология: Ботнет посылает запросы к целевому серверу одновременно с тысяч IP-адресов.


   # b) Amplification-атаки

    Увеличение размера атаки за счет использования сервисов, отвечающих большими данными на малые запросы.
    Примеры: DNS, NTP, SSDP.
    Технология: Отправка запроса от подмененного IP (жертвы), чтобы сервер отвечал на этот IP.


# c) Self-Made Scripts


Написание собственных скриптов на Python с использованием библиотек, таких как scapy или socket.

Пример HTTP Flood на Python: (import requests

url = "http://target.com"
while True:
    try:
        requests.get(url)
    except:
        pass)


      

 # 3. Методы защиты

 # a) WAF (Web Application Firewall)

Фильтрует вредоносный HTTP-трафик. Примеры: Cloudflare, ModSecurity.   


# b) Rate Limiting

Ограничение количества запросов от одного IP в определенный промежуток времени.

    Инструменты: Nginx (limit_req), iptables.


# c) Anycast Network

Распределение трафика между несколькими серверами на основе географии.

    Пример: использование CDN-сетей (Cloudflare, Akamai).

   #  d) Honeypots и Blackholing

    Honeypots: Ловушки для ботов, отвлекающие трафик.
    Blackholing: Перенаправление вредоносного трафика в "черную дыру".

# 4. Тестирование DDoS и защита

# Инструменты для тестирования атаки:

    LOIC/HOIC: Инструменты для тестирования L7-атак (мощные, но легко отслеживаются).
    hping3: Генерация L3/L4-пакетов с кастомными параметрами. (hping3 -S -p 80 --flood target.com
)

(hping3 -S -p 80 --flood target.com)

# GoldenEye: Тестирование L7-защиты (HTTP GET/POST Flood).


Инструменты для тестирования защиты:


Slowloris: Проверка устойчивости веб-сервера к медленным запросам.
SIEGE: Стресс-тестирование веб-сервера.

(siege -c 1000 -r 10 http://target.com)

# 5. Практический пример атаки и защиты


Постановка задачи:

Проверить устойчивость сайта к HTTP Flood с использованием hping3.


Пошаговая атака:

    Открыть терминал на машине с Kali Linux.
    Выполнить команду: hping3 -c 10000 -d 120 -S -w 64 -p 80 --flood target.com

    -c 10000 — количество пакетов.
-d 120 — размер данных.
--flood — отправка без ожидания ответа.


# Защита:

1 Настроить WAF: включить фильтры для HTTP-запросов.
2 Включить лимитирование запросов в Nginx: limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;








