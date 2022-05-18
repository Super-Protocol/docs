#!/bin/bash
set -e

cd sources/contracts/repo
yarn
rm -rf ../../../docs/contracts
solidity-docgen --solc-module solc-0.8.9 -o ../../../docs/contracts -t ../templates -H ../helpers.js

cd ../../../docs/contracts/
rm -rf libs diamond mocks storages AppFacet.md