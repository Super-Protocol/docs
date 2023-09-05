---
description: Introduction
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

# Подготовка решения для деплоя в TEE

Если Вы, на этом примере, будете запускать своё приложение, то необходимо создать свой скрипт для сборки приложения и подготовки его для деплоя в TEE.

Например, можно создать директорию scripts и поместить туда следующий файл, назовём его `prepare-solution.sh`

{% @github-files/github-code-block url="https://github.com/Super-Protocol/solutions/blob/067f4c0c5fdfbcb7bf7336b10c17355f24f7a29c/Tunnel%20Client/minecraft/scripts/prepare-solution.sh" %}

Для запуска скрипта ему необходимо передать параметр, путь к директории, куда будут копироваться файлы, необходимые для запуска в TEE.

Например:

```bash
$ cd minecraft
$ ./scripts/prepare-solution.sh /home/user/mc-solution
```

После запуска скрипта, будет сформирована примерно следующая структура:

```bash
.
├── client
├── dist
├── logs
├── node_modules
├── package.json
├── server
└── yarn.lock
```

> _Запускать вручную скрипт не нужно. Эта информация приведена для общего понимания процесса. Запуск скрипта будет происходить автоматически, что будет описано далее._
