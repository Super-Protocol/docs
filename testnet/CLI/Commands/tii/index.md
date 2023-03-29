---
id: "cli-tii"
title: "TII"
slug: "/cli/commands/tii"
---
что такое TII и как его использовать. возможно указать ссылку на whitepaper
Prepare custom resource to be processed without sharing the source
TII is a resource file, its hash and mrenclave, encrypted with hardware key. It ensures that the TII will be executed unmodified and in a specific TEE, which is the only party that can decrypt it.
After generation, TII can be executed the same way as a regular resource. Just pass it as a solution or data to the workflows create command as shown below
You need to have a solution resource file loaded in Storj (you can create your own using the guide in the documentation, but it will complicate testing, so I can provide the resource on which I tested)

     Call the command spctl tii generate <path_to_resource.json> --offer <teeOfferId> , where teeOfferId is the offer on which the solution will run

     Throw the resulting tii file as a solution when creating an order spctl workflows create ... --solution ./path-to-tii

 *The same procedure can (should) be carried out with data

 *It is important that the resource file (item 1) contains metadata fields (linkage/hash).  This will make sure that the solution has not been changed and is signed with the owner's key.
## Usage

```
spctl tii <command>
```

## Child commands

|**Command**|**Description**|
| :- | :- |
|[generate](/testnet/cli/commands/tii/generate)|Generate TII|
