---
id: "prepare"
title: "Подготовка решения для деплоя в TEE"
slug: "/guides/tunnel-clients/minecraft/prepare"
sidebar_position: 2
---

# Подготовка решения для деплоя в TEE

Если Вы, на этом примере, будете запускать своё приложение, то необходимо создать свой скрипт для сборки приложения и подготовки его для деплоя в TEE.

Например, можно создать директорию scripts и поместить туда следующий файл, назовём его `prepare-solution.sh`

```bash
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
