---
id: "ssl"
title: "SSL Settings"
slug: "/guides/tunnel-clients/ssl"
sidebar_position: 1
---

Для обеспечения работы web-сервера по https, необходимо сгенерировать ключ и сертификат.

Это можно сделать воспользовавшись командой:

```shell
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.crt -sha256 -days 365 -nodes -subj "/CN=localhost"
```

В результате должно получиться два файла: `cert.crt` и `key.pem` в каталоге, из которого запускалась эта команда.

Для дальнейшей работы с ключом и сертификатом, необходимо преобразовать содержимое этих файлов в одну строку.
Для этого достаточно выполнить команды:

```shell
awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' cert.crt
awk 'NF {sub(/\r/, ""); printf "%s\\n",$0;}' key.pem
```

После этого можно удалить файлы `cert.crt` и `key.pem`.
