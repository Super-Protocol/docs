---
id: "prepare"
title: "Подготовка решения для деплоя в TEE"
slug: "/guides/tunnel-clients/solutions/minecraft/prepare"
sidebar_position: 2
---

На этом шаге необходимо создать скрипт для production-сборки и подготовки её для деплоя в TEE.

Например, можно создать директорию scripts и поместить туда файл, `prepare-solution.sh`:

```shell title="scripts/prepare-solution.sh"
#!/bin/bash
set -e

solution_path=$1

# cd to one directory up of current script
REAL_PATH=$(realpath "$0")
LOCAL_PATH=$(dirname "$REAL_PATH")
cd "$LOCAL_PATH"
cd ..

echo "Install dependencies for client & sever module"
yarn dependencies-scripts
yarn build:all

echo "Copy files"
cp -R dist node_modules package.json yarn.lock server client "$solution_path"
```

Для запуска, скрипту необходимо передать параметр, путь к директории, куда будут копироваться необходимые файлы.

```shell
cd minecraft
./scripts/prepare-solution.sh /home/user/mc-solution
```

После запуска скрипта, будет сформирована примерно следующая файловая структура:

```text
.
├── client
├── dist
├── logs
├── node_modules
├── package.json
├── server
└── yarn.lock
```

:::caution
Запускать вручную скрипт не нужно. Эта информация приведена для общего понимания процесса. Его запуск будет
происходить автоматически, что будет описано далее.
:::
