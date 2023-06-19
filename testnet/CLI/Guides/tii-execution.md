---
id: "cli-guides-confidential-execution"
title: "Confidential execution"
slug: "/cli/guides/confidential-execution"
---

You might already be aware that you can run your custom solutions on the Super Protocol network. If not, check out the [Execution of python script](/testnet/cli/guides/python-script) guide, which explains how to prepare custom solutions and data.

This article delves deeper into the `solution` concept.

To guarantee that the source code remains unaltered and executes in a secure environment, a TII file is generated. For instance, this occurs when the `workflows create` command runs with the solution file passed using the `--solution` option. This process generates the TII at runtime and encrypts it, ensuring it remains inaccessible even to the workflow creator.

:::note
To learn more about TII and its execution, refer to our [whitepaper](/whitepaper/tee-provider#passing-parameters-to-the-loader)
:::

In certain situations, you may want to generate a TII and maintain full control over it. For example, to be able to share your solution with others without disclosing your source code. Using a remote storage resource isn't viable since it allows read access to the original file, while the TII is encrypted with a hardware key and can only be decrypted in the TEE area.

To generate a TII, your solution must be [prepared](/testnet/cli/commands/solutions/prepare) and [uploaded](/testnet/cli/commands/files/upload) to remote storage. Keep in mind that the generated `metadata.json` file is crucial, as it contains a hash and an mrenclave, which verify the source's authenticity.

This example builds upon the [Execution of python script](/testnet/cli/guides/python-script) guide. Once you're ready, execute a command:

```
spctl tii generate --offer 1 --output ./solution-tii.json ./solution.json
```

This command generates a `solution-tii.json` file encrypted with the public key of Compute offer with ID 1. The public key is retrieved from the blockchain. From this point forward, `solution-tii.json` can only run on Compute offer 1, as other providers cannot decrypt it. Now, let's execute the newly created TII on the Super Protocol:

```
spctl workflows create --tee 1,1 --tee-slot-count 3 --storage 20,16 --solution 2,1 \
--solution ./solution-tii.json --data input-1.json --data input-2.json
```

You can securely share your `./solution-tii.json` file, allowing others to run the solution with their own data.
