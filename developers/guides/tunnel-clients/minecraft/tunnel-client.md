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

# Туннель Клиент

1. Первые два шага, "Get previous build for solution" и "Download SPCTL" аналогичные Туннель Серверу.
2. Prepare tunnel client data. На этом этапе происходит запуск скрипта подготовки решения, [prepare-solution.sh](https://github.com/Super-Protocol/solutions/blob/pub/Tunnel%20Client/minecraft/scripts/prepare-solution.sh). Для этого, в GitHub Actions нужно добавить приватный ключ и сертификат сервера, которые мы формировали для `.env` файла. Нужно скопировать эти значения в `MINECRAFT_SSL_KEY_BASE64` и `MINECRAFT_SSL_CERTIFICATE_BASE64`, в кодировке base64.
3. Build solution. Создаётся директория `content`, в которую будет скопирован результат выполнения скрипта `prepare-solution.sh`. Также, в корневую директорию копируются ключ и сертификат сервера. Далее, происходит формирование config-файла для Туннель Клиента, в который нужно передать два параметра, MrSigner и MrAnclave. Сделать это можно создав эту пару значений в GitHub Vars:

```tsconfig
vars.TUNNEL_SERVER_MRSIGNER=82e55c6ec7268b07e030226cc42417b89cb17ecc8b6b73bafb84fc44b0ed059c
vars.TUNNEL_SERVER_MRENCLAVE=22c4c4c40ebf9874905cfc44782eec5149bf07429ec0bd3e7fd018e9942d0513
```

После этого конфигурационный файл записывается в корневую директорию проекта, формируется архива решения и архив загружается в хранилище [StorJ](https://www.storj.io/).

4. Run tunnel client. Здесь происходит запуск Туннель Клиента.

В результате, в GitHub Secrets и в GitHub Variables должно быть следующее содержимое:

<figure><img src="../../../../.gitbook/assets/image (1).png" alt=""><figcaption><p>Secrets</p></figcaption></figure>

<figure><img src="../../../../.gitbook/assets/image (2).png" alt=""><figcaption><p>Variables</p></figcaption></figure>

