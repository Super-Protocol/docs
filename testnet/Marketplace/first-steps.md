---
id: "index-first-steps"
title: "First Steps"
slug: "/marketplace/first-steps/"
---

## 1. Getting Access

When you open the [Marketplace](https://marketplace.superprotocol.com/) for the first time, you will be asked to provide an access token. Please use the access token that you received in the Testnet invitation letter.

<p>
  <img width="303" height="213" src={require('./../images/access_token.png').default}/>
</p>

The token looks something like this: 

eyJhbGciOiJFUzI1CiJ9.eyJhZGRyZXNzIjoiMHhEZTBmMjljRTdhMmMyZDg5YTNFNjg4OTcyRUM3NzY0PDU0ZTc1LzgwIiwiaKF0IjoxNjYwOTE4MTU4LCJleHAiOjE2OTI0NzU3NTh9.cNC2CFfqO3UN8RuMpAFUp0zI5wXEOIR_xk9Ejvmv7lzyF6SPo_f83R2SOBDg1Tp1ldS7O1dLvjL6DuXlwUs4Lw

If your token doesn’t work, please contact us in [Discord](https://discord.com/invite/superprotocol). 

## 2. Metamask Configuration

Metamask login is not required to browse the Marketplace offers, but if you want to create orders, then you’ll need to configure Metamask for testnet. Please complete the steps below:

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 1. Install Metamask</b><br/>
Download and install the Metamask browser extension from its <a href="https://metamask.io/" target="_blank">official website</a>. Create a new wallet or import your existing one during the setup process. Skip this step if you have Metamask already installed.</div><br/>


<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
  <b>Step 2. Add a new network</b>
  <br/>
  Open Metamask. Click on <b>My Accounts</b> (avatar in the top right corner), then click on <b>Settings</b>, then go to the <b>Networks</b> section, click on the <b>Add a network</b> button and then scroll down and click on <b>Add a network manually</b>
</div>
<br/>

<p>
  <img width="329" height="488" src={require('./../images/metamask_1.png').default}/>
</p>
<p>
  <img width="619" height="342" src={require('./../images/metamask_2.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 3. Fill in the parameters</b><br/>
Set the following parameters and press <b>Save</b>.</div><br/>

<p>
  <img width="621" height="484" src={require('./../images/metamask_3.png').default}/>
</p>

| Parameter | Value |
| --- | ----------- |
| Network Name | Matic Testnet Mumbai <br /><br />*Note. You can change this value if you like.*|
| New RPC URL | [https://matic.getblock.io/testnet/85482b49-c3cc-4a91-9db0-044560a53206](https://matic.getblock.io/testnet/85482b49-c3cc-4a91-9db0-044560a53206)<br/><br/>*Note. You can use a different node, but we highly recommend that you use this one. Some nodes, especially free ones, may have some limitations on the maximum number of consecutive transactions and their size. Because of this, you may encounter some errors.*|
| Chain ID | 80001 |
| Currency Symbol | MATIC |
| Block Explorer URL | [https://mumbai.polygonscan.com](https://mumbai.polygonscan.com) |

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 4. Import account</b><br/>
Open again <b>My Accounts</b> and click on <b>Import Account</b>. Select type <b>Private Key</b> and enter the private key that you received from the Super Protocol team. Then click on the <b>Import</b> button.</div><br/>

Testnet Private Key looks something like this: 0xb8371e9b2mr9f6e2b9e5ec1ead09b731607b923125c2faae6076df72f37e4b2e

<p>
  <img width="325" height="491" src={require('./../images/metamask_4.png').default}/>
</p>

<p>
  <img width="383" height="488" src={require('./../images/metamask_5.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 5. Check account number</b><br/>
Make sure that the imported account number is the same as the one that was provided in the Testnet invitation letter.</div><br/>

Testnet account number looks something like this: 0xDe0f32cH7a2c3d85a3E578972EC7764154e75380

<p>
  <img width="623" height="170" src={require('./../images/metamask_6.png').default}/>
</p>

It is also probably a good idea to rename this account: Super Protocol Testnet or anything you like. Just to make sure you’ll use the correct account when connecting to the Marketplace in the next section.

## 3. Connecting Wallet

At this point we assume that you have done all the steps in the previous section and correctly configured Metamask.

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 1. Press Connect Wallet</b><br/>
Go to the [Marketplace](https://marketplace.superprotocol.com). To connect the wallet, click on the <b>Connect Wallet</b> button in the top right corner.</div><br/> 

<p>
  <img width="360" height="227" src={require('./../images/metamask_7.png').default}/>
</p>
<p>
  <img width="364" height="165" src={require('./../images/metamask_8.png').default}/>
</p>

<div style={{'background-color':'rgba(255, 217, 170,0.5)',padding: 12 + 'px'}}>
<b>Step 2. Select Metamask account</b><br/>
The Metamask app will open. Select the account that you have configured in the previous section (the one sent in the invitation letter).</div><br/> 

If everything is done correctly, you will see your account number as well as your token balance.

<p>
  <img width="622" height="64" src={require('./../images/metamask_9.png').default}/>
</p>

If you see the error below, it means that you are trying to connect with the wrong Metamask account.

<p>
  <img width="321" height="321" src={require('./../images/metamask_10.png').default}/>
</p>

In this case, open Metamask and disconnect this account. 

<p>
  <img width="321" height="379" src={require('./../images/metamask_11.png').default}/>
</p>

And then again click on the Connect Wallet button in the Marketplace and select the account that you configured for Testnet (the one that was sent to you in the invitation letter). Please refer to the Metamask Configuration section if in doubt.

## 4. Receiving Tokens

There are two types of tokens that are used in Super Protocol and you will need both of them:

1. MATIC token is used to pay for transactions on Polygon blockchain.
2. TEE token is used to pay for offers and receive payments in Super Protocol.

To get tokens, use the corresponding links in the top menu. 

<p>
  <img width="467" height="54" src={require('./../images/metamask_12.png').default}/>
</p>

Please note that there is a limit to the maximum balance of each token in one account. If you reach this limit, you cannot request additional tokens until you spend some of them. 

**Important!** Do not send MATIC tokens to other accounts. Violators will be banned from using Super Protocol testnet.
