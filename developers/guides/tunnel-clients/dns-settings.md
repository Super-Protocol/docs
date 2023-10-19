---
id: "dns-settings"
title: "Настройка DNS-записей"
slug: "/guides/tunnel-clients/dns-settings"
sidebar_position: 4
---

# Настройка DNS-записей

После запуска туннель-сервер создаёт `OfferId`, который можно посмотреть в артефактах GiHub Actions.

Чтобы узнать IP адрес сервера, на котором запущено решение, нужно выполнить команду:

```shell
./spctl orders download-result <OrderId>
```

Как установить и настроить утилиту spctl, можно посмотреть в [документации](https://docs.superprotocol.com/testnet/cli/).

В результате команда вернёт файл `result.txt`, в котором будет IP адрес сервера.

Затем нужно перейти в личный кабинет Вашего DNS-провайдера и добавить две записи для Вашего домена:

```
Запись типа A        <IP сервера>
Запись типа TXT      "r=superprotocol;ip=<IP сервера>"
```

После этого, решение будет доступно по этому доменному имени.

Проконтролировать запущенные ордеры можно на Маркетплейсе Super Protocol.

<Imager src={require('./images/marketplace.png').default} />
