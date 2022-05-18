---
id: "Offers"
title: "Offers"
sidebar_label: "Offers"
sidebar_position: 0
---

## `Offers`



## Functions
### isOfferEnabled
```solidity
  function isOfferEnabled(
  ) public returns (bool)
```


### isOfferCancelable
```solidity
  function isOfferCancelable(
  ) public returns (bool)
```


### isOfferAllowedForConsumer
```solidity
  function isOfferAllowedForConsumer(
  ) public returns (bool)
```


### isOfferRestrictionsPermitOtherOffer
```solidity
  function isOfferRestrictionsPermitOtherOffer(
  ) public returns (bool)
```


### isOfferRestrictedByOfferType
```solidity
  function isOfferRestrictedByOfferType(
  ) public returns (bool)
```


### getOffersCount
```solidity
  function getOffersCount(
  ) public returns (uint256)
```


### getOfferType
```solidity
  function getOfferType(
  ) public returns (enum OfferType)
```


### getOfferGroup
```solidity
  function getOfferGroup(
  ) public returns (enum OfferGroup)
```


### getOfferOrigins
```solidity
  function getOfferOrigins(
  ) public returns (struct Origins)
```


### getOfferProviderAuthority
```solidity
  function getOfferProviderAuthority(
  ) public returns (address)
```


### getOfferDisabledAfter
```solidity
  function getOfferDisabledAfter(
  ) public returns (uint256)
```


### getOfferHoldDeposit
```solidity
  function getOfferHoldDeposit(
  ) public returns (uint256)
```


### getOfferClosingPrice
```solidity
  function getOfferClosingPrice(
  ) external returns (uint256)
```


### getTeeOfferLastTcbReward
```solidity
  function getTeeOfferLastTcbReward(
  ) public returns (uint256)
```


### getTeeOfferViolationRate
```solidity
  function getTeeOfferViolationRate(
  ) public returns (uint256)
```


### getValueOffer
```solidity
  function getValueOffer(
  ) public returns (struct ValueOfferInfo, address, uint256)
```


### getTeeOffer
```solidity
  function getTeeOffer(
  ) public returns (struct TeeOfferInfo, address, uint256)
```


### setOfferName
```solidity
  function setOfferName(
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```


### setOfferPublicKey
```solidity
  function setOfferPublicKey(
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```


### setOfferDescription
```solidity
  function setOfferDescription(
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```


### setTeeOfferTlb
```solidity
  function setTeeOfferTlb(
  ) external onlyProviderActionAccount(offerId) notBlocked(offerId) 
```


### createValueOffer
```solidity
  function createValueOffer(
  ) public 
```


### createTeeOffer
```solidity
  function createTeeOffer(
  ) public 
```


### enableOffer
```solidity
  function enableOffer(
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```


### disableOffer
```solidity
  function disableOffer(
  ) public onlyProviderActionAccount(offerId) notBlocked(offerId) 
```


### incrTeeOfferViolationRate
```solidity
  function incrTeeOfferViolationRate(
  ) public onlyApp 
```


## Events
### OfferCreated
```solidity
  event OfferCreated(
  )
```



### TeeOfferCreated
```solidity
  event TeeOfferCreated(
  )
```



### OfferEnabled
```solidity
  event OfferEnabled(
  )
```



### OfferDisabled
```solidity
  event OfferDisabled(
  )
```



### TeeOfferViolationRateChanged
```solidity
  event TeeOfferViolationRateChanged(
  )
```



