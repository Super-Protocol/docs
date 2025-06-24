---
id: "rewards"
title: "Rewards"
slug: "/rules/rewards"
sidebar_position: 3
---

## Reward recipients

Only the top 1,000 participants will get prizes, and the rewards will depend on the rank. The rank is determined by the user’s total points: own points plus referral points.

| **Rank**  | **USDT**    | **Super Stakes** |
| :-        | :-          | :- |
| 1–3       | $1,000 each | 15,000 each |
| 4–10      | $500 each   | 10,000 each |
| 11–50     | $200 each   | 5,000 each |
| 51–200    | $50 each    | 1,900 each |
| 201–1,000 | $10 each    | 500 each |

Tiebreaker: whoever earned points **earlier** wins the higher rank.

## Claiming rewards

The relevant dates and conditions for claiming rewards:

| **Date**                       | **Event** |
| :-                             | :- |
| June 23, 2025, 12:00 PM UTC    | Campaign ends |
| By June 26, 2025, 12:00 PM UTC | Winners are announced |
| June 26, 2025, 12:00 PM UTC    | USDT claiming opens |
| August 25, 2025, 12:00 PM UTC  | Final deadline to claim rewards |
| TBD                            | Super Tokens claiming |

**USDT rewards** will be claimable via a dedicated campaign page.

**Super Stakes** will be convertible to Super Tokens at a rate to be announced closer to the token generation event; date to be determined.

All rewards will be claimable on the **opBNB network**.

The top 50 participants might be subject to KYC checks to verify identity and prevent bot activity.

## Leaderboard

To check winners, participants, referrals, rewards, and more, [read the campaign’s smart contract](https://opbnb.bscscan.com/address/0x8c77ef6ed2ee514d1754fbfc2710d70e9d6ba871#readContract) on the opBNB network.

### Check a participant

To get the full information about a participant, use the method [getParticipantInfo](https://opbnb.bscscan.com/address/0x8c77ef6ed2ee514d1754fbfc2710d70e9d6ba871#readContract#F12). Enter a wallet address and press **Query**.

<img src={require('../images/getParticipantInfo.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Example result:

```text
0,0,true,false,0x8da2c62C23aEBeb1Aa8b5eE96d341d26a2edec6eB,68,2640,67738,390,0,237,152,0xbF4aC1b6efd5C21e5Ce93f34c8F43C8a9bCACA3F3,813,97280,10000000000000000000,500
```

Fields in the example in order of appearance:

| **Example value**                             | **Comment** |
| :-                                            | :- |
| `0`                                           | Submission attempts today. Always `0` because the campaign has ended. |
| `0`                                           | Number of links validated today. Always `0` because the campaign has ended. |
| `true`                                        | Flag indicating if the address is registered as a campaign participant. |
| `false`                                       | Flag indicating if the address has claimed the reward. |
| `0x8da2c62C23aEBeb1Aa8b5eE96d341d26a2edec6eB` | The referrer’s address. |
| `68`                                          | Number of referees. |
| `2640`                                        | Points the participant earned for their referrer. |
| `67738`                                       | Points the participant earned from their referees. |
| `390`                                         | Total number of links submitted. |
| `0`                                           | Total number of duplicate links submitted. |
| `237`                                         | Total number of valid links submitted. |
| `152`                                         | Total number of invalid links submitted. |
| `0xbF4aC1b6efd5C21e5Ce93f34c8F43C8a9bCACA3F3` | The participant’s address. |
| `813`                                         | Current rank in the leaderboard. |
| `97280`                                       | Total points earned. |
| `10000000000000000000`                        | USDT reward, in denominations. 10<sup>18</sup> = 1 USDT. |
| `500`                                         | Super Stakes reward. |

### Check other information

To see participants around you, use the method [getParticipantsAroundRank](https://opbnb.bscscan.com/address/0x8c77ef6ed2ee514d1754fbfc2710d70e9d6ba871#readContract#F16). Enter your rank, the desired range, and press **Query**.

<img src={require('../images/getParticipantsAroundRank.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

To see all winners, use the method [getTopParticipantsInfo](https://opbnb.bscscan.com/address/0x8c77ef6ed2ee514d1754fbfc2710d70e9d6ba871#readContract#F21). Enter 1000 and press **Query**.

<img src={require('../images/getTopParticipantsInfo.png').default} width="auto" height="auto" border="1"/>
<br/>
<br/>

Use other smart contract methods to get more information about the campaign results.