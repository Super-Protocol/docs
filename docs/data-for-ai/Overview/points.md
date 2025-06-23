---
id: "points"
title: "Points and the Leaderboard"
slug: "/overview/points"
sidebar_position: 5
---

Your points are the result of your activity during the campaign and determine your rank on the leaderboard. The more valid data links you submit and the more active your referees are, the more points you will have.

→ Only the top 1,000 on the Leaderboard will qualify for [USDT and Super Stakes rewards](/data-for-ai/rules/rewards).

Your points may come from the following:

| **Action**          | **Points Earned** |
| :- | :- |
| Welcome Bonus       | **300** (one-time) |
| Valid URL           | **100\*** for each valid data link |
| Strike Bonus        | **280** (for exactly 30 valid data links in a day) |
| Referral Submission | **35\*** points for each valid data link |

**\*** Points for submitting a link, directly and through the referral program, increase by 4% daily during the campaign.

## Leaderboard

To check participants, referrals, rewards, and more, [read the campaign's smart contract](https://opbnb.bscscan.com/address/0x8c77ef6ed2ee514d1754fbfc2710d70e9d6ba871#readContract) on the opBNB network.

To find a participant, use the method [getParticipantInfo](https://opbnb.bscscan.com/address/0x8c77ef6ed2ee514d1754fbfc2710d70e9d6ba871#readContract#F12) and enter a wallet address. Example result:

```
0,0,true,false,0x8da2c62C23aEBeb1Aa8b5eE96d341d26a2edec6eB,68,2640,67738,390,0,237,152,0xbF4aC1b6efd5C21e5Ce93f34c8F43C8a9bCACA3F3,813,97280,10000000000000000000,500
```

Fields in the example in order of appearance:

| **Example value**                             | **Comment** |
| :-                                            | :- |
| `0`                                           | Submission attempts today. Always `0` because the campaign has ended. |
| `0`                                           | Number of links validated today. Always `0` because the campaign has ended. |
| `true`                                        | Flag indicating if the address is registered as a campaign participant. |
| `false`                                       | Flag indicating if the address has claimed the reward. |
| `0x8da2c62C23aEBeb1Aa8b5eE96d341d26a2edec6eB` | The referrer's address. |
| `68`                                          | Number of referees. |
| `2640`                                        | Points the address earned for its referrer. |
| `67738`                                       | Points the address earned from its referees. |
| `390`                                         | Total number of links submitted. |
| `0`                                           | Total number of duplicate links submitted. |
| `237`                                         | Total number of valid links submitted. |
| `152`                                         | Total number of invalid links submitted. |
| `0xbF4aC1b6efd5C21e5Ce93f34c8F43C8a9bCACA3F3` | The participant address. |
| `813`                                         | Current rank in the leaderboard. |
| `97280`                                       | Total points earned. |
| `10000000000000000000`                        | USDT reward, in denominations. 10<sup>18</sup> = 1 USDT. |
| `500`                                         | Super Stakes reward. |

To see all winners, use the method [getTopParticipantsInfo](https://opbnb.bscscan.com/address/0x8c77ef6ed2ee514d1754fbfc2710d70e9d6ba871#readContract#F21) and check 1,000 participants.

Use other smart contract's methods to get more information about the campaign results.