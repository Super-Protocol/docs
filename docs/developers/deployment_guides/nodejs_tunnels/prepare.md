---
id: "initial set-up"
title: "1. Generate TLS and set up DNS (Изменить на -> Generate SSL certificate and prepare DNS)"
slug: "/deployment_guides/nodejs_tunnels/setup"
sidebar_position: 1
---



## Requirements

<Highlight color="red">//какие требования?</Highlight>


## Prepare DNS

Вам необходим собственный домен или сабдомен, к настройкам DNS которого у Вас есть доступ. 
В рамках гайда будет необходимо устанавливать CNAME, A и TXT records в DNS для выбранного вами домена.

Можете использовать [Cloudflare](https://www.cloudflare.com/products/registrar/) или любой другой удобный Вам доменный регистратор с возможностью установки DNS записей.


## Generating SSL certificate

SSL сертификат необходим для установки безопасного TLS соединения между сервером Superprotocol-а и Вашим браузером.

Для генерации SSL сертификата используйте любой удобный Вам портал - `sslforfree.com`, `zerossl.com`, `letsencrypt.org`.

Исользуйте инструкции соотвествующего портала для успешной генерации.

Для генерации сертификата без регистрации рекомендуем использовать портал LetsEncrypt и его CLI - `Certobt`. 
Выберете в качестве _Sofware_ - _Web hosting product_, и в качестве системы - Вашу OS [на странице инструкций Certbot](https://certbot.eff.org/instructions) и следуйте дальнейшим инструкциям для генерации SSL сертификата.

В процессе подтверждения принадлежности Вам домена нужно будет указать требуемую CNAME запись в DNS, если Вы выберете метод подтвержения через CNAME DNS.

Make sure that после успешной генерации сертификата вы скачали файл с приватным ключом (e.g. private.key) и сертификатом (e.g. certificate.crt). 
Так же может быть отдельный файл с рутовым и промежуточным сертификатами (e.g. ca_bundle.crt). Внутреннее содержимое этого файла просто скопируйте в файл с Вашим сертификатом.