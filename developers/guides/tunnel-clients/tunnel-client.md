---
id: "tunnel-client"
title: "Туннель-клиент"
slug: "/guides/tunnel-clients/tunnel-client"
sidebar_position: 3
---

# Туннель-клиент

1. Первые два шага, _"Get previous build for solution"_ и _"Download SPCTL"_ аналогичны туннель-серверу.

2. _Prepare tunnel client data._

   На этом этапе происходит запуск скрипта подготовки решения, [prepare-solution.sh](https://github.com/Super-Protocol/solutions/blob/pub/Tunnel%20Client/minecraft/scripts/prepare-solution.sh). 
   Для этого, в GitHub Secrets нужно добавить приватный ключ и сертификат сервера, которые были сформированы
   на [этом](https://docs.dev.superprotocol.com/developers/guides/tunnel-clients/ssl) шаге. Нужно скопировать их значения
   в `SOLUTION_SSL_KEY_BASE64` и `SOLUTION_SSL_CERTIFICATE_BASE64`, в кодировке base64.

   Закодировать значения в base64 можно следующими командами:
   
   ```shell title="config.json"
    echo "<KEY>" | base64
    echo "<CERTIFICATE>" | base64
   ```

3. _Build solution._

   Создаётся директория `content`, в которую будет скопирован результат выполнения скрипта `prepare-solution.sh`. 
   Также, в корневую директорию копируются ключ и сертификат сервера. Далее, происходит формирование config-файла для 
   туннель-клиента, в который нужно передать два параметра, MrSigner и MrAnclave. Сделать это можно создав эту пару 
   значений в GitHub `Vars`:

    ```tsconfig
    TUNNEL_SERVER_MRSIGNER=82e55c6ec7268b07e030226cc42417b89cb17ecc8b6b73bafb84fc44b0ed059c
    TUNNEL_SERVER_MRENCLAVE=22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513
    ```
   
   После этого конфигурационный файл записывается в корневую директорию проекта, формируется архива решения и архив 
   загружается в хранилище [StorJ](https://www.storj.io/).

4. _Run tunnel client._

   Здесь происходит запуск Туннель Клиента.

В результате, в GitHub Secrets и в GitHub Variables должно быть следующее содержимое:

<Imager src={require('./images/secrets.png').default} />
<Imager src={require('./images/values.png').default} />
