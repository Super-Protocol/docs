---
id: "web-ui-metamask"
title: "Metamask Configuration"
slug: "/web-ui/metamask/"
sidebar_label: "Metamask Configuration"
sidebar_position: 2
custom_edit_url: null
---

To be able to use Web UI you need to complete the steps below:

1. If you don't have Metamask browser extension, please download and install it from the [official website](https://metamask.io/). Create a new wallet or import your existing one during the setup process.
2. In the menu click on **Settings** then go to the **Network** section and click on the **Add a network** button. 
   <p align="center"><img src={require('./images/mm-setup-01.png').default}/></p>
   <p align="center"><img src={require('./images/mm-setup-02.png').default}/></p>
3. Set the following parameters:

   <p align="center"><img src={require('./images/mm-setup-03.png').default}/></p>

   |Parameter|Value|
   | :- | :- |
   |Network Name|Matic Testnet Mumbai<br/><br/>**Note.** You can change this value if you like.|
   |New RPC URL|https://wandering-snowy-sun.matic-testnet.quiknode.pro/98e3f8f8fe7ef3c53743ba59fbe6fd6771638d61<br/><br/>**Note.** You can use different node, but we highly recommend to use this one. Some nodes, especially free ones, could have some limitations in terms of maximum number of consecutive transactions and their size. You could encounter some errors because of that.|
   |Chain ID|80001|
   |Currency Symbol|MATIC|
   |Block Explorer URL|https://mumbai.polygonscan.com|

4. In the menu click on **Import Account**. Select Type **Private Key** and enter the private key that you received in the Testnet invitation letter from Super Protocol team. Then click on the **Import** button.

   <p align="center"><img src={require('./images/mm-setup-04.png').default}/></p>
   <p align="center"><img src={require('./images/mm-setup-05.png').default}/></p>

5. Make sure that imported account number is the same that was provided in the Testnet invitation letter.

   <p align="center"><img src={require('./images/mm-setup-06.png').default}/></p>