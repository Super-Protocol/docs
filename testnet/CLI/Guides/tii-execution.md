---
id: "cli-guides-confidential-execution"
title: "Confidential execution"
slug: "/cli/guides/confidential-execution"
---

You probably know that you can run your own solutions on the Super Protocol network. If not, head over to the [Execution of python script](/testnet/cli/guides/python-script) guide that explains how to prepare custom solutions and data.

This article will elaborate further on the `solution` concept.

To make sure, that the source code is unmodified and is executed in secure environment, a TII file is generated. For example, it is performed when the `workflows create` command is run with solution file passed as `--solution` option. This way the TII is generated in runtime and encrypted, so it cannot be accessed even by the workflow creator. 

:::note
To learn more about TII and its execution, refer to our [whitepaper](/whitepaper/tee-provider#passing-parameters-to-the-loader)
:::

In some cases, you might want to generate a TII and have a full access to it. For example, to be able to share your solution with others but without revealing your source code. Remote storage resource is not an option as it gives read access to the original file, while the TII is encrypted by a hardware key and can only be decrypted in TEE area.

To generate a TII you need to have your solution [prepared](/testnet/cli/commands/solutions/prepare) and [uploaded](/testnet/cli/commands/files/upload) to remote storage. Note, that a generated `metadata.json` file plays crucial role, as it contains hash and mrenclave which verify the authenticity of the source.

This example continues the [Execution of python script](/testnet/cli/guides/python-script) guide. When you are all set, run a command:

```
spctl tii generate --offer 1 --output ./solution-tii.json ./solution.json
```

It will generate a `solution-tii.json` file, which is encrypted with the public key of Compute offer with ID 1. The public key is retrieved from blockchain. From now on, `solution-tii.json` can only be run on Compute offer 1, as no other providers are able to decrypt it. Let's execute newly created TII on Super Protocol:

```
spctl workflows create --tee 1 --storage 13 --solution 3 \
--solution ./solution-tii.json --data input-1.json --data input-2.json
```

You can now securely share your `./solution-tii.json` so that other people can run the solution with own data.
