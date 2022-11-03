---
id: "tee-confirmation-protocol"
title: "TEE Confirmation Protocol"
slug: "/tee-confirmation-protocol"
sidebar_position: 10
---

## Model overview

Each TEE device receives a fixed reward for being on the network. However, the following issues have to be solved:

1. You need to make sure that the TEE device really possesses all the compulsory features and can support confidential calculations.
2. You need to get the appropriate parameters for the TEE device in order to use it properly and pay the reward.
3. The TEE device has to be connected to the network and be ready to process the requests.
4. If there are any network intruders that pose as TEE devices, the system has to be able to identify and remove them with minimal inconvenience to honest devices.
5. The protocol has to operate within the smart contract system, which also imposes certain limitations.

## TEE Confirmation Block

The TEE Confirmation Protocol is designed as a solution to all the abovementioned issues. Its main component is the TEE Confirmation Block (TCB), which is obtained as a result of the **Confirmation Application** execution within the TEE:

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-01.png').default} />
</p>

The TCB consists of:

1. TEE Consensus Block that contains:
   1. Unique Device ID
   2. Equipment Benchmark Results
   3. Valid (confirmed) TCB IDs
   4. Invalid (declined) TCB IDs

2. TEE device Report that includes such key points as:
   1. Running Confirmation Application Hash
   2. TEE Consensus Block Hash

3. TEE Device Signature and certificate chains for signature verification

Created TCBs are written into the blockchain, but this is not a valid condition for their trustworthiness. In order to verify the TCB, you have to verify the report signature. This verification is carried out by the TEE devices during the Confirmation Application execution. The verification results for the evaluated TCBs are stored in a newly generated TCB of the verifying device. Thus, the continuous verification network is created.

In fact, the verification can be applied to the latest blocks as well as to other suspicious blocks in the network:

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-02.png').default} />
</p>

The technical limitations of the blockchain do not allow all the devices to verify all the blocks, which is why the Consensus Algorithm has been developed.

## Consensus Algorithm

The algorithm is implemented in the smart contract for TEE offers and cannot be applied to external data or carry out complex checks. That is why the consensus is based only on the received verification results performed by the TEE devices in TCBs.

To support the algorithm execution, the smart contract for TEE offers stores the following tables:

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-03.png').default} />
</p>

- Hash table (blocks registry) mapping blocks and rewards
- Table of the lastest TCBs for each device showing the number of positive and negative marks since the most recent block update
- Table of suspicious blocks with the total number of positive and negative marks

The Consensus Algorithm consists of the following steps:

1. **TCBs Generation.**
   1. The device accesses the smart contract to verify ![](images/tee-confirmation-protocol-formula-01.svg) blocks from the latest TCBs list and ![](images/tee-confirmation-protocol-formula-02.svg) blocks from the suspicious TCBs list.
      The total number of blocks to be checked equals ![](images/tee-confirmation-protocol-formula-03.svg).
    
      ***NB!*** *Due to the peculiarities of the blockchain implementation, the* ![](images/tee-confirmation-protocol-formula-02.svg) *blocks can be provided in segments via accessing the smart contract for several times.*
   
   2. The device launches the blocks verification application in the TEE and generates TCBs that contain the results for blocks verification and data on processing power. Such blocks are signed by the device.
      During the verification, the signature of each TCB is checked, as well as the hash of the Confirmation Application that was running on it.
   3. The device accesses the smart contract to store a new TCB.
2. **Keeping track of TCBs.** The smart contract takes TCB marks into account and carries out the following actions:
   1. Copies all the blocks that have not passed the verification (from the latest TCBs list) and puts them into the suspicious TCBs list.
   2. If the number of marks for the suspicious blocks equals some value ![](images/tee-confirmation-protocol-formula-04.svg), then the decision is made. The following condition is checked: if the number of the negative marks is higher than that of the positive ones, the block is considered to be **a malicious block**. Otherwise, the block is tagged as honest. After the decision is made, the block is removed from the suspicious TCBs list.
3. **Penalties for malicious providers.** If the block has been declared as a malicious block, then:
   1. It loses its reward. The reward is distributed proportionally to the processing power among the active devices in the system (within the last 24 hours).
   2. The device that has issued the block receives a penalty point.
   3. If the device receives ![](images/tee-confirmation-protocol-formula-10.svg) penalty points it is blocked without the possibility of being recovered. The security deposit is distributed proportionally to the processing power among the active devices in the system (within the last 24 hours). All the blocks issued by the device are removed from all the lists.
4. **Reward Payment.** The device receives a reward (unless it is blocked) according to the following formula:
   
   ![](images/tee-confirmation-protocol-formula-05.svg)

   where:

   ![](images/tee-confirmation-protocol-formula-06.svg) is the total reward for all the devices within the 24-hour period (established in the protocol settings), 
   
   ![](images/tee-confirmation-protocol-formula-07.svg) is the power of the ![](images/tee-confirmation-protocol-formula-08.svg) device, 
   
   ![](images/tee-confirmation-protocol-formula-09.svg) is the number of devices active within the last 24 hours.

   The reward is transferred to the security deposit of the device as a deferred payment. The staking rate is also calculated based on the reward.

## TCBs Generation

To receive a TCB, the Execution Controller of the TEE device queries (1) the blockchain network for other TCB blocks to verify and report on them. Among these blocks, the block belonging to the device is not submitted. Then the Controller runs the Confirmation Application (2) on the device, which performs the following actions:

- Checks hardware
- Checks TCB signatures on the certification service (3)
- Checks hash of the Confirmation Application running on the devices during TCBs generation
- Fills in the new TCB structure and signs it

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-04.png').default} />
</p>

After the application execution, the Execution Controller receives the result (4) and stores it in the blockchain (5) as the TEE Provider binds it to the TEE device. The device can only generate new TCBs once every 24 hours. If it attempts to access the smart contract earlier, it will not be able to receive blocks for verification or save a new block.

All the blocks submitted for verification are bound to the device and checked by the smart contract when receiving a new block.

## Keeping track of TCBs

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-05.png').default} />
</p>

When a new block is received, the smart contract updates the counter mechanisms for block verification and the performance characteristics of the device that sent the block.

If the negative mark is assigned to the last blocks, they are entered into the suspicious blocks table (unless they are already there and the device is blocked) without resetting the mark counter mechanisms. If the total number of verifications reaches a certain number ![](./images/tee-confirmation-protocol-formula-04.svg) in the suspicious blocks table, the decision on these blocks is made.

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-06.png').default} />
</p>

In this case, TCB_7 will be assigned to the suspicious blocks table, TCB_4 will be regarded as honest, and TCB_2 will be declared malicious.

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-07.png').default} />
</p>

In fact, all the blocks that the malicious block has given positive marks to will be assigned to the suspicious blocks table (unless they are already there and the device is blocked). This allows the attacker's evaluation chain to be canceled even if the corresponding blocks have not first been verified by honest devices.

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-08.png').default} />
</p>

## Reward Payment

The device receives the reward proportional to its share of the total power of the devices active within the last 24 hours:

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-09.png').default} />
</p>

The corresponding record is added to the Blocks and Rewards Registry:

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-10.png').default} />
</p>

Each reward is transferred to the security deposit as a deferred payment. The staking rate is also calculated based on the reward.

## Mathematical justification of consensus

In order to prove the functionality of the consensus algorithm, a mathematical study was carried out. It solved the problem of determining the optimal parameters of the system and emulation of the consensus algorithm.

For this purpose, a full-fledged emulator of both the blockchain network and the devices operating in consensus was developed. Already with the help of emulations the mathematical problem was solved.

The system parameters to be optimized were as follows:

- **AbuseDevices** - the number of malicious users (fraudulent devices) in the system
- **L1** – the number of blocks selected from the table of last blocks
- **L2** – the number of blocks selected from the table of suspicious blocks
- **K** – the required number of checks to make a decision on a suspicious block
- **PenaltyCount** – the maximum number of detected malicious blocks, to block the device

Since the losses from the presence of unrecognized malicious users in the system are extremely high, the task was set of determining the following variables:

- К1 - the maximum number of AbuseDevices in the system, at which the system with at least 95% confidence correctly recognizes and blocks them all
- К2 - parameters L1, L2, K, PenaltyCount, such that the number of normal devices that are mistaken for fraudulent ones and blocked by the system from the total number of normal devices will be minimal at the maximum number of malicious users (item 1).

The system's performance criteria were as follows:

- The number of malicious users correctly detected and blocked by the system out of the total number of malicious users
- The number of normal devices that are mistaken for malicious devices and blocked by the system out of the total number of normal devices.

There are additional technical limitations within the system:

- О1. The value of L1 should be as small as possible, with L1>1. The value of 1 is not applicable because of the strong increase in the probability of error in the initial evaluation of blocks compared to the value of 2.
- О2. The value of L2 must be such that 1<= L2 <=40
- О3. The number of days in which the system recognizes and blocks all fraudulent/ good devices, or the maximum acceptable number of Max\_Days is reached (taking into account the event that occurred earlier) should not exceed 40-42 days.

In order to solve the problem, the method of simulation modeling was chosen, followed by the construction of regression models based on the results of simulation modeling.

To implement the approach, a simulation (software) model of the system was built. Experiments were conducted on selected plans of experiments with 5 repetitions of experiments at each point of the plan. AbuseDevices, L1, L2  K, PenaltyCount were used as input parameters of the system. The output parameters of the model were as follows:

- The number of malicious users correctly detected and blocked by the system in each experiment (BadBlocked)
- The average number of good devices that are mistaken for fraudulent devices and blocked by the system (GoodBlocked)
- The average number of days (Days) in which the system recognizes and blocks all fraudulent/good devices, or the Max\_Days limit is reached (the event that occurred earlier is taken into account).
- 
### Research results with initial parameter values

The minimum possible values of the parameters L1, L2, K and PenaltyCount were chosen as the initial parameters, because in this case the minimum amount of system resources is required for its functioning. The values L1=2, L2=2, K=10, PenaltyCount=1, Max_Days=100 were taken as initial values and the system behavior was simulated when changing AbuseDevices, with the maximum possible value of MaxDev devices in the system assumed to be 10000, so that the number of good devices equals MaxDev - AbuseDevices.

Preliminary analysis showed that a complete elimination of malicious users in the system appears to be possible only when AbuseDevices<=5000, so the initial research aimed to study the behavior of the system in the vicinity of AbuseDevices=5000.

Simulation results when AbuseDevices change by 10 increments in the range 4900 <= AbuseDevices <= 5100 are shown below in Table 1.

Table 1

|**№**|**AbuseDevices**|**BadBlocked**|**GoodBlocked**|**Days**|
| :-: | :-: | :-: | :-: | :-: |
|1|4900|4900|4332|64,8|
|2|4910|4910|4344|65,8|
|3|4920|4920|4430|68,2|
|4|4930|4930|4627|78|
|5|4940|4940|4642|77,4|
|6|4950|4950|4609|74,2|
|7|4960|4960|4791|88|
|8|4970|4970|4814|88,8|
|9|4980|4977|4809|87,4|
|10|4990|4987|4852|92,2|
|11|5000|4971|4941|98,2|
|12|5010|4910|4960|97|
|13|5020|4824|4980|90|
|14|5030|4812|4969|90,2|
|15|5040|4785|4960|88,4|
|16|5050|4566|4950|76,4|
|17|5060|4570|4940|74,2|
|18|5070|4588|4930|74,4|
|19|5080|4574|4920|74,4|
|20|5090|4396|4910|68,8|
|21|5100|4261|4900|63|

Simulation results showed that when 0<=AbuseDevices<=4970, the BadBlocked value does not depend on L1, L2, K, PenaltyCount, but linearly depends only on AbuseDevices, with BadBlocked = AbuseDevices (Fig.1)

Fig. 1

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-11.png').default} />
</p>

Thus, with AbuseDevices <= 4970 taken for the system parameters used in the simulation, the complete elimination of all malicious users in the system is ensured. No data contradicting this result was obtained during the experiments.

Fig. 2 shows a graph of how GoodBlocked value changes depending on AbuseDevices in the range 4900 <= AbuseDevices <= 5100.

Fig. 2

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-12.png').default} />
</p>

Table 1 and Figures 1, 2 show that with AbuseDevices<=4970 and having the initial parameter values a complete elimination of malicious users in the system is ensured, but it takes from 64.8 to 88.8 days, which requires significant costs during system operation, and also it does not satisfy the О3 constraint. Between 4332 and 4814 (i.e., 85% to 95.7%) of good devices are blocked simultaneously in the system. A minimum value of GoodBlocked=4332 with AbuseDevices=4900 is highly inefficient. Further research is aimed at finding system parameters that optimize the criteria K1 and K2 under О1-О3 constraints.

### System optimization

Optimization of GoodBlocked value with AbuseDevices=4970 was performed by building a regression model based on system simulation using the theory of experiment planning for the following values of system parameters.

Optimization was carried out in several stages.

**Stage 1**. At this stage, we identified the parameter regions in which the local and global minima of GoodBlocked are located with AbuseDevices=4970.

For this purpose, the model was tabulated with the following parameter values:

Table 2

|**Parameter**|**Initial value**|**Final value**|**Tab step**|
| :- | :- | :- | :- |
|AbuseDevices|4970|4970|-|
|L1|1|109|27|
|L2|1|109|27|
|K|20|100|20|
|PenaltyCount|15|15|-|

As a result of the simulation, a global minimum at a certain point was found:

- L1=1, L2=109, K=100, PenaltyCount=15
- GoodBlocked=162,67 with Days=72
- This point does not meet the constraints О1-О3

**Stage 2**. At this stage, we studied the behavior of the system (GoodBlocked) when changing MaxPenaltyCount for fixed values of AbuseDevices=4970, L1=60, L2=60, and K=110.

Table 3

|**№**|**AbuseDevices**|**L1**|**L2**|**K**|**MaxPenaltyCount**|**GoodBlocked**|**Days**|
| :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|4970|60|60|110|9|328,8|21|
|2|4970|60|60|110|10|309,8|23|
|3|4970|60|60|110|11|282|25,6|
|4|4970|60|60|110|12|258,8|27,6|
|5|4970|60|60|110|13|251,2|30,2|
|6|4970|60|60|110|14|219,8|32,2|
|7|4970|60|60|110|15|197,6|35|

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-13.png').default} />
</p>

The results show that GoodBlocked decreases linearly with increasing MaxPenaltyCount (row 1), while Days (row 2) increases linearly. Thus, we take MaxPenaltyCount=15 as a test value, with GoodBlocked=197.6 and Days=35.

**Stage 3**. At this stage, the points that are closest to the acceptable area were identified. The following points with the optimal GoodBlocked values were selected (table 4):

Table 4

|**№**|**AbuseDevices**|**L1**|**L2**|**K**|**MaxPenaltyCount**|**GoodBlocked**|**Days**|
| :- | :- | :- | :- | :- | :- | :- | :- |
|1|4970|1|109|100|15|162,67|72,00|
|2|4970|1|109|80|15|180,00|76,00|
|3|4970|1|55|100|15|186,00|76,00|
|4|4970|1|82|100|15|190,33|77,00|
|5|4970|55|55|100|15|209,00|35,00|
|6|4970|1|82|80|15|221,00|78,00|
|7|4970|28|82|100|15|223,00|35,00|
|8|4970|1|109|60|15|225,00|75,00|
|9|4970|82|28|100|15|229,00|35,67|
|10|4970|109|28|100|15|249,67|35,33|
|11|4970|82|55|100|15|261,33|35,33|
|12|4970|1|82|60|15|291,67|78,67|
|13|4970|1|55|80|15|297,67|75,00|
|14|4970|109|1|80|15|298,67|36,00|
|15|4970|109|55|100|15|300,33|36,33|
|16|4970|82|28|80|15|309,67|35,67|
|17|4970|28|55|80|15|312,33|36,00|
|18|4970|1|28|60|15|327,67|76,33|
|19|4970|55|28|80|15|331,33|36,33|
|20|4970|109|1|100|15|340,00|44,00|
|21|4970|55|55|80|15|364,00|36,00|
|22|4970|55|82|100|15|367,33|35,67|
|23|4970|1|55|60|15|368,00|80,33|
|24|4970|109|28|80|15|387,67|36,00|
|25|4970|82|1|60|15|422,33|37,33|
|26|4970|55|28|60|15|443,00|37,33|

Analysis of the above table shows that:

- The optimal GoodBlocked values (with a fixed MaxPenaltyCount value) are achieved with a sufficiently large K >= 60;
- For a given K, the optimal GoodBlocked values are almost always reached when L1 and L2 are such that L1 + L2 > K. Thus, point 5 from Table 4 is also a candidate for the optimal point;
- None of the points in Table 4 satisfies the constraints О1-О3.

Analysis of Table 4 shows that point 18 is the closest to the acceptable area.

**Stage 4**. At this stage, a point was found that was located within the acceptable О1-О3 area and at the same time provided the best value for GoodBlocked.

This problem was solved by building regression models of GoodBlocked and Days depending on L1, L2, K, and MaxPenaltyCount within the area of point 18, which was found previously in step 3. For this purpose, a rotatable central composition plan (RCCP) of the experiment was constructed for the following intervals of changes of system parameters:

- AbuseDevices=4970
- 2<=L1<=4
- 30<=L2<=40						(\*\*)
- 45<=K<=55
- 13<= MaxPenaltyCount <=17.

Experiments with the simulation model were performed at plan points, with tests conducted on the selected plans of experiments at v=5 repetition of experiments at each plan point. The input parameters of the system included AbuseDevices, L1, L2, K, MaxPenaltyCount. The output parameters of the model were the following:

- Average number of good devices that were mistaken for malicious devices and blocked by the system (GoodBlocked).
- Average number of days (Days) in which the system will recognize and block all fraudulent/good devices, or the Max\_Days limit will be reached (the event that occurred earlier is considered).

To simplify the notation, we denote x1=L1, x2=L2, , x3=MaxPenaltyCount, x3=K, Y1=GoodBlocked,  Y2=Days.

To organize the experiments, a rotatable central composite plan of experiment (RCCP) was used to ensure that the dispersion of the GoodBlocked output variable for points within a single sphere was unchanged. The RCCP was constructed for the planning area (\*\*), and the following changes were implemented in the RCCP plan:

- Points were removed from the plan where the simulation experiment ended after 100 days without ensuring either the destruction of all malicious devices or all good devices for at least one of the v=5 experiments.
- Five experiments were also performed at the center of the plan as well as at the other points in the plan
- Two additional points were added to the plan, shifted relative to the center of the plan.

The dependence models Y1=F1(x1,x2,x3,x4) and Y2=F2(x1,x2,x3,x4) will be searched for in the form of third-order polynomials of the following form:

:::danger
Formula!
:::

The planning matrix F for model (1) is shown in Table 5. This matrix contains 19 columns corresponding to the summands (coefficients) of model (1), and 22 rows according to the number N=22 of points in which the experiment is conducted.

The values of the output variable Y1 at the plan points are shown in Table 6. The values of the output variable Y2 at the plan points are shown in Table 7.

Table 5: Planning Matrix F

:::danger
Table!
:::

Table 6: Results for the GoodBlocked calculation experiment

|<p></p><p>**№ of experiment**</p>|**X**|**x1**|**x2**|**x3**|**x4**|**Y1**|**Y2**|**Y3**|**Y4**|**Y5**|**Yicp**|
| :- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|4970|2|30|13|45|928|987|858|975|1029|955,4|
|2|4970|2|30|13|55|1984|1926|1940|1854|1875|1915,8|
|3|4970|2|30|17|45|835|777|894|856|793|831|
|4|4970|2|30|17|55|1770|1846|1957|1889|1848|1862|
|5|4970|2|40|13|45|508|620|463|624|520|547|
|6|4970|2|40|13|55|457|465|444|411|420|439,4|
|7|4970|2|40|17|45|409|454|342|390|438|406,6|
|8|4970|2|40|17|55|385|364|397|425|399|394|
|9|4970|4|30|13|45|2452|2321|2520|2450|2321|2412,8|
|10|4970|4|30|17|45|2576|2432|2328|2421|2411|2433,6|
|11|4970|4|40|13|45|645|584|646|612|635|624,4|
|12|4970|4|40|13|55|1682|1737|1673|1685|1734|1702,2|
|13|4970|4|40|17|45|531|495|545|534|533|527,6|
|14|4970|4|40|17|55|1624|1648|1659|1683|1659|1654,6|
|15|4970|1|35|15|50|438|389|451|412|274|392,8|
|16|4970|5|35|15|50|1905|2005|1852|1934|1873|1913,8|
|17|4970|3|45|15|50|440|420|331|374|341|381,2|
|18|4970|3|35|11|50|1380|1417|1311|1305|1324|1347,4|
|19|4970|3|35|19|50|1199|1261|1436|1135|1246|1255,4|
|20|4970|3|35|15|40|502|537|568|527|536|534|
|21|4970|2|36|13|45|507|497|489|546|471|502|
|22|4970|2|36|15|45|448|479|421|470|394|442,4|

Table 7. Results for the Days calculation experiment

|**№ of experiment**|**X**|**x1**|**x2**|**x3**|**x4**|**Y1**|**Y2**|**Y3**|**Y4**|**Y5**|**Yicp**|
| :- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|1|4970|2|30|13|45|43|47|42|43|43|43,6|
|2|4970|2|30|13|55|68|68|68|68|70|68,4|
|3|4970|2|30|17|45|57|53|53|57|55|55|
|4|4970|2|30|17|55|87|88|89|87|88|87,8|
|5|4970|2|40|13|45|41|41|42|42|43|41,8|
|6|4970|2|40|13|55|41|40|41|41|42|41|
|7|4970|2|40|17|45|54|54|52|53|53|53,2|
|8|4970|2|40|17|55|52|54|52|51|52|52,2|
|9|4970|4|30|13|45|56|57|57|57|57|56,8|
|10|4970|4|30|17|45|75|72|72|73|72|72,8|
|11|4970|4|40|13|45|31|32|32|33|33|32,2|
|12|4970|4|40|13|55|46|46|46|46|47|46,2|
|13|4970|4|40|17|45|41|41|40|41|43|41,2|
|14|4970|4|40|17|55|60|60|60|60|59|59,8|
|15|4970|1|35|15|50|77|78|78|78|82|78,6|
|16|4970|5|35|15|50|64|66|65|66|66|65,4|
|17|4970|3|45|15|50|42|41|42|41|43|41,8|
|18|4970|3|35|15|50|56|57|57|57|56|56,6|
|19|4970|3|35|19|50|71|71|72|70|71|71|
|20|4970|3|35|15|40|41|43|43|44|41|42,4|
|21|4970|2|36|13|45|41|40|41|44|42|41,6|
|22|4970|2|36|15|45|47|46|47|49|46|47|

Variable Yk here represents the results of a simulation experiment for functions Y1/Y2 at k=1,2….v, v=5, Yiср – average value of the output variable at the i-th point of the plan, i=1,2…N, N=22.

The algorithm for building a regression model contains the following steps:

1. Check the homogeneity of the dispersion of experiments by the Cochrane criterion. To do this, we calculate the dispersion of experiments Sy2(i) at each point of the plan i, i=1,2,..N by the following formula

:::danger
Formula!
:::

Next, we calculate the estimated value of the Cochrane criterion Gp

:::danger
Formula!
:::

For model (1) Gp=0,183, for model (2) Gp=0,141.

The critical value of Cochrane criterion for the number of freedom degrees of numerator q1=v-1=4 and denominator q2=N=22 and confidence probability р=0,95 equals Gкрит=0,2. Therefore, Gp<Gкрит the hypothesis of dispersion homogeneity of experiments is accepted and the theory of regression analysis can be applied to the results of experiments.

2. Calculate the dispersion matrix C by the formula

:::danger
Formula!
:::

3. Let us denote:

:::danger
Formula!
:::

 – vector of model coefficients (1),

:::danger
Formula!
:::

 – vector of model coefficients (2).

Now, let us calculate the estimates a, b of model coefficients (1) and (2), respectively, by the formula:

:::danger
Formula!
:::

where

:::danger
Formula!
:::

– vector of average values of the GoodBlocked response function in N experiments. (table 6)

:::danger
Formula!
:::

– vector of average values of the Days response function in N experiments. (table 7).

Once the calculations are done, we obtain parameters a0, aij, aii, aiii  of model (1):


|**Coefficients of model Y1**|**Coefficient values**|
| :-: | :-: |
|a0|-25634,65|
|a1|-2347,60|
|a2|-671,03|
|a3|109,68|
|a4|2274,72|
|a12|-71,54|
|a13|8,45|
|a14|58,13|
|a23|-1,27|
|a24|-10,56|
|a34|1,40|
|a11|913,57|
|a22|27,66|
|a33|-11,12|
|a44|-45,33|
|a111|-105,89|
|a222|-0,18|
|a333|0,23|
|a444|0,34|

The parameters b0, bij, bii, biii  of model (2) have the following values:

|**Coefficients of model Y2**|**Coefficient values**|
| :-: | :-: |
|b0|-419,57|
|b1|-90,5208|
|b2|127,1614|
|b3|-57,3338|
|b4|-51,629|
|b12|-1,445|
|b13|-0,0375|
|b14|0,86|
|b23|-0,16|
|b24|-0,323|
|b34|0,0625|
|b11|32,125|
|b22|-3,02308|
|b33|4,01375|
|b44|1,201569|
|b111|-3,14167|
|b222|0,028205|
|b333|-0,08375|
|b444|-0,00775|

4. Now, let us calculate the dispersion of observational errors for each of the models by the formula:

:::danger
Formula!
:::

Yik– value of the response function y of the i-th point of the plan at the k-th parallel experiment, v - number of parallel experiments at each point of the plan, qn =N(v-1)=88 – number of degrees of freedom.

For model (1)  Sn2=3122,19, for model (2) Sn2 =1,29.

5. Let us calculate the variance of inadequacy of models (1), (2) by the formula:

:::danger
Formula!
:::

where Yiоц – value of the response function at the i-th point of the plan, calculated by the formulas (1) and (2) at the points of the plan (Table 5) with the values of model coefficients (3) and (4),  qa=N-p – number of degrees of freedom, p – number of model coefficients, p=19, qа=3.

For model (1) Sa2 = 5320,45, for model (2) Sa2 = 5,10.

6. Next, let us check statistical significance of coefficients (3), (4) of model (1) and model (2) by Student's test. This check is usually done to simplify the model by excluding parameters with insignificant coefficients. As a rule, this is done in the manual way of data processing. In this study the evaluation of the significance of the coefficients was carried out, but here we do not describe the methodology, since all coefficients are included in the model. We only note that the evaluation of the significance of the coefficients showed that the parameter MaxPenaltyCount has no effect on GoodBlocked and Days in interactions with other parameters.

7. Let us check the adequacy of models (1), (2) by Fisher's criterion. For this purpose we calculate the following ratio.

:::danger
Formula!
:::

   If Fр<Fкр, where Fкр is the critical value of the Fisher distribution at significance level β and degrees of freedom qa and qn for the numerator and denominator respectively, then the model is considered adequate.

For qa=3, qn=88. Β=0,95 we have Fкр=2,71.

For model (1) Fр=1,704 and Fр<Fкр model (1) is adequate.

For model (2) Fр=3,96 and Fр>Fкр the hypothesis about the adequacy of model (2) must be rejected. However, the analysis of modeling results shows that Fisher's test fails because modeling results for model (2) are too accurate compared to the accuracy of approximation of the results by the model. Therefore, the coefficient of determination of the model is calculated to evaluate the adequacy of the model.

8. Let us find the coefficient of determination of the R2 model, reflecting the correspondence of the built models of type (1), (2) to the experimental data. The coefficient of determination is calculated according to the following formulas:

R2=1-SSres/SStot,

where 

:::danger
Formula!
:::

– sum of regression residuals,

:::danger
Formula!
:::

– total sum of squares,

Ycp – total average,

:::danger
Formula!
:::

The coefficient of determination of model (1) R2 = 0,9997, which indicates a good quality of approximation of experimental data by model (1) with coefficients (3).

The coefficient of determination of model (2) R2 = 0,993142, which also indicates a good quality of approximation of experimental data by model (2) with coefficients (4).

The overall conclusion of this stage is that the models built are adequate to the experimental data.

**Stage 5**. At this stage, we searched for the optimal point of the system described by the model (1), (3) in the area of planning (\*\*), satisfying the constraints О1-О3. The search for the optimal point was performed by direct enumeration of all values of the function (1), (3) in integer points of the planning area.

In order to check the constraint О3 (Days<=42), a direct enumeration of the values of function (2), (4) in the integer points of the planning area was performed. Thus, both the GoodBlocked value and the Days value were calculated at each point in the planning area.

According to the model (1), (3) with О1-О3 constraints, the minimum value of GoodBlocked at BadBlocked=4970 in the planning area (\*\*) is achieved at two close points:

- GoodBlocked=362,06 at L1=2, L2=40, K=51, MaxPenaltyCount=13    (5)
- GoodBlocked= 362,92 at L1=2, L2=40, K=52, MaxPenaltyCount=13  (6)

In order to verify the points found, a simulation of the system in the vicinity of points (5)-(6) was performed. The results of the simulation are given in table 8.

Table 8

|**AbuseDevices**|**L1**|**L2**|**K**|**MaxPenaltyCount**|**GoodBlocked**|**Days**|
| :- | :- | :- | :- | :- | :- | :- |
|4970|2|40|49|13|504,2|41,8|
|4970|2|40|50|13|436,2|42,6|
|4970|2|40|51|13|424,4|41,4|
|4970|2|40|52|13|411,8|41,8|
|4970|2|40|53|13|462,6|40,6|

The results of the simulation given in Table 5 show that the optimal point is the following:

- L1=2, L2=40, K=52, MaxPenaltyCount=13		  			(7)
- AbuseDevices=4970

**Effectiveness Criteria**:

- Badblocked=4970
- GoodBlocked=411,8
- Days=41,8

**Stage 6**. At this stage, the system was improved according to criteria К1, i.e. an increase in the number of malicious users blocked.

To solve the problem, a simulation of the system was performed with the found values of parameters (7) in the range of 4900<=AbuseDevices<=5100 (table 9).

Table 9

|<p>**Abuse**</p><p>**Devices**</p>|**L1**|**L2**|**K**|<p>**MaxPenalty**</p><p>**Count**</p>|**GoodBlocked**|**BadBlocked**|**Days**|
| :- | :- | :- | :- | :- | :- | :- | :- |
|4900|2|40|52|13|58|4900|39,2|
|4910|2|40|52|13|77,4|4910|40,4|
|4920|2|40|52|13|88,2|4920|40,4|
|4930|2|40|52|13|128,4|4930|40,6|
|4940|2|40|52|13|176,6|4940|40,8|
|4950|2|40|52|13|237,8|4950|40,6|
|4960|2|40|52|13|305|4960|42,2|
|4970|2|40|52|13|429|4970|43|
|4980|2|40|52|13|572,2|4980|43,8|
|4990|2|40|52|13|807,4|4990|44,8|
|5000|2|40|52|13|2567,2|4458,6|49|
|5010|2|40|52|13|4990|834,8|45|
|5020|2|40|52|13|4980|612,8|43,6|
|5030|2|40|52|13|4970|389|42,4|
|5040|2|40|52|13|4960|311|42,2|
|5050|2|40|52|13|4950|233|41,8|
|5060|2|40|52|13|4940|156,6|41,2|
|5070|2|40|52|13|4930|138|39,8|
|5080|2|40|52|13|4920|99,8|41|
|5090|2|40|52|13|4910|73|40,6|
|5100|2|40|52|13|4900|55,6|39,4|

The table demonstrates that the value of AbuseDevices, at which BadBlocked=AbuseDevices increased from 4970 to 4990. At the same time, the value of GoodBlocked increased from 429 (411.8 found in step 5) to 807.4 (almost twice as much). Also, the Days value increased from 43 (41.8 found in step 5) to 44.8 (an increase of 7%). Nevertheless, since the system losses from reducing the number of non-blocked malicious attackers exceed all other losses by 4 orders of magnitude, it is recommended to accept the following values as optimal:

- L1=2, L2=40, K=52, MaxPenaltyCount=13					(8)
- AbuseDevices=4990

**Effectiveness Criteria**:

- BadBlocked=4990
- GoodBlocked=807,8
- Days=44,8

**Stage 7**. At this stage, the scalability of the model was studied by simulating the system at 1000 and 20000 devices in the system.

In accordance with the accepted approach, a rotatable central composition plan (RCCP) of the experiment was constructed, similar to (\*\*), but with AbuseDevices=9940:

- AbuseDevices=9940
- 2<=L1<=4
- 30<=L2<=40						(\*\*)
- 45<=K<=55
- 13<= MaxPenaltyCount <=17

System simulation was conducted at the points of the constructed plan and regression model of the type (1) of GoodBlocked depending on system parameters. Besides that, GoodBlocked=952.57 was obtained for system parameters (8). In addition, the GoodBlocked value was calculated by simulation with AbuseDevices=497 (number of devices = 1000).

To compare the results, we calculated Per\_GoodBlocked, which is the proportion of blocked good devices in the total number of good devices at optimal system parameters for both AbuseDevices=4970 and AbuseDevices=9940 using the formula Per\_GoodBlocked=GoodBlocked/(MaxDev - AbuseDevices). The results are shown in table 10 below.

Table 10

|**Total number of devices in the system**|**AbuseDevices**|<p>**Good Blocked**</p><p></p>|**Per\_GoodBlocked**|
| :- | :- | :- | :- |
|1000|497|38,8|0,077|
|10000|4970|411,8|0,0819|
|20000|9940|952,57|0,0947|

The table indicates that Per\_GoodBlocked differs in both cases by no more than 19%. Thus, the system behaves statistically the same way with different values of AbuseDevices.

**Stage 8**. At this stage, the effectiveness of the "unwinding" mechanism was studied.

For this purpose, a system simulation was performed under optimal and non-optimal system parameters. Table 11 summarizes the simulation results showing the proportion of good devices blocked depending on the number of malicious users in the system.

Table 11

||**Proportion of good devices blocked**||||
| :- | :-: | :- | :- | :- |
|**Number of malicious users**|**Optimization without unwinding**|**Optimization with unwinding**|**Non-optimization without unwinding**|**Non-optimization with unwinding**|
|4800|0,000192308|3,84615E-05|0,715307692|0,720807692|
|4810|0,000192678|0,000192678|0,700115607|0,729055877|
|4820|0,000694981|0,00019305|0,718996139|0,741274131|
|4830|0,000502901|0,000270793|0,736595745|0,737601547|
|4840|0,000813953|0,000310078|0,756472868|0,761899225|
|4850|0,001165049|0,000466019|0,76023301|0,777980583|
|4860|0,001750973|0,00077821|0,790505837|0,790972763|
|4870|0,00288499|0,001013645|0,816140351|0,825107212|
|4880|0,003164063|0,001601563|0,821132813|0,811210938|
|4890|0,00481409|0,003405088|0,836594912|0,85409002|
|4900|0,006431373|0,005176471|0,862588235|0,849490196|
|4910|0,008880157|0,005776031|0,855834971|0,853398821|
|4920|0,013425197|0,008228346|0,869133858|0,871968504|
|4930|0,017554241|0,012938856|0,898856016|0,912662722|
|4940|0,025810277|0,017312253|0,901067194|0,91743083|
|4950|0,038455446|0,024871287|0,909029703|0,912594059|
|4960|0,045436508|0,038571429|0,946666667|0,950595238|
|4970|0,070497018|0,059681909|0,964294235|0,957017893|
|4980|0,09940239|0,083346614|0,967171315|0,957888446|
|4990|0,177205589|0,150459082|0,991217565|0,968383234|
|5000|0,75712|0,6058|0,99552|0,98828|

Fig. 3 and 4 show graphs of changes in the proportion of good devices blocked under different parameter values.

Fig. 3

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-14.png').default} />
</p>

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-15.png').default} />
</p>

The analysis of Table 11 and graphs in Figs. 3, 4 shows that the unwinding mechanism improves the performance of the system, reducing the proportion of good devices blocked in the system by 16% with the same number of malicious users. Both in the case of no unwinding and in the case of using this mechanism, a complete elimination of all malicious devices is ensured if AbuseDevices<50% of all devices.

**Stage 9**. At this stage, the behavior of the system at 4990<AbuseDevices<5000 was examined. For this purpose, a simulation of the system was performed at optimal parameters and when changing AbuseDevices in increments of 1.


||**AbuseDevices**|**GoodBlocked**|**BadBlocked**|**Days**|
| :- | -: | -: | -: | -: |
|1|4990|873,6|4990|44,6|
|2|4991|849,4|4991|44,4|
|3|4992|959,6|4992|45,4|
|4|4993|1300|4993|46,2|
|5|4994|1433,8|4994|46,8|
|6|4995|1440|4995|46|
|7|4996|1236|4996|45,4|
|8|4997|1479,4|4997|46,8|
|9|4998|1493,8|4998|46,4|
|10|4999|3614|2870,6|47|
|11|5000|5000|2015,8|47,6|

It is clear from the table that with the selected parameters the system provides the elimination of 4998 out of 5000 malicious devices, i.e. it provides a probability of 99.96 elimination of all malicious devices in the system, while in the worst scenario 50% of good devices will be mistakenly eliminated. When the number of malicious users is equal to 50%+1 of all devices, it is possible to eliminate 100% of good devices. Hence, to effectively attack the system, attackers must implement an “Attack 51” scheme with at least 50%+1 of fraudulent devices in the system, otherwise the system will effectively recognize the fraudsters and block them.

### Takeaways

1. As a result of the research, the optimal parameters (8) of the system were obtained.

The graphs in Fig. 3 demonstrate that with the found optimal values of the system parameters in the range of 4900<=AbuseDevices<=5000 there was a significant (on average by an order of magnitude) decrease in the GoodBlocked value, with the system being able to completely eliminate 4990 malicious devices out of a total of 10000. So, if 49.9% of malicious users are present in the system, the system is capable of blocking them, with an average of 16% of good devices being removed.


<p align="center">
  <img src={require('./images/tee-confirmation-protocol-16.png').default} />
</p>

The values for which the graphs in Fig. 3 are plotted are shown below in table 12.

Table 12

|**AbuseDevices**|**GoodBlocked at initial parameter values**|**GoodBlocked at found parameter values**|
| :- | :- | :- |
|4900|4332,40|58|
|4910|4343,80|77,4|
|4920|4429,60|88,2|
|4930|4627,20|128,4|
|4940|4642,20|176,6|
|4950|4608,60|237,8|
|4960|4791,00|305|
|4970|4813,80|429|
|4980|4808,60|572,2|
|4990|4851,60|807,4|
|5000|4941,40|2567,2|

2. Simulation experiments conducted during the study at various points in the parameter space showed that a further reduction in the GoodBlocked value can only be achieved by neglecting the constraints О1-О3. For example, reducing the value of GoodBlocked can be achieved by increasing the value of MaxPenaltyCount. The graph in Fig. 4 illustrates the comparison of GoodBlocked for MaxPenaltyCount=13 and MaxPenaltyCount=20 when changing the number of AbuseDevices from 4900 to 4990. The graph indicates that for all values of AbuseDevices, the value of GoodBlocked at MaxPenaltyCount=20 is on average 40% less than GoodBlocked at MaxPenaltyCount=13.

Fig. 4

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-17.png').default} />
</p>

The graph in Fig. 5 shows the results of system simulation at optimal values of parameters L1, L2, K and AbuseDevices=4970 when changing MaxPenaltyCount from 10 to 20.

Fig. 5

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-18.png').default} />
</p>

Increasing MaxPenaltyCount to 20 allows to reduce GoodBlocked to 301, i.e. to reduce GoodBlocked by 30%. At the same time, the value of Days in this case becomes equal to 63.8, i.e. increases by 52%. The possibility of such an increase depends on the technical capabilities of the system.

3. The studies showed that with the found parameter values the system behaves invariant to the maximum number of MaxDev devices in the system.
4. The use of unwinding mechanisms in the system allowed for a 16% increase in the effectiveness of the system according to the GoodBlocked criterion, with complete elimination of malicious users.
5. If the number of malicious devices is less than 50%-1, then with a probability of 99.96 the system will eliminate all malicious devices, with the worst case being that 50% of good devices will be mistakenly eliminated. When the number of fraudsters equals 50%+1, it is possible to eliminate 100% of all good devices. It means that to effectively attack the system, malicious users must implement an "Attack 51" scheme with at least 50%+1 of fraudulent devices in the system, otherwise the system will effectively recognize the fraudsters and block them.

## Possible attacks

The following attacks on the consensus protocol are possible:

1. Spam attack
2. False computing power attack
3. 51% attack

Let us consider each attack and how the consensus handles them.

**Spam attack**

The spam attack allows the attackers to flood smart contracts with fake devices. To ensure protection against this, the provider makes a security deposit, and a part of the deposit is reserved for the TEE offer registration. Tools such as garbage collection, which is used to remove unnecessary old entries in smart contracts on the blockchain and penalties for not fulfilling the orders are also utilized.

**False computing power attack**

The attacker introduces a block with a large amount of computing power in order to take away a significant portion of the reward from the network. To ensure protection against such attacks, the following algorithm is used. If a TCB computing power differs by more than 10% from the last value assigned to the device, the TCB is added to the list of suspicious blocks. In this case, the device does not participate in the consensus, and the TEE offer is not active.

<p align="center">
  <img src={require('./images/tee-confirmation-protocol-19.png').default} />
</p>

Only after an end-to-end verification is done, the device is allowed to operate and evaluate other devices. Block marks with modified computing power are not taken into account.

**51% attack**

This attack involves the attackers gaining control of more than 50% of hashing power compared to honest devices.

To perform this attack, the adversary is required to register a TEE Provider and buy a lot of genuine TEE devices equal in number to those already registered. Once the devices have passed the verification, false blocks are generated to take over the network.

During this, the attacker will give positive marks to intruders and negative marks to honest devices in order to exclude them from the system.

The reward the attacker eventually receives would be twice as much as what they would have received from their devices. To mitigate the attempted attack, the adversary will be penalized for not fulfilling the orders. In addition, as the network grows, the cost of such an attack becomes sky-high.

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$