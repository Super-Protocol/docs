---
id: "IOrder"
title: "IOrder"
sidebar_label: "IOrder"
sidebar_position: 0
---
[Ballot]: ../Ballot.md#Ballot
[Ballot-superpro-contract-ISuperpro]: ../Ballot.md#Ballot-superpro-contract-ISuperpro
[Ballot-info-struct-BallotInfo]: ../Ballot.md#Ballot-info-struct-BallotInfo
[Ballot-voters-struct-VoterInfo--]: ../Ballot.md#Ballot-voters-struct-VoterInfo--
[Ballot-userVote-mapping-address----uint256-]: ../Ballot.md#Ballot-userVote-mapping-address----uint256-
[Ballot-constructor-address-address-uint256-struct-ModifyRequest-]: ../Ballot.md#Ballot-constructor-address-address-uint256-struct-ModifyRequest-
[Ballot-vote-bool-]: ../Ballot.md#Ballot-vote-bool-
[Ballot-getInfo--]: ../Ballot.md#Ballot-getInfo--
[Ballot-setState-enum-BallotState-enum-BallotStateReason-]: ../Ballot.md#Ballot-setState-enum-BallotState-enum-BallotStateReason-
[Ballot-NewVote-address-bool-]: ../Ballot.md#Ballot-NewVote-address-bool-
[Offer]: ../Offer.md#Offer
[Offer-onlyProviderActionAccount--]: ../Offer.md#Offer-onlyProviderActionAccount--
[Offer-superpro-contract-ISuperpro]: ../Offer.md#Offer-superpro-contract-ISuperpro
[Offer-providers-contract-IProviderRegistry]: ../Offer.md#Offer-providers-contract-IProviderRegistry
[Offer-valueOffersFactory-contract-IValueOffersFactory]: ../Offer.md#Offer-valueOffersFactory-contract-IValueOffersFactory
[Offer-provider-address]: ../Offer.md#Offer-provider-address
[Offer-externalId-bytes32]: ../Offer.md#Offer-externalId-bytes32
[Offer-info-struct-OfferInfo]: ../Offer.md#Offer-info-struct-OfferInfo
[Offer-origins-struct-Origins]: ../Offer.md#Offer-origins-struct-Origins
[Offer-restrictions-mapping-enum-OfferType----struct-AddressHashSet-]: ../Offer.md#Offer-restrictions-mapping-enum-OfferType----struct-AddressHashSet-
[Offer-typesRestrictions-mapping-enum-OfferType----bool-]: ../Offer.md#Offer-typesRestrictions-mapping-enum-OfferType----bool-
[Offer-constructor-address-address-address-struct-OfferInfo-bytes32-]: ../Offer.md#Offer-constructor-address-address-address-struct-OfferInfo-bytes32-
[Offer-getOrigins--]: ../Offer.md#Offer-getOrigins--
[Offer-setName-string-]: ../Offer.md#Offer-setName-string-
[Offer-setDescription-string-]: ../Offer.md#Offer-setDescription-string-
[Offer-getProviderAuthority--]: ../Offer.md#Offer-getProviderAuthority--
[Offer-getInfo--]: ../Offer.md#Offer-getInfo--
[Offer-isCancelable--]: ../Offer.md#Offer-isCancelable--
[Offer-isEnabled--]: ../Offer.md#Offer-isEnabled--
[Offer-getDisabledAfter--]: ../Offer.md#Offer-getDisabledAfter--
[Offer-isAllowedFor-address-]: ../Offer.md#Offer-isAllowedFor-address-
[Offer-isRestrictionsPermitThatOffer-address-]: ../Offer.md#Offer-isRestrictionsPermitThatOffer-address-
[Offer-isRestrictedByOfferType-enum-OfferType-]: ../Offer.md#Offer-isRestrictedByOfferType-enum-OfferType-
[Offer-getClosingPrice-uint256-uint256-]: ../Offer.md#Offer-getClosingPrice-uint256-uint256-
[Offer-getHoldDeposit--]: ../Offer.md#Offer-getHoldDeposit--
[Offer-getOfferType--]: ../Offer.md#Offer-getOfferType--
[Offer-getOfferGroup--]: ../Offer.md#Offer-getOfferGroup--
[Offer-getProvider--]: ../Offer.md#Offer-getProvider--
[Offer-enable--]: ../Offer.md#Offer-enable--
[Offer-disable--]: ../Offer.md#Offer-disable--
[OffersFactory]: ../OffersFactory.md#OffersFactory
[OffersFactory-superpro-contract-ISuperpro]: ../OffersFactory.md#OffersFactory-superpro-contract-ISuperpro
[OffersFactory-offers-address--]: ../OffersFactory.md#OffersFactory-offers-address--
[OffersFactory-offersProvider-mapping-address----address-]: ../OffersFactory.md#OffersFactory-offersProvider-mapping-address----address-
[OffersFactory-constructor-address-]: ../OffersFactory.md#OffersFactory-constructor-address-
[OffersFactory-create-address-struct-OfferInfo-bytes32-]: ../OffersFactory.md#OffersFactory-create-address-struct-OfferInfo-bytes32-
[OffersFactory-getOffers--]: ../OffersFactory.md#OffersFactory-getOffers--
[OffersFactory-getOffersProvider-address-]: ../OffersFactory.md#OffersFactory-getOffersProvider-address-
[OffersFactory-OfferCreated-address-]: ../OffersFactory.md#OffersFactory-OfferCreated-address-
[Order]: ../Order.md#Order
[Order-onlyProviderActionAccount--]: ../Order.md#Order-onlyProviderActionAccount--
[Order-onlyConsumer--]: ../Order.md#Order-onlyConsumer--
[Order-parentOrder-address]: ../Order.md#Order-parentOrder-address
[Order-consumer-address]: ../Order.md#Order-consumer-address
[Order-startDate-uint256]: ../Order.md#Order-startDate-uint256
[Order-subOrders-address--]: ../Order.md#Order-subOrders-address--
[Order-externalId-bytes32]: ../Order.md#Order-externalId-bytes32
[Order-orderInfo-struct-OrderInfo]: ../Order.md#Order-orderInfo-struct-OrderInfo
[Order-orderResult-struct-OrderResult]: ../Order.md#Order-orderResult-struct-OrderResult
[Order-offerType-enum-OfferType]: ../Order.md#Order-offerType-enum-OfferType
[Order-origins-struct-Origins]: ../Order.md#Order-origins-struct-Origins
[Order-superpro-contract-ISuperpro]: ../Order.md#Order-superpro-contract-ISuperpro
[Order-changeWithdrawn-bool]: ../Order.md#Order-changeWithdrawn-bool
[Order-profitWithdrawn-bool]: ../Order.md#Order-profitWithdrawn-bool
[Order-suborderGroupCount-mapping-enum-OfferGroup----uint256-]: ../Order.md#Order-suborderGroupCount-mapping-enum-OfferGroup----uint256-
[Order-inputOffersTypesCount-mapping-enum-OfferType----uint256-]: ../Order.md#Order-inputOffersTypesCount-mapping-enum-OfferType----uint256-
[Order-constructor-address-address-address-struct-OrderInfo-uint256-bool-bytes32-]: ../Order.md#Order-constructor-address-address-address-struct-OrderInfo-uint256-bool-bytes32-
[Order-getOrigins--]: ../Order.md#Order-getOrigins--
[Order-start--]: ../Order.md#Order-start--
[Order-updateStatusFromSuborders-address-enum-OrderStatus-]: ../Order.md#Order-updateStatusFromSuborders-address-enum-OrderStatus-
[Order-complete-enum-OrderStatus-string-string-]: ../Order.md#Order-complete-enum-OrderStatus-string-string-
[Order-cancelOrder--]: ../Order.md#Order-cancelOrder--
[Order-isCompleted--]: ../Order.md#Order-isCompleted--
[Order-isReadyForProcessing--]: ../Order.md#Order-isReadyForProcessing--
[Order-setProcessingStatus--]: ../Order.md#Order-setProcessingStatus--
[Order-updateStatus-enum-OrderStatus-uint256-]: ../Order.md#Order-updateStatus-enum-OrderStatus-uint256-
[Order-getOrderInfo--]: ../Order.md#Order-getOrderInfo--
[Order-getOrderResult--]: ../Order.md#Order-getOrderResult--
[Order-getSubOrders--]: ../Order.md#Order-getSubOrders--
[Order-getChangeWithdrawn--]: ../Order.md#Order-getChangeWithdrawn--
[Order-getProfitWithdrawn--]: ../Order.md#Order-getProfitWithdrawn--
[Order-getConsumer--]: ../Order.md#Order-getConsumer--
[Order-getOrderPrice--]: ../Order.md#Order-getOrderPrice--
[Order-getParentOrder--]: ../Order.md#Order-getParentOrder--
[Order-createSubOrder-struct-OrderInfo-bool-bytes32-]: ../Order.md#Order-createSubOrder-struct-OrderInfo-bool-bytes32-
[Order-withdrawProfit--]: ../Order.md#Order-withdrawProfit--
[Order-withdrawChange--]: ../Order.md#Order-withdrawChange--
[Order-getExteranlId--]: ../Order.md#Order-getExteranlId--
[Order-OrderStatusUpdated-address-enum-OrderStatus-]: ../Order.md#Order-OrderStatusUpdated-address-enum-OrderStatus-
[Order-SubOrderCreated-address-]: ../Order.md#Order-SubOrderCreated-address-
[OrdersFactory]: ../OrdersFactory.md#OrdersFactory
[OrdersFactory-onlyOrder-uint256-]: ../OrdersFactory.md#OrdersFactory-onlyOrder-uint256-
[OrdersFactory-orderConsumer-mapping-address----address-]: ../OrdersFactory.md#OrdersFactory-orderConsumer-mapping-address----address-
[OrdersFactory-orderHoldDeposits-mapping-address----uint256-]: ../OrdersFactory.md#OrdersFactory-orderHoldDeposits-mapping-address----uint256-
[OrdersFactory-orderBlockingSuborders-mapping-address----mapping-address----uint256--]: ../OrdersFactory.md#OrdersFactory-orderBlockingSuborders-mapping-address----mapping-address----uint256--
[OrdersFactory-orderBlockingSubordersCount-mapping-address----uint256-]: ../OrdersFactory.md#OrdersFactory-orderBlockingSubordersCount-mapping-address----uint256-
[OrdersFactory-allOrders-address--]: ../OrdersFactory.md#OrdersFactory-allOrders-address--
[OrdersFactory-superpro-contract-ISuperpro]: ../OrdersFactory.md#OrdersFactory-superpro-contract-ISuperpro
[OrdersFactory-constructor-address-]: ../OrdersFactory.md#OrdersFactory-constructor-address-
[OrdersFactory-create-struct-OrderInfo-uint256-bool-bytes32-]: ../OrdersFactory.md#OrdersFactory-create-struct-OrderInfo-uint256-bool-bytes32-
[OrdersFactory-refillOrder-address-uint256-]: ../OrdersFactory.md#OrdersFactory-refillOrder-address-uint256-
[OrdersFactory-addSubOrder-address-uint256-struct-OrderInfo-bool-bytes32-]: ../OrdersFactory.md#OrdersFactory-addSubOrder-address-uint256-struct-OrderInfo-bool-bytes32-
[OrdersFactory-onOrderCompleted-address-bool-]: ../OrdersFactory.md#OrdersFactory-onOrderCompleted-address-bool-
[OrdersFactory-transferProfit-uint256-address-]: ../OrdersFactory.md#OrdersFactory-transferProfit-uint256-address-
[OrdersFactory-transferChange-uint256-]: ../OrdersFactory.md#OrdersFactory-transferChange-uint256-
[OrdersFactory-isValidOrder-address-]: ../OrdersFactory.md#OrdersFactory-isValidOrder-address-
[OrdersFactory-listAll--]: ../OrdersFactory.md#OrdersFactory-listAll--
[OrdersFactory-getOrderHoldDeposit-address-]: ../OrdersFactory.md#OrdersFactory-getOrderHoldDeposit-address-
[OrdersFactory-getOrderBlockingSubordersCount-address-]: ../OrdersFactory.md#OrdersFactory-getOrderBlockingSubordersCount-address-
[OrdersFactory-OrderCreated-address-]: ../OrdersFactory.md#OrdersFactory-OrderCreated-address-
[Provider]: ../Provider.md#Provider
[Provider-onlyAuthority--]: ../Provider.md#Provider-onlyAuthority--
[Provider-onlyTeeOffersFactory--]: ../Provider.md#Provider-onlyTeeOffersFactory--
[Provider-onlyOffersFactory--]: ../Provider.md#Provider-onlyOffersFactory--
[Provider-superpro-contract-ISuperpro]: ../Provider.md#Provider-superpro-contract-ISuperpro
[Provider-auth-address]: ../Provider.md#Provider-auth-address
[Provider-externalId-bytes32]: ../Provider.md#Provider-externalId-bytes32
[Provider-violationRate-uint256]: ../Provider.md#Provider-violationRate-uint256
[Provider-offers-struct-ProviderOffers]: ../Provider.md#Provider-offers-struct-ProviderOffers
[Provider-info-struct-ProviderInfo]: ../Provider.md#Provider-info-struct-ProviderInfo
[Provider-origins-struct-Origins]: ../Provider.md#Provider-origins-struct-Origins
[Provider-constructor-address-address-struct-ProviderInfo-bytes32-]: ../Provider.md#Provider-constructor-address-address-struct-ProviderInfo-bytes32-
[Provider-getOrigins--]: ../Provider.md#Provider-getOrigins--
[Provider-addOffer-address-]: ../Provider.md#Provider-addOffer-address-
[Provider-setOfferState-bool-uint256-]: ../Provider.md#Provider-setOfferState-bool-uint256-
[Provider-modify-struct-ProviderInfo-]: ../Provider.md#Provider-modify-struct-ProviderInfo-
[Provider-incrViolationRate--]: ../Provider.md#Provider-incrViolationRate--
[Provider-gc--]: ../Provider.md#Provider-gc--
[Provider-getAuth--]: ../Provider.md#Provider-getAuth--
[Provider-getTokenReceiver--]: ../Provider.md#Provider-getTokenReceiver--
[Provider-getActionAccount--]: ../Provider.md#Provider-getActionAccount--
[Provider-getInfo--]: ../Provider.md#Provider-getInfo--
[Provider-getViolationRate--]: ../Provider.md#Provider-getViolationRate--
[Provider-getTargetSecDepo-uint256-]: ../Provider.md#Provider-getTargetSecDepo-uint256-
[Provider-valueEnabledRecently--]: ../Provider.md#Provider-valueEnabledRecently--
[Provider-teeEnabledRecently--]: ../Provider.md#Provider-teeEnabledRecently--
[Provider-getValueOffers--]: ../Provider.md#Provider-getValueOffers--
[Provider-getTeeOffers--]: ../Provider.md#Provider-getTeeOffers--
[Provider-hasEnabledOffers--]: ../Provider.md#Provider-hasEnabledOffers--
[Provider-getOffersState--]: ../Provider.md#Provider-getOffersState--
[Provider-getExteranlId--]: ../Provider.md#Provider-getExteranlId--
[ProviderRegistry]: ../ProviderRegistry.md#ProviderRegistry
[ProviderRegistry-onlyNotRegistred--]: ../ProviderRegistry.md#ProviderRegistry-onlyNotRegistred--
[ProviderRegistry-onlyConsensus--]: ../ProviderRegistry.md#ProviderRegistry-onlyConsensus--
[ProviderRegistry-superpro-contract-ISuperpro]: ../ProviderRegistry.md#ProviderRegistry-superpro-contract-ISuperpro
[ProviderRegistry-providersInfo-mapping-address----address-]: ../ProviderRegistry.md#ProviderRegistry-providersInfo-mapping-address----address-
[ProviderRegistry-providersInfoList-address--]: ../ProviderRegistry.md#ProviderRegistry-providersInfoList-address--
[ProviderRegistry-constructor-address-]: ../ProviderRegistry.md#ProviderRegistry-constructor-address-
[ProviderRegistry-register-struct-ProviderInfo-bytes32-]: ../ProviderRegistry.md#ProviderRegistry-register-struct-ProviderInfo-bytes32-
[ProviderRegistry-get-address-]: ../ProviderRegistry.md#ProviderRegistry-get-address-
[ProviderRegistry-refillSecurityDepo-uint256-]: ../ProviderRegistry.md#ProviderRegistry-refillSecurityDepo-uint256-
[ProviderRegistry-returnSecurityDepo-uint256-]: ../ProviderRegistry.md#ProviderRegistry-returnSecurityDepo-uint256-
[ProviderRegistry-listAll--]: ../ProviderRegistry.md#ProviderRegistry-listAll--
[ProviderRegistry-checkRegistration-address-]: ../ProviderRegistry.md#ProviderRegistry-checkRegistration-address-
[ProviderRegistry-hasEnoughSecurityDeposit-address-]: ../ProviderRegistry.md#ProviderRegistry-hasEnoughSecurityDeposit-address-
[ProviderRegistry-chargePenalty-address-uint256-]: ../ProviderRegistry.md#ProviderRegistry-chargePenalty-address-uint256-
[ProviderRegistry-getSecurityDeposit-address-]: ../ProviderRegistry.md#ProviderRegistry-getSecurityDeposit-address-
[ProviderRegistry-ProviderRegistred-address-]: ../ProviderRegistry.md#ProviderRegistry-ProviderRegistred-address-
[Ratings]: ../Ratings.md#Ratings
[Staking]: ../Staking.md#Staking
[Staking-superpro-contract-ISuperpro]: ../Staking.md#Staking-superpro-contract-ISuperpro
[Staking-stakes-mapping-address----struct-StakeInfo-]: ../Staking.md#Staking-stakes-mapping-address----struct-StakeInfo-
[Staking-userLockedTokens-mapping-address----mapping-enum-ContractName----struct-LockedTokens--]: ../Staking.md#Staking-userLockedTokens-mapping-address----mapping-enum-ContractName----struct-LockedTokens--
[Staking-constructor-address-]: ../Staking.md#Staking-constructor-address-
[Staking-stake-uint256-]: ../Staking.md#Staking-stake-uint256-
[Staking-stakeFor-address-uint256-]: ../Staking.md#Staking-stakeFor-address-uint256-
[Staking-unstake-uint256-]: ../Staking.md#Staking-unstake-uint256-
[Staking-lock-address-uint256-uint256-]: ../Staking.md#Staking-lock-address-uint256-uint256-
[Staking-unlock-address-uint256-]: ../Staking.md#Staking-unlock-address-uint256-
[Staking-confiscateFrom-address-uint256-]: ../Staking.md#Staking-confiscateFrom-address-uint256-
[Staking-getStakeInfo-address-]: ../Staking.md#Staking-getStakeInfo-address-
[Staking-getLockInfo-address-enum-ContractName-]: ../Staking.md#Staking-getLockInfo-address-enum-ContractName-
[Superpro]: ../Superpro.md#Superpro
[Superpro-onlyIfInitializated--]: ../Superpro.md#Superpro-onlyIfInitializated--
[Superpro-owner-address]: ../Superpro.md#Superpro-owner-address
[Superpro-contracts-mapping-enum-ContractName----address-]: ../Superpro.md#Superpro-contracts-mapping-enum-ContractName----address-
[Superpro-params-mapping-enum-ParamName----uint256-]: ../Superpro.md#Superpro-params-mapping-enum-ParamName----uint256-
[Superpro-init-struct-SuperproConfig-]: ../Superpro.md#Superpro-init-struct-SuperproConfig-
[Superpro-getLatestSuperpro--]: ../Superpro.md#Superpro-getLatestSuperpro--
[Superpro-getNameByAddress-address-]: ../Superpro.md#Superpro-getNameByAddress-address-
[Superpro-setAddress-enum-ContractName-address-]: ../Superpro.md#Superpro-setAddress-enum-ContractName-address-
[Superpro-getAddress-enum-ContractName-]: ../Superpro.md#Superpro-getAddress-enum-ContractName-
[Superpro-setParam-enum-ParamName-uint256-]: ../Superpro.md#Superpro-setParam-enum-ParamName-uint256-
[Superpro-getParam-enum-ParamName-]: ../Superpro.md#Superpro-getParam-enum-ParamName-
[SuperproToken]: ../SuperproToken.md#SuperproToken
[SuperproToken-superpro-contract-ISuperpro]: ../SuperproToken.md#SuperproToken-superpro-contract-ISuperpro
[SuperproToken-constructor-address-uint256-string-string-]: ../SuperproToken.md#SuperproToken-constructor-address-uint256-string-string-
[SuperproToken-mint-address-uint256-]: ../SuperproToken.md#SuperproToken-mint-address-uint256-
[TeeOffer]: ../TeeOffer.md#TeeOffer
[TeeOffer-onlyProviderActionAccount--]: ../TeeOffer.md#TeeOffer-onlyProviderActionAccount--
[TeeOffer-onlyTeeOffersFactory--]: ../TeeOffer.md#TeeOffer-onlyTeeOffersFactory--
[TeeOffer-notBlocked--]: ../TeeOffer.md#TeeOffer-notBlocked--
[TeeOffer-provider-address]: ../TeeOffer.md#TeeOffer-provider-address
[TeeOffer-violationRate-uint8]: ../TeeOffer.md#TeeOffer-violationRate-uint8
[TeeOffer-disabledAfter-uint256]: ../TeeOffer.md#TeeOffer-disabledAfter-uint256
[TeeOffer-externalId-bytes32]: ../TeeOffer.md#TeeOffer-externalId-bytes32
[TeeOffer-info-struct-TeeOfferInfo]: ../TeeOffer.md#TeeOffer-info-struct-TeeOfferInfo
[TeeOffer-origins-struct-Origins]: ../TeeOffer.md#TeeOffer-origins-struct-Origins
[TeeOffer-superpro-contract-ISuperpro]: ../TeeOffer.md#TeeOffer-superpro-contract-ISuperpro
[TeeOffer-tcbLocked-mapping-address----struct-LockedTokens-]: ../TeeOffer.md#TeeOffer-tcbLocked-mapping-address----struct-LockedTokens-
[TeeOffer-tcbAddedTime-mapping-address----uint256-]: ../TeeOffer.md#TeeOffer-tcbAddedTime-mapping-address----uint256-
[TeeOffer-totalLocked-uint256]: ../TeeOffer.md#TeeOffer-totalLocked-uint256
[TeeOffer-tlbAddedTime-uint256]: ../TeeOffer.md#TeeOffer-tlbAddedTime-uint256
[TeeOffer-constructor-address-address-address-struct-TeeOfferInfo-bytes32-]: ../TeeOffer.md#TeeOffer-constructor-address-address-address-struct-TeeOfferInfo-bytes32-
[TeeOffer-getOrigins--]: ../TeeOffer.md#TeeOffer-getOrigins--
[TeeOffer-setName-string-]: ../TeeOffer.md#TeeOffer-setName-string-
[TeeOffer-setDescription-string-]: ../TeeOffer.md#TeeOffer-setDescription-string-
[TeeOffer-setKeys-string-]: ../TeeOffer.md#TeeOffer-setKeys-string-
[TeeOffer-enable--]: ../TeeOffer.md#TeeOffer-enable--
[TeeOffer-disable--]: ../TeeOffer.md#TeeOffer-disable--
[TeeOffer-addTlb-string-]: ../TeeOffer.md#TeeOffer-addTlb-string-
[TeeOffer-addTcb-address-]: ../TeeOffer.md#TeeOffer-addTcb-address-
[TeeOffer-blockOffer--]: ../TeeOffer.md#TeeOffer-blockOffer--
[TeeOffer-lock-address-uint256-]: ../TeeOffer.md#TeeOffer-lock-address-uint256-
[TeeOffer-unlock-address-uint256-]: ../TeeOffer.md#TeeOffer-unlock-address-uint256-
[TeeOffer-incrViolationRate--]: ../TeeOffer.md#TeeOffer-incrViolationRate--
[TeeOffer-getClosingPrice-uint256-uint256-]: ../TeeOffer.md#TeeOffer-getClosingPrice-uint256-uint256-
[TeeOffer-isCancelable--]: ../TeeOffer.md#TeeOffer-isCancelable--
[TeeOffer-isEnabled--]: ../TeeOffer.md#TeeOffer-isEnabled--
[TeeOffer-getLastTlbAddedTime--]: ../TeeOffer.md#TeeOffer-getLastTlbAddedTime--
[TeeOffer-getLastTcbAddedTime--]: ../TeeOffer.md#TeeOffer-getLastTcbAddedTime--
[TeeOffer-getDisabledAfter--]: ../TeeOffer.md#TeeOffer-getDisabledAfter--
[TeeOffer-hasTcb-address-]: ../TeeOffer.md#TeeOffer-hasTcb-address-
[TeeOffer-getLockInfo-address-]: ../TeeOffer.md#TeeOffer-getLockInfo-address-
[TeeOffer-getTotalLocked--]: ../TeeOffer.md#TeeOffer-getTotalLocked--
[TeeOffer-getViolationRate--]: ../TeeOffer.md#TeeOffer-getViolationRate--
[TeeOffer-getTcb--]: ../TeeOffer.md#TeeOffer-getTcb--
[TeeOffer-getTlb--]: ../TeeOffer.md#TeeOffer-getTlb--
[TeeOffer-get--]: ../TeeOffer.md#TeeOffer-get--
[TeeOffer-getInfo--]: ../TeeOffer.md#TeeOffer-getInfo--
[TeeOffer-getLastTcbReward--]: ../TeeOffer.md#TeeOffer-getLastTcbReward--
[TeeOffer-getProvider--]: ../TeeOffer.md#TeeOffer-getProvider--
[TeeOffer-getOfferType--]: ../TeeOffer.md#TeeOffer-getOfferType--
[TeeOffer-getOfferGroup--]: ../TeeOffer.md#TeeOffer-getOfferGroup--
[TeeOffer-getHoldDeposit--]: ../TeeOffer.md#TeeOffer-getHoldDeposit--
[TeeOffer-isAllowedFor-address-]: ../TeeOffer.md#TeeOffer-isAllowedFor-address-
[TeeOffer-isRestrictionsPermitThatOffer-address-]: ../TeeOffer.md#TeeOffer-isRestrictionsPermitThatOffer-address-
[TeeOffer-isRestrictedByOfferType-enum-OfferType-]: ../TeeOffer.md#TeeOffer-isRestrictedByOfferType-enum-OfferType-
[TeeOffersFactory]: ../TeeOffersFactory.md#TeeOffersFactory
[TeeOffersFactory-onlyConsensus--]: ../TeeOffersFactory.md#TeeOffersFactory-onlyConsensus--
[TeeOffersFactory-superpro-contract-ISuperpro]: ../TeeOffersFactory.md#TeeOffersFactory-superpro-contract-ISuperpro
[TeeOffersFactory-teeOffers-address--]: ../TeeOffersFactory.md#TeeOffersFactory-teeOffers-address--
[TeeOffersFactory-deviceIDs-mapping-bytes32----address-]: ../TeeOffersFactory.md#TeeOffersFactory-deviceIDs-mapping-bytes32----address-
[TeeOffersFactory-offersProvider-mapping-address----address-]: ../TeeOffersFactory.md#TeeOffersFactory-offersProvider-mapping-address----address-
[TeeOffersFactory-constructor-address-]: ../TeeOffersFactory.md#TeeOffersFactory-constructor-address-
[TeeOffersFactory-create-address-struct-TeeOfferInfo-bytes32-]: ../TeeOffersFactory.md#TeeOffersFactory-create-address-struct-TeeOfferInfo-bytes32-
[TeeOffersFactory-addTcb-address-]: ../TeeOffersFactory.md#TeeOffersFactory-addTcb-address-
[TeeOffersFactory-blockDevice-address-]: ../TeeOffersFactory.md#TeeOffersFactory-blockDevice-address-
[TeeOffersFactory-lockTcbReward-address-uint256-]: ../TeeOffersFactory.md#TeeOffersFactory-lockTcbReward-address-uint256-
[TeeOffersFactory-unlockTcbReward-address-uint256-]: ../TeeOffersFactory.md#TeeOffersFactory-unlockTcbReward-address-uint256-
[TeeOffersFactory-calcReparation-address-]: ../TeeOffersFactory.md#TeeOffersFactory-calcReparation-address-
[TeeOffersFactory-chargeReparation-address-uint256-]: ../TeeOffersFactory.md#TeeOffersFactory-chargeReparation-address-uint256-
[TeeOffersFactory-checkTcb-address-]: ../TeeOffersFactory.md#TeeOffersFactory-checkTcb-address-
[TeeOffersFactory-getOffersProvider-address-]: ../TeeOffersFactory.md#TeeOffersFactory-getOffersProvider-address-
[TeeOffersFactory-listAll--]: ../TeeOffersFactory.md#TeeOffersFactory-listAll--
[TeeOffersFactory-TeeOfferCreated-address-]: ../TeeOffersFactory.md#TeeOffersFactory-TeeOfferCreated-address-
[Voting]: ../Voting.md#Voting
[Voting-superpro-contract-ISuperpro]: ../Voting.md#Voting-superpro-contract-ISuperpro
[Voting-ballots-address--]: ../Voting.md#Voting-ballots-address--
[Voting-ballotsIndex-mapping-address----uint256-]: ../Voting.md#Voting-ballotsIndex-mapping-address----uint256-
[Voting-usersBallots-mapping-address----address---]: ../Voting.md#Voting-usersBallots-mapping-address----address---
[Voting-usersHoldedVotes-mapping-address----uint256-]: ../Voting.md#Voting-usersHoldedVotes-mapping-address----uint256-
[Voting-totalHoldedVotes-uint256]: ../Voting.md#Voting-totalHoldedVotes-uint256
[Voting-constructor-contract-ISuperpro-]: ../Voting.md#Voting-constructor-contract-ISuperpro-
[Voting-hold-uint256-]: ../Voting.md#Voting-hold-uint256-
[Voting-unhold-uint256-]: ../Voting.md#Voting-unhold-uint256-
[Voting-getUserHoldedVotesCount-address-]: ../Voting.md#Voting-getUserHoldedVotesCount-address-
[Voting-getTotalHoldedVotes--]: ../Voting.md#Voting-getTotalHoldedVotes--
[Voting-createBallotForAddressUpdate-enum-ContractName-address-]: ../Voting.md#Voting-createBallotForAddressUpdate-enum-ContractName-address-
[Voting-createBallotForParamUpdate-enum-ParamName-uint256-]: ../Voting.md#Voting-createBallotForParamUpdate-enum-ParamName-uint256-
[Voting-getUserBallots-address-]: ../Voting.md#Voting-getUserBallots-address-
[Voting-getBallots--]: ../Voting.md#Voting-getBallots--
[Voting-resolve-address-]: ../Voting.md#Voting-resolve-address-
[Voting-BallotCreated-address-]: ../Voting.md#Voting-BallotCreated-address-
[Consensus]: ../consensus/Consensus.md#Consensus
[Consensus-superpro-contract-ISuperpro]: ../consensus/Consensus.md#Consensus-superpro-contract-ISuperpro
[Consensus-initedBlocks-mapping-address----address-]: ../consensus/Consensus.md#Consensus-initedBlocks-mapping-address----address-
[Consensus-timeInited-mapping-address----uint256-]: ../consensus/Consensus.md#Consensus-timeInited-mapping-address----uint256-
[Consensus-constructor-address-]: ../consensus/Consensus.md#Consensus-constructor-address-
[Consensus-initTcb-address-]: ../consensus/Consensus.md#Consensus-initTcb-address-
[Consensus-claimRewards-address-]: ../consensus/Consensus.md#Consensus-claimRewards-address-
[Consensus-unlockRewards-address-uint256-]: ../consensus/Consensus.md#Consensus-unlockRewards-address-uint256-
[Consensus-addToSupply-address-]: ../consensus/Consensus.md#Consensus-addToSupply-address-
[Consensus-getInitedTcb-address-]: ../consensus/Consensus.md#Consensus-getInitedTcb-address-
[Consensus-getTimeInited-address-]: ../consensus/Consensus.md#Consensus-getTimeInited-address-
[Consensus-TCBInited-address-]: ../consensus/Consensus.md#Consensus-TCBInited-address-
[Epochs]: ../consensus/Epochs.md#Epochs
[Epochs-OnlyConsensus--]: ../consensus/Epochs.md#Epochs-OnlyConsensus--
[Epochs-superpro-contract-ISuperpro]: ../consensus/Epochs.md#Epochs-superpro-contract-ISuperpro
[Epochs-epochs-struct-Epoch--]: ../consensus/Epochs.md#Epochs-epochs-struct-Epoch--
[Epochs-constructor-address-]: ../consensus/Epochs.md#Epochs-constructor-address-
[Epochs-add-address-]: ../consensus/Epochs.md#Epochs-add-address-
[Epochs-makeReparation-address-uint256-]: ../consensus/Epochs.md#Epochs-makeReparation-address-uint256-
[Epochs-getReward-address-]: ../consensus/Epochs.md#Epochs-getReward-address-
[Epochs-getReparationBonus-address-]: ../consensus/Epochs.md#Epochs-getReparationBonus-address-
[Epochs-count--]: ../consensus/Epochs.md#Epochs-count--
[Epochs-getEpoch-uint256-]: ../consensus/Epochs.md#Epochs-getEpoch-uint256-
[LastBlocks]: ../consensus/LastBlocks.md#LastBlocks
[LastBlocks-OnlyConsensus--]: ../consensus/LastBlocks.md#LastBlocks-OnlyConsensus--
[LastBlocks-superpro-contract-ISuperpro]: ../consensus/LastBlocks.md#LastBlocks-superpro-contract-ISuperpro
[LastBlocks-tcbs-struct-AddressHashSet]: ../consensus/LastBlocks.md#LastBlocks-tcbs-struct-AddressHashSet
[LastBlocks-tee-mapping-address----address-]: ../consensus/LastBlocks.md#LastBlocks-tee-mapping-address----address-
[LastBlocks-tcbTime-mapping-address----uint256-]: ../consensus/LastBlocks.md#LastBlocks-tcbTime-mapping-address----uint256-
[LastBlocks-constructor-address-]: ../consensus/LastBlocks.md#LastBlocks-constructor-address-
[LastBlocks-count--]: ../consensus/LastBlocks.md#LastBlocks-count--
[LastBlocks-getCreatedTime-address-]: ../consensus/LastBlocks.md#LastBlocks-getCreatedTime-address-
[LastBlocks-add-address-]: ../consensus/LastBlocks.md#LastBlocks-add-address-
[LastBlocks-addMany-address---]: ../consensus/LastBlocks.md#LastBlocks-addMany-address---
[LastBlocks-remove-address-]: ../consensus/LastBlocks.md#LastBlocks-remove-address-
[LastBlocks-gc--]: ../consensus/LastBlocks.md#LastBlocks-gc--
[LastBlocks-getRandomL1-address-]: ../consensus/LastBlocks.md#LastBlocks-getRandomL1-address-
[LastBlocks-listAll--]: ../consensus/LastBlocks.md#LastBlocks-listAll--
[Suspicious]: ../consensus/Suspicious.md#Suspicious
[Suspicious-OnlyConsensus--]: ../consensus/Suspicious.md#Suspicious-OnlyConsensus--
[Suspicious-suspiciousTCB-struct-AddressHashSet]: ../consensus/Suspicious.md#Suspicious-suspiciousTCB-struct-AddressHashSet
[Suspicious-superpro-contract-ISuperpro]: ../consensus/Suspicious.md#Suspicious-superpro-contract-ISuperpro
[Suspicious-constructor-address-]: ../consensus/Suspicious.md#Suspicious-constructor-address-
[Suspicious-add-address-]: ../consensus/Suspicious.md#Suspicious-add-address-
[Suspicious-addMany-address---]: ../consensus/Suspicious.md#Suspicious-addMany-address---
[Suspicious-remove-address-]: ../consensus/Suspicious.md#Suspicious-remove-address-
[Suspicious-removeMany-address---]: ../consensus/Suspicious.md#Suspicious-removeMany-address---
[Suspicious-getRandomL2-address-uint16-]: ../consensus/Suspicious.md#Suspicious-getRandomL2-address-uint16-
[Suspicious-listAll--]: ../consensus/Suspicious.md#Suspicious-listAll--
[Suspicious-count--]: ../consensus/Suspicious.md#Suspicious-count--
[TCB]: ../consensus/TCB.md#TCB
[TCB-onlySuspicious--]: ../consensus/TCB.md#TCB-onlySuspicious--
[TCB-onlyLastBlocks--]: ../consensus/TCB.md#TCB-onlyLastBlocks--
[TCB-onlyConsensus--]: ../consensus/TCB.md#TCB-onlyConsensus--
[TCB-onlyEpochs--]: ../consensus/TCB.md#TCB-onlyEpochs--
[TCB-onlyActionAccount--]: ../consensus/TCB.md#TCB-onlyActionAccount--
[TCB-superpro-contract-ISuperpro]: ../consensus/TCB.md#TCB-superpro-contract-ISuperpro
[TCB-quote-string]: ../consensus/TCB.md#TCB-quote-string
[TCB-publicData-struct-TcbPublicData]: ../consensus/TCB.md#TCB-publicData-struct-TcbPublicData
[TCB-utilData-struct-TcbUtilityData]: ../consensus/TCB.md#TCB-utilData-struct-TcbUtilityData
[TCB-status-enum-TcbStatus]: ../consensus/TCB.md#TCB-status-enum-TcbStatus
[TCB-epoch-struct-TcbEpochInfo]: ../consensus/TCB.md#TCB-epoch-struct-TcbEpochInfo
[TCB-constructor-uint256-uint256-address-address-]: ../consensus/TCB.md#TCB-constructor-uint256-uint256-address-address-
[TCB-addToCheckL1-address---]: ../consensus/TCB.md#TCB-addToCheckL1-address---
[TCB-addToCheckL2-address---]: ../consensus/TCB.md#TCB-addToCheckL2-address---
[TCB-addMarks-enum-LType-uint8---]: ../consensus/TCB.md#TCB-addMarks-enum-LType-uint8---
[TCB-complete--]: ../consensus/TCB.md#TCB-complete--
[TCB-incrPositive--]: ../consensus/TCB.md#TCB-incrPositive--
[TCB-incrNegative--]: ../consensus/TCB.md#TCB-incrNegative--
[TCB-resetMarks--]: ../consensus/TCB.md#TCB-resetMarks--
[TCB-makeBun--]: ../consensus/TCB.md#TCB-makeBun--
[TCB-addData-uint256-string-bytes32-string-]: ../consensus/TCB.md#TCB-addData-uint256-string-bytes32-string-
[TCB-updPaidAmount-uint256-]: ../consensus/TCB.md#TCB-updPaidAmount-uint256-
[TCB-getTcbStatus--]: ../consensus/TCB.md#TCB-getTcbStatus--
[TCB-getPaidAmount--]: ../consensus/TCB.md#TCB-getPaidAmount--
[TCB-getPublicData--]: ../consensus/TCB.md#TCB-getPublicData--
[TCB-getQuote--]: ../consensus/TCB.md#TCB-getQuote--
[TCB-getOwnMarks--]: ../consensus/TCB.md#TCB-getOwnMarks--
[TCB-getBenchmark--]: ../consensus/TCB.md#TCB-getBenchmark--
[TCB-setEpoch-uint256-]: ../consensus/TCB.md#TCB-setEpoch-uint256-
[TCB-setEpochReparationMark-bool-]: ../consensus/TCB.md#TCB-setEpochReparationMark-bool-
[TCB-needL1toCompleted-uint256-]: ../consensus/TCB.md#TCB-needL1toCompleted-uint256-
[TCB-needL2toCompleted-uint256-]: ../consensus/TCB.md#TCB-needL2toCompleted-uint256-
[TCB-getL1Marks--]: ../consensus/TCB.md#TCB-getL1Marks--
[TCB-getL2Marks--]: ../consensus/TCB.md#TCB-getL2Marks--
[TCB-getL1--]: ../consensus/TCB.md#TCB-getL1--
[TCB-getL2--]: ../consensus/TCB.md#TCB-getL2--
[TCB-getEpochInfo--]: ../consensus/TCB.md#TCB-getEpochInfo--
[IConsensus]: IConsensus.md#IConsensus
[IConsensus-claimRewards-address-]: IConsensus.md#IConsensus-claimRewards-address-
[IConsensus-addToSupply-address-]: IConsensus.md#IConsensus-addToSupply-address-
[IConsensus-unlockRewards-address-uint256-]: IConsensus.md#IConsensus-unlockRewards-address-uint256-
[IConsensus-initTcb-address-]: IConsensus.md#IConsensus-initTcb-address-
[IEpochs]: IEpochs.md#IEpochs
[IEpochs-add-address-]: IEpochs.md#IEpochs-add-address-
[IEpochs-makeReparation-address-uint256-]: IEpochs.md#IEpochs-makeReparation-address-uint256-
[IEpochs-getReward-address-]: IEpochs.md#IEpochs-getReward-address-
[IEpochs-getReparationBonus-address-]: IEpochs.md#IEpochs-getReparationBonus-address-
[IEpochs-getEpoch-uint256-]: IEpochs.md#IEpochs-getEpoch-uint256-
[ILastBlocks]: ILastBlocks.md#ILastBlocks
[ILastBlocks-getCreatedTime-address-]: ILastBlocks.md#ILastBlocks-getCreatedTime-address-
[ILastBlocks-count--]: ILastBlocks.md#ILastBlocks-count--
[ILastBlocks-addMany-address---]: ILastBlocks.md#ILastBlocks-addMany-address---
[ILastBlocks-add-address-]: ILastBlocks.md#ILastBlocks-add-address-
[ILastBlocks-remove-address-]: ILastBlocks.md#ILastBlocks-remove-address-
[IOffer]: IOffer.md#IOffer
[IOffer-getHoldDeposit--]: IOffer.md#IOffer-getHoldDeposit--
[IOffer-isAllowedFor-address-]: IOffer.md#IOffer-isAllowedFor-address-
[IOffer-isRestrictionsPermitThatOffer-address-]: IOffer.md#IOffer-isRestrictionsPermitThatOffer-address-
[IOffer-isRestrictedByOfferType-enum-OfferType-]: IOffer.md#IOffer-isRestrictedByOfferType-enum-OfferType-
[IOffer-getClosingPrice-uint256-uint256-]: IOffer.md#IOffer-getClosingPrice-uint256-uint256-
[IOffer-getOfferType--]: IOffer.md#IOffer-getOfferType--
[IOffer-getOfferGroup--]: IOffer.md#IOffer-getOfferGroup--
[IOffer-getProvider--]: IOffer.md#IOffer-getProvider--
[IOffer-getDisabledAfter--]: IOffer.md#IOffer-getDisabledAfter--
[IOffer-isCancelable--]: IOffer.md#IOffer-isCancelable--
[IOffer-isEnabled--]: IOffer.md#IOffer-isEnabled--
[IOffersFactory]: IOffersFactory.md#IOffersFactory
[IOffersFactory-getOffersProvider-address-]: IOffersFactory.md#IOffersFactory-getOffersProvider-address-
[IOrder]: #IOrder
[IOrder-updateStatus-enum-OrderStatus-uint256-]: #IOrder-updateStatus-enum-OrderStatus-uint256-
[IOrder-complete-enum-OrderStatus-string-string-]: #IOrder-complete-enum-OrderStatus-string-string-
[IOrder-isCompleted--]: #IOrder-isCompleted--
[IOrder-getConsumer--]: #IOrder-getConsumer--
[IOrder-getParentOrder--]: #IOrder-getParentOrder--
[IOrder-getOrderPrice--]: #IOrder-getOrderPrice--
[IOrder-getOrderInfo--]: #IOrder-getOrderInfo--
[IOrder-getOrderResult--]: #IOrder-getOrderResult--
[IOrder-updateStatusFromSuborders-address-enum-OrderStatus-]: #IOrder-updateStatusFromSuborders-address-enum-OrderStatus-
[IOrdersFactory]: IOrdersFactory.md#IOrdersFactory
[IOrdersFactory-addSubOrder-address-uint256-struct-OrderInfo-bool-bytes32-]: IOrdersFactory.md#IOrdersFactory-addSubOrder-address-uint256-struct-OrderInfo-bool-bytes32-
[IOrdersFactory-onOrderCompleted-address-bool-]: IOrdersFactory.md#IOrdersFactory-onOrderCompleted-address-bool-
[IOrdersFactory-transferProfit-uint256-address-]: IOrdersFactory.md#IOrdersFactory-transferProfit-uint256-address-
[IOrdersFactory-transferChange-uint256-]: IOrdersFactory.md#IOrdersFactory-transferChange-uint256-
[IOrdersFactory-isValidOrder-address-]: IOrdersFactory.md#IOrdersFactory-isValidOrder-address-
[IOrdersFactory-getOrderBlockingSubordersCount-address-]: IOrdersFactory.md#IOrdersFactory-getOrderBlockingSubordersCount-address-
[IProvider]: IProvider.md#IProvider
[IProvider-incrViolationRate--]: IProvider.md#IProvider-incrViolationRate--
[IProvider-setOfferState-bool-uint256-]: IProvider.md#IProvider-setOfferState-bool-uint256-
[IProvider-addOffer-address-]: IProvider.md#IProvider-addOffer-address-
[IProvider-gc--]: IProvider.md#IProvider-gc--
[IProvider-getAuth--]: IProvider.md#IProvider-getAuth--
[IProvider-getTokenReceiver--]: IProvider.md#IProvider-getTokenReceiver--
[IProvider-getActionAccount--]: IProvider.md#IProvider-getActionAccount--
[IProvider-getInfo--]: IProvider.md#IProvider-getInfo--
[IProvider-getViolationRate--]: IProvider.md#IProvider-getViolationRate--
[IProvider-getTargetSecDepo-uint256-]: IProvider.md#IProvider-getTargetSecDepo-uint256-
[IProvider-hasEnabledOffers--]: IProvider.md#IProvider-hasEnabledOffers--
[IProviderRegistry]: IProviderRegistry.md#IProviderRegistry
[IProviderRegistry-checkRegistration-address-]: IProviderRegistry.md#IProviderRegistry-checkRegistration-address-
[IProviderRegistry-getSecurityDeposit-address-]: IProviderRegistry.md#IProviderRegistry-getSecurityDeposit-address-
[IProviderRegistry-get-address-]: IProviderRegistry.md#IProviderRegistry-get-address-
[IProviderRegistry-hasEnoughSecurityDeposit-address-]: IProviderRegistry.md#IProviderRegistry-hasEnoughSecurityDeposit-address-
[IProviderRegistry-chargePenalty-address-uint256-]: IProviderRegistry.md#IProviderRegistry-chargePenalty-address-uint256-
[IRatings]: IRatings.md#IRatings
[IStaking]: IStaking.md#IStaking
[IStaking-stake-uint256-]: IStaking.md#IStaking-stake-uint256-
[IStaking-stakeFor-address-uint256-]: IStaking.md#IStaking-stakeFor-address-uint256-
[IStaking-unstake-uint256-]: IStaking.md#IStaking-unstake-uint256-
[IStaking-lock-address-uint256-uint256-]: IStaking.md#IStaking-lock-address-uint256-uint256-
[IStaking-unlock-address-uint256-]: IStaking.md#IStaking-unlock-address-uint256-
[IStaking-confiscateFrom-address-uint256-]: IStaking.md#IStaking-confiscateFrom-address-uint256-
[IStaking-getStakeInfo-address-]: IStaking.md#IStaking-getStakeInfo-address-
[IStaking-getLockInfo-address-enum-ContractName-]: IStaking.md#IStaking-getLockInfo-address-enum-ContractName-
[ISuperpro]: ISuperpro.md#ISuperpro
[ISuperpro-getLatestSuperpro--]: ISuperpro.md#ISuperpro-getLatestSuperpro--
[ISuperpro-getNameByAddress-address-]: ISuperpro.md#ISuperpro-getNameByAddress-address-
[ISuperpro-getAddress-enum-ContractName-]: ISuperpro.md#ISuperpro-getAddress-enum-ContractName-
[ISuperpro-setAddress-enum-ContractName-address-]: ISuperpro.md#ISuperpro-setAddress-enum-ContractName-address-
[ISuperpro-setParam-enum-ParamName-uint256-]: ISuperpro.md#ISuperpro-setParam-enum-ParamName-uint256-
[ISuperpro-getParam-enum-ParamName-]: ISuperpro.md#ISuperpro-getParam-enum-ParamName-
[ISuspicious]: ISuspicious.md#ISuspicious
[ISuspicious-getRandomL2-address-uint16-]: ISuspicious.md#ISuspicious-getRandomL2-address-uint16-
[ISuspicious-add-address-]: ISuspicious.md#ISuspicious-add-address-
[ISuspicious-addMany-address---]: ISuspicious.md#ISuspicious-addMany-address---
[ISuspicious-remove-address-]: ISuspicious.md#ISuspicious-remove-address-
[ISuspicious-removeMany-address---]: ISuspicious.md#ISuspicious-removeMany-address---
[ISuspicious-listAll--]: ISuspicious.md#ISuspicious-listAll--
[ISuspicious-count--]: ISuspicious.md#ISuspicious-count--
[ITCB]: ITCB.md#ITCB
[ITCB-addData-uint256-string-bytes32-string-]: ITCB.md#ITCB-addData-uint256-string-bytes32-string-
[ITCB-addToCheckL1-address---]: ITCB.md#ITCB-addToCheckL1-address---
[ITCB-addToCheckL2-address---]: ITCB.md#ITCB-addToCheckL2-address---
[ITCB-addMarks-enum-LType-uint8---]: ITCB.md#ITCB-addMarks-enum-LType-uint8---
[ITCB-complete--]: ITCB.md#ITCB-complete--
[ITCB-incrNegative--]: ITCB.md#ITCB-incrNegative--
[ITCB-incrPositive--]: ITCB.md#ITCB-incrPositive--
[ITCB-resetMarks--]: ITCB.md#ITCB-resetMarks--
[ITCB-updPaidAmount-uint256-]: ITCB.md#ITCB-updPaidAmount-uint256-
[ITCB-makeBun--]: ITCB.md#ITCB-makeBun--
[ITCB-getTcbStatus--]: ITCB.md#ITCB-getTcbStatus--
[ITCB-getPaidAmount--]: ITCB.md#ITCB-getPaidAmount--
[ITCB-getOwnMarks--]: ITCB.md#ITCB-getOwnMarks--
[ITCB-needL1toCompleted-uint256-]: ITCB.md#ITCB-needL1toCompleted-uint256-
[ITCB-needL2toCompleted-uint256-]: ITCB.md#ITCB-needL2toCompleted-uint256-
[ITCB-getPublicData--]: ITCB.md#ITCB-getPublicData--
[ITCB-getBenchmark--]: ITCB.md#ITCB-getBenchmark--
[ITCB-setEpoch-uint256-]: ITCB.md#ITCB-setEpoch-uint256-
[ITCB-setEpochReparationMark-bool-]: ITCB.md#ITCB-setEpochReparationMark-bool-
[ITCB-getEpochInfo--]: ITCB.md#ITCB-getEpochInfo--
[ITCB-getL2Marks--]: ITCB.md#ITCB-getL2Marks--
[ITCB-getL1Marks--]: ITCB.md#ITCB-getL1Marks--
[ITCB-getL1--]: ITCB.md#ITCB-getL1--
[ITCB-getL2--]: ITCB.md#ITCB-getL2--
[ITeeOffer]: ITeeOffer.md#ITeeOffer
[ITeeOffer-addTcb-address-]: ITeeOffer.md#ITeeOffer-addTcb-address-
[ITeeOffer-lock-address-uint256-]: ITeeOffer.md#ITeeOffer-lock-address-uint256-
[ITeeOffer-unlock-address-uint256-]: ITeeOffer.md#ITeeOffer-unlock-address-uint256-
[ITeeOffer-blockOffer--]: ITeeOffer.md#ITeeOffer-blockOffer--
[ITeeOffer-incrViolationRate--]: ITeeOffer.md#ITeeOffer-incrViolationRate--
[ITeeOffer-enable--]: ITeeOffer.md#ITeeOffer-enable--
[ITeeOffer-disable--]: ITeeOffer.md#ITeeOffer-disable--
[ITeeOffer-get--]: ITeeOffer.md#ITeeOffer-get--
[ITeeOffer-getInfo--]: ITeeOffer.md#ITeeOffer-getInfo--
[ITeeOffer-getLastTcbReward--]: ITeeOffer.md#ITeeOffer-getLastTcbReward--
[ITeeOffer-getTcb--]: ITeeOffer.md#ITeeOffer-getTcb--
[ITeeOffer-hasTcb-address-]: ITeeOffer.md#ITeeOffer-hasTcb-address-
[ITeeOffer-getTotalLocked--]: ITeeOffer.md#ITeeOffer-getTotalLocked--
[ITeeOffer-getViolationRate--]: ITeeOffer.md#ITeeOffer-getViolationRate--
[ITeeOffer-getLockInfo-address-]: ITeeOffer.md#ITeeOffer-getLockInfo-address-
[ITeeOffersFactory]: ITeeOffersFactory.md#ITeeOffersFactory
[ITeeOffersFactory-listAll--]: ITeeOffersFactory.md#ITeeOffersFactory-listAll--
[ITeeOffersFactory-calcReparation-address-]: ITeeOffersFactory.md#ITeeOffersFactory-calcReparation-address-
[ITeeOffersFactory-create-address-struct-TeeOfferInfo-bytes32-]: ITeeOffersFactory.md#ITeeOffersFactory-create-address-struct-TeeOfferInfo-bytes32-
[ITeeOffersFactory-checkTcb-address-]: ITeeOffersFactory.md#ITeeOffersFactory-checkTcb-address-
[ITeeOffersFactory-chargeReparation-address-uint256-]: ITeeOffersFactory.md#ITeeOffersFactory-chargeReparation-address-uint256-
[ITeeOffersFactory-unlockTcbReward-address-uint256-]: ITeeOffersFactory.md#ITeeOffersFactory-unlockTcbReward-address-uint256-
[ITeeOffersFactory-lockTcbReward-address-uint256-]: ITeeOffersFactory.md#ITeeOffersFactory-lockTcbReward-address-uint256-
[ITeeOffersFactory-blockDevice-address-]: ITeeOffersFactory.md#ITeeOffersFactory-blockDevice-address-
[ITeeOffersFactory-addTcb-address-]: ITeeOffersFactory.md#ITeeOffersFactory-addTcb-address-
[IValueOffer]: IValueOffer.md#IValueOffer
[IValueOffer-getProviderAuthority--]: IValueOffer.md#IValueOffer-getProviderAuthority--
[IValueOffer-getInfo--]: IValueOffer.md#IValueOffer-getInfo--
[IValueOffer-setName-string-]: IValueOffer.md#IValueOffer-setName-string-
[IValueOffer-setDescription-string-]: IValueOffer.md#IValueOffer-setDescription-string-
[IValueOffer-enable--]: IValueOffer.md#IValueOffer-enable--
[IValueOffer-disable--]: IValueOffer.md#IValueOffer-disable--
[IValueOffersFactory]: IValueOffersFactory.md#IValueOffersFactory
[IValueOffersFactory-create-address-struct-OfferInfo-bytes32-]: IValueOffersFactory.md#IValueOffersFactory-create-address-struct-OfferInfo-bytes32-
[IValueOffersFactory-getOffers--]: IValueOffersFactory.md#IValueOffersFactory-getOffers--
[IVoting]: IVoting.md#IVoting
[IVoting-hold-uint256-]: IVoting.md#IVoting-hold-uint256-
[IVoting-unhold-uint256-]: IVoting.md#IVoting-unhold-uint256-
[IVoting-getUserHoldedVotesCount-address-]: IVoting.md#IVoting-getUserHoldedVotesCount-address-
[IVoting-getTotalHoldedVotes--]: IVoting.md#IVoting-getTotalHoldedVotes--
[IVoting-createBallotForAddressUpdate-enum-ContractName-address-]: IVoting.md#IVoting-createBallotForAddressUpdate-enum-ContractName-address-
[IVoting-createBallotForParamUpdate-enum-ParamName-uint256-]: IVoting.md#IVoting-createBallotForParamUpdate-enum-ParamName-uint256-
[IVoting-getUserBallots-address-]: IVoting.md#IVoting-getUserBallots-address-
[IVoting-getBallots--]: IVoting.md#IVoting-getBallots--
[IVoting-resolve-address-]: IVoting.md#IVoting-resolve-address-
[Config]: ../libs/Config.md#Config
[Config-getUpdParam-contract-ISuperpro-enum-ParamName-]: ../libs/Config.md#Config-getUpdParam-contract-ISuperpro-enum-ParamName-
[Config-getOrdersFactory-contract-ISuperpro-]: ../libs/Config.md#Config-getOrdersFactory-contract-ISuperpro-
[Config-getTeeFactory-contract-ISuperpro-]: ../libs/Config.md#Config-getTeeFactory-contract-ISuperpro-
[Config-getValueFactory-contract-ISuperpro-]: ../libs/Config.md#Config-getValueFactory-contract-ISuperpro-
[Config-getProviders-contract-ISuperpro-]: ../libs/Config.md#Config-getProviders-contract-ISuperpro-
[Config-getStaking-contract-ISuperpro-]: ../libs/Config.md#Config-getStaking-contract-ISuperpro-
[Config-getToken-contract-ISuperpro-]: ../libs/Config.md#Config-getToken-contract-ISuperpro-
[Config-getTokenFull-contract-ISuperpro-]: ../libs/Config.md#Config-getTokenFull-contract-ISuperpro-
[Config-getEpochs-contract-ISuperpro-]: ../libs/Config.md#Config-getEpochs-contract-ISuperpro-
[Config-getLastBlocks-contract-ISuperpro-]: ../libs/Config.md#Config-getLastBlocks-contract-ISuperpro-
[Config-getSuspicious-contract-ISuperpro-]: ../libs/Config.md#Config-getSuspicious-contract-ISuperpro-
[Config-getConsensus-contract-ISuperpro-]: ../libs/Config.md#Config-getConsensus-contract-ISuperpro-
[LockHelper]: ../libs/LockHelper.md#LockHelper
[LockHelper-lockFor-contract-ISuperpro-address-uint256-uint256-]: ../libs/LockHelper.md#LockHelper-lockFor-contract-ISuperpro-address-uint256-uint256-
[OriginsHelper]: ../libs/OriginsHelper.md#OriginsHelper
[OriginsHelper-init-struct-Origins-address-]: ../libs/OriginsHelper.md#OriginsHelper-init-struct-Origins-address-
[OriginsHelper-update-struct-Origins-address-]: ../libs/OriginsHelper.md#OriginsHelper-update-struct-Origins-address-
[ProviderHelper]: ../libs/ProviderHelper.md#ProviderHelper
[ProviderHelper-clear-struct-AddressHashSet-]: ../libs/ProviderHelper.md#ProviderHelper-clear-struct-AddressHashSet-
[ProviderHelper-updDisableAfter-address---]: ../libs/ProviderHelper.md#ProviderHelper-updDisableAfter-address---
[ProviderHelper-offerTumbler-struct-ProviderOffers-bool-bool-]: ../libs/ProviderHelper.md#ProviderHelper-offerTumbler-struct-ProviderOffers-bool-bool-
[ProviderHelper-addDelayDisable-struct-ProviderOffers-bool-address-]: ../libs/ProviderHelper.md#ProviderHelper-addDelayDisable-struct-ProviderOffers-bool-address-
[ProviderHelper-addOffer-struct-ProviderOffers-bool-address-]: ../libs/ProviderHelper.md#ProviderHelper-addOffer-struct-ProviderOffers-bool-address-
[Random]: ../libs/Random.md#Random
[Random-getRandom-struct-AddressHashSet-uint256-address-]: ../libs/Random.md#Random-getRandom-struct-AddressHashSet-uint256-address-
[Set]: ../libs/Set.md#Set
[Set-isEmpty-struct-AddressHashSet-]: ../libs/Set.md#Set-isEmpty-struct-AddressHashSet-
[Set-add-struct-AddressHashSet-address-]: ../libs/Set.md#Set-add-struct-AddressHashSet-address-
[Set-isExists-struct-AddressHashSet-address-]: ../libs/Set.md#Set-isExists-struct-AddressHashSet-address-
[Set-remove-struct-AddressHashSet-address-]: ../libs/Set.md#Set-remove-struct-AddressHashSet-address-
[TcbHelper]: ../libs/TcbHelper.md#TcbHelper
[TcbHelper-addMarks-struct-TcbUtilityData-enum-LType-uint8---]: ../libs/TcbHelper.md#TcbHelper-addMarks-struct-TcbUtilityData-enum-LType-uint8---
[TcbHelper-addToCheck-struct-TcbUtilityData-enum-LType-address---]: ../libs/TcbHelper.md#TcbHelper-addToCheck-struct-TcbUtilityData-enum-LType-address---

## `IOrder`



## Functions
### updateStatus
```solidity
  function updateStatus(
  ) external
```




### complete
```solidity
  function complete(
  ) external
```




### isCompleted
```solidity
  function isCompleted(
  ) external returns (bool)
```




### getConsumer
```solidity
  function getConsumer(
  ) external returns (address)
```




### getParentOrder
```solidity
  function getParentOrder(
  ) external returns (address)
```




### getOrderPrice
```solidity
  function getOrderPrice(
  ) external returns (uint256)
```




### getOrderInfo
```solidity
  function getOrderInfo(
  ) external returns (struct OrderInfo)
```




### getOrderResult
```solidity
  function getOrderResult(
  ) external returns (struct OrderResult)
```




### updateStatusFromSuborders
```solidity
  function updateStatusFromSuborders(
  ) external
```



