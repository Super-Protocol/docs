#!/bin/bash
set -e

cd sources/contracts/repo
yarn
rm -rf ../../../docs/contracts
solidity-docgen --solc-module solc-0.8.4 -o ../../../docs/contracts -t ../templates -H ../helpers.js
