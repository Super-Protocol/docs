---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Настройка DNS-записей

После запуска Туннель Сервера мы получаем `OfferId`, который можно посмотреть в артефактах GiHub Actions.

Чтобы узнать IP адрес сервера, на котором запущено решение, нужно выполнить команду:

```bash
./spctl orders download-result <OrderId>
```

Как установить и настроить утилиту spctl, можно посмотреть в [документации](https://docs.superprotocol.com/testnet/cli/).

В результате команда вернёт файл `result.txt`, в котором будет IP адрес сервера.

Затем нужно перейти в личный кабинет Вашего DNS провайдера и добавить две записи для Вашего домена:

```
Запись типа A        <IP сервера>
Запись типа TXT      "r=superprotocol;ip=<IP сервера>"
```

После этого, решение будет доступно по Вашему доменному имени.

Проконтролировать запущенные ордеры можно на маркетплейсе Super Protocol.

<figure><img src="../../../../.gitbook/assets/image (3).png" alt="" /><figcaption><p>Marketplace</p></figcaption></figure>
