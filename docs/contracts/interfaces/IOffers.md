---
id: "IOffers"
title: "IOffers"
sidebar_label: "IOffers"
sidebar_position: 0
---
[AppFacet]: ../AppFacet.md#AppFacet
[AppFacet-onlyApp--]: ../AppFacet.md#AppFacet-onlyApp--
[AppFacet-getSuperpro--]: ../AppFacet.md#AppFacet-getSuperpro--
[AppFacet-getToken--]: ../AppFacet.md#AppFacet-getToken--
[AppFacet-getStaking--]: ../AppFacet.md#AppFacet-getStaking--
[AppFacet-getProviders--]: ../AppFacet.md#AppFacet-getProviders--
[AppFacet-getProvidersOffers--]: ../AppFacet.md#AppFacet-getProvidersOffers--
[AppFacet-getOffers--]: ../AppFacet.md#AppFacet-getOffers--
[AppFacet-getOrders--]: ../AppFacet.md#AppFacet-getOrders--
[Marks]: ../Marks.md#Marks
[Marks-getProviderMarks-address-]: ../Marks.md#Marks-getProviderMarks-address-
[Marks-getOrderMark-uint256-]: ../Marks.md#Marks-getOrderMark-uint256-
[Marks-setOrderMark-uint256-enum-Mark-]: ../Marks.md#Marks-setOrderMark-uint256-enum-Mark-
[Offers]: ../Offers.md#Offers
[Offers-onlyProviderActionAccount-uint256-]: ../Offers.md#Offers-onlyProviderActionAccount-uint256-
[Offers-notBlocked-uint256-]: ../Offers.md#Offers-notBlocked-uint256-
[Offers-isOfferEnabled-uint256-]: ../Offers.md#Offers-isOfferEnabled-uint256-
[Offers-isOfferCancelable-uint256-]: ../Offers.md#Offers-isOfferCancelable-uint256-
[Offers-isOfferAllowedForConsumer-uint256-address-]: ../Offers.md#Offers-isOfferAllowedForConsumer-uint256-address-
[Offers-isOfferRestrictionsPermitOtherOffer-uint256-uint256-]: ../Offers.md#Offers-isOfferRestrictionsPermitOtherOffer-uint256-uint256-
[Offers-isOfferRestrictedByOfferType-uint256-enum-OfferType-]: ../Offers.md#Offers-isOfferRestrictedByOfferType-uint256-enum-OfferType-
[Offers-getOffersCount--]: ../Offers.md#Offers-getOffersCount--
[Offers-getOfferType-uint256-]: ../Offers.md#Offers-getOfferType-uint256-
[Offers-getOfferGroup-uint256-]: ../Offers.md#Offers-getOfferGroup-uint256-
[Offers-getOfferOrigins-uint256-]: ../Offers.md#Offers-getOfferOrigins-uint256-
[Offers-getOfferProviderAuthority-uint256-]: ../Offers.md#Offers-getOfferProviderAuthority-uint256-
[Offers-getOfferDisabledAfter-uint256-]: ../Offers.md#Offers-getOfferDisabledAfter-uint256-
[Offers-getOfferHoldDeposit-uint256-]: ../Offers.md#Offers-getOfferHoldDeposit-uint256-
[Offers-getOfferClosingPrice-uint256-uint256-uint256-]: ../Offers.md#Offers-getOfferClosingPrice-uint256-uint256-uint256-
[Offers-getTeeOfferLastTcbReward-uint256-]: ../Offers.md#Offers-getTeeOfferLastTcbReward-uint256-
[Offers-getTeeOfferViolationRate-uint256-]: ../Offers.md#Offers-getTeeOfferViolationRate-uint256-
[Offers-getValueOffer-uint256-]: ../Offers.md#Offers-getValueOffer-uint256-
[Offers-getTeeOffer-uint256-]: ../Offers.md#Offers-getTeeOffer-uint256-
[Offers-setOfferName-uint256-string-]: ../Offers.md#Offers-setOfferName-uint256-string-
[Offers-setOfferPublicKey-uint256-string-]: ../Offers.md#Offers-setOfferPublicKey-uint256-string-
[Offers-setOfferDescription-uint256-string-]: ../Offers.md#Offers-setOfferDescription-uint256-string-
[Offers-setTeeOfferTlb-uint256-string-]: ../Offers.md#Offers-setTeeOfferTlb-uint256-string-
[Offers-createValueOffer-address-struct-ValueOfferInfo-bytes32-]: ../Offers.md#Offers-createValueOffer-address-struct-ValueOfferInfo-bytes32-
[Offers-createTeeOffer-address-struct-TeeOfferInfo-bytes32-]: ../Offers.md#Offers-createTeeOffer-address-struct-TeeOfferInfo-bytes32-
[Offers-enableOffer-uint256-]: ../Offers.md#Offers-enableOffer-uint256-
[Offers-disableOffer-uint256-]: ../Offers.md#Offers-disableOffer-uint256-
[Offers-incrTeeOfferViolationRate-uint256-]: ../Offers.md#Offers-incrTeeOfferViolationRate-uint256-
[Offers-OfferCreated-address-bytes32-uint256-]: ../Offers.md#Offers-OfferCreated-address-bytes32-uint256-
[Offers-TeeOfferCreated-address-bytes32-uint256-]: ../Offers.md#Offers-TeeOfferCreated-address-bytes32-uint256-
[Offers-OfferEnabled-address-uint256-enum-OfferType-]: ../Offers.md#Offers-OfferEnabled-address-uint256-enum-OfferType-
[Offers-OfferDisabled-address-uint256-enum-OfferType-]: ../Offers.md#Offers-OfferDisabled-address-uint256-enum-OfferType-
[Offers-TeeOfferViolationRateChanged-address-uint256-uint256-]: ../Offers.md#Offers-TeeOfferViolationRateChanged-address-uint256-uint256-
[Orders]: ../Orders.md#Orders
[Orders-onlyProviderActionAccount-uint256-]: ../Orders.md#Orders-onlyProviderActionAccount-uint256-
[Orders-onlyConsumer-uint256-]: ../Orders.md#Orders-onlyConsumer-uint256-
[Orders-isOrderValid-uint256-]: ../Orders.md#Orders-isOrderValid-uint256-
[Orders-isOrderStarted-uint256-]: ../Orders.md#Orders-isOrderStarted-uint256-
[Orders-isOrderCompleted-uint256-]: ../Orders.md#Orders-isOrderCompleted-uint256-
[Orders-getOrdersCount--]: ../Orders.md#Orders-getOrdersCount--
[Orders-getOrderHoldDeposit-uint256-]: ../Orders.md#Orders-getOrderHoldDeposit-uint256-
[Orders-getOrderPrice-uint256-]: ../Orders.md#Orders-getOrderPrice-uint256-
[Orders-getOrderOrigins-uint256-]: ../Orders.md#Orders-getOrderOrigins-uint256-
[Orders-getOrderProfitWithdrawn-uint256-]: ../Orders.md#Orders-getOrderProfitWithdrawn-uint256-
[Orders-getOrderChangeWithdrawn-uint256-]: ../Orders.md#Orders-getOrderChangeWithdrawn-uint256-
[Orders-getOrderParentOrder-uint256-]: ../Orders.md#Orders-getOrderParentOrder-uint256-
[Orders-getOrder-uint256-]: ../Orders.md#Orders-getOrder-uint256-
[Orders-getOrderSubOrders-uint256-]: ../Orders.md#Orders-getOrderSubOrders-uint256-
[Orders-getAwaitingPayment-uint256-]: ../Orders.md#Orders-getAwaitingPayment-uint256-
[Orders-getDepositSpent-uint256-]: ../Orders.md#Orders-getDepositSpent-uint256-
[Orders-setAwaitingPayment-uint256-bool-]: ../Orders.md#Orders-setAwaitingPayment-uint256-bool-
[Orders-setDepositSpent-uint256-uint256-]: ../Orders.md#Orders-setDepositSpent-uint256-uint256-
[Orders-createOrder-struct-OrderInfo-uint256-bool-bytes32-]: ../Orders.md#Orders-createOrder-struct-OrderInfo-uint256-bool-bytes32-
[Orders-startOrder-uint256-]: ../Orders.md#Orders-startOrder-uint256-
[Orders-completeOrder-uint256-enum-OrderStatus-string-]: ../Orders.md#Orders-completeOrder-uint256-enum-OrderStatus-string-
[Orders-updateOrderPrice-uint256-uint256-]: ../Orders.md#Orders-updateOrderPrice-uint256-uint256-
[Orders-processOrder-uint256-]: ../Orders.md#Orders-processOrder-uint256-
[Orders-updateOrderResult-uint256-string-]: ../Orders.md#Orders-updateOrderResult-uint256-string-
[Orders-cancelOrder-uint256-]: ../Orders.md#Orders-cancelOrder-uint256-
[Orders-createSubOrder-uint256-struct-OrderInfo-struct-SubOrderParams-]: ../Orders.md#Orders-createSubOrder-uint256-struct-OrderInfo-struct-SubOrderParams-
[Orders-refillOrder-uint256-uint256-]: ../Orders.md#Orders-refillOrder-uint256-uint256-
[Orders-withdrawChange-uint256-]: ../Orders.md#Orders-withdrawChange-uint256-
[Orders-withdrawProfit-uint256-]: ../Orders.md#Orders-withdrawProfit-uint256-
[Orders-OrderCreated-address-bytes32-uint256-uint256-]: ../Orders.md#Orders-OrderCreated-address-bytes32-uint256-uint256-
[Orders-OrderStatusUpdated-uint256-enum-OrderStatus-]: ../Orders.md#Orders-OrderStatusUpdated-uint256-enum-OrderStatus-
[Orders-OrderPriceUpdated-uint256-uint256-]: ../Orders.md#Orders-OrderPriceUpdated-uint256-uint256-
[Orders-SubOrderCreated-address-bytes32-uint256-uint256-uint256-]: ../Orders.md#Orders-SubOrderCreated-address-bytes32-uint256-uint256-uint256-
[Orders-OrderStarted-address-uint256-]: ../Orders.md#Orders-OrderStarted-address-uint256-
[Orders-OrderDepositRefilled-address-uint256-uint256-]: ../Orders.md#Orders-OrderDepositRefilled-address-uint256-uint256-
[Orders-OrderChangedWithdrawn-address-uint256-uint256-]: ../Orders.md#Orders-OrderChangedWithdrawn-address-uint256-uint256-
[Orders-OrderProfitWithdrawn-address-uint256-uint256-]: ../Orders.md#Orders-OrderProfitWithdrawn-address-uint256-uint256-
[Orders-OrderAwaitingPaymentChanged-address-uint256-bool-]: ../Orders.md#Orders-OrderAwaitingPaymentChanged-address-uint256-bool-
[Orders-OrderEncryptedResultUpdated-address-uint256-string-]: ../Orders.md#Orders-OrderEncryptedResultUpdated-address-uint256-string-
[Orders-OrderDepositSpentChanged-address-uint256-uint256-]: ../Orders.md#Orders-OrderDepositSpentChanged-address-uint256-uint256-
[Providers]: ../Providers.md#Providers
[Providers-onlyRegistered--]: ../Providers.md#Providers-onlyRegistered--
[Providers-onlyNotRegistered--]: ../Providers.md#Providers-onlyNotRegistered--
[Providers-_providerPointer-address-]: ../Providers.md#Providers-_providerPointer-address-
[Providers-isProviderRegistered-address-]: ../Providers.md#Providers-isProviderRegistered-address-
[Providers-getProvidersCount--]: ../Providers.md#Providers-getProvidersCount--
[Providers-getProviderActionAccount-address-]: ../Providers.md#Providers-getProviderActionAccount-address-
[Providers-getProviderTokenReceiver-address-]: ../Providers.md#Providers-getProviderTokenReceiver-address-
[Providers-getProviderInfo-address-]: ../Providers.md#Providers-getProviderInfo-address-
[Providers-getProviderOrigins-address-]: ../Providers.md#Providers-getProviderOrigins-address-
[Providers-getProviderViolationRate-address-]: ../Providers.md#Providers-getProviderViolationRate-address-
[Providers-getProviderSecurityDeposit-address-]: ../Providers.md#Providers-getProviderSecurityDeposit-address-
[Providers-getProvidersAuths--]: ../Providers.md#Providers-getProvidersAuths--
[Providers-registerProvider-struct-ProviderInfo-]: ../Providers.md#Providers-registerProvider-struct-ProviderInfo-
[Providers-modifyProvider-struct-ProviderInfo-]: ../Providers.md#Providers-modifyProvider-struct-ProviderInfo-
[Providers-refillProviderSecurityDepo-uint256-]: ../Providers.md#Providers-refillProviderSecurityDepo-uint256-
[Providers-returnProviderSecurityDepo-uint256-]: ../Providers.md#Providers-returnProviderSecurityDepo-uint256-
[Providers-incrProviderViolationRate-address-]: ../Providers.md#Providers-incrProviderViolationRate-address-
[Providers-chargePenalty-uint256-uint256-]: ../Providers.md#Providers-chargePenalty-uint256-uint256-
[Providers-ProviderRegistered-address-]: ../Providers.md#Providers-ProviderRegistered-address-
[Providers-ProviderModified-address-]: ../Providers.md#Providers-ProviderModified-address-
[Providers-ProviderViolationRateIncremented-address-uint256-]: ../Providers.md#Providers-ProviderViolationRateIncremented-address-uint256-
[Providers-ProviderSecurityDepoRefilled-address-uint256-]: ../Providers.md#Providers-ProviderSecurityDepoRefilled-address-uint256-
[Providers-ProviderSecurityDepoUnlocked-address-uint256-]: ../Providers.md#Providers-ProviderSecurityDepoUnlocked-address-uint256-
[Providers-ProviderPenalty-address-uint256-]: ../Providers.md#Providers-ProviderPenalty-address-uint256-
[ProvidersOffers]: ../ProvidersOffers.md#ProvidersOffers
[ProvidersOffers-_pointer-address-]: ../ProvidersOffers.md#ProvidersOffers-_pointer-address-
[ProvidersOffers-isProviderHasEnabledOffers-address-]: ../ProvidersOffers.md#ProvidersOffers-isProviderHasEnabledOffers-address-
[ProvidersOffers-isProviderHasEnoughSecurityDeposit-address-]: ../ProvidersOffers.md#ProvidersOffers-isProviderHasEnoughSecurityDeposit-address-
[ProvidersOffers-getProviderOffersState-address-]: ../ProvidersOffers.md#ProvidersOffers-getProviderOffersState-address-
[ProvidersOffers-getProviderRequiredSecDepo-address-uint256-]: ../ProvidersOffers.md#ProvidersOffers-getProviderRequiredSecDepo-address-uint256-
[ProvidersOffers-getProviderRecentlyEnabledValueOffersCount-address-]: ../ProvidersOffers.md#ProvidersOffers-getProviderRecentlyEnabledValueOffersCount-address-
[ProvidersOffers-getProviderRecentlyEnabledTeeOffersCount-address-]: ../ProvidersOffers.md#ProvidersOffers-getProviderRecentlyEnabledTeeOffersCount-address-
[ProvidersOffers-getProviderValueOffers-address-]: ../ProvidersOffers.md#ProvidersOffers-getProviderValueOffers-address-
[ProvidersOffers-getProviderTeeOffers-address-]: ../ProvidersOffers.md#ProvidersOffers-getProviderTeeOffers-address-
[ProvidersOffers-gcProviderOffers-address-]: ../ProvidersOffers.md#ProvidersOffers-gcProviderOffers-address-
[ProvidersOffers-addProviderOffer-address-uint256-enum-OfferType-]: ../ProvidersOffers.md#ProvidersOffers-addProviderOffer-address-uint256-enum-OfferType-
[ProvidersOffers-setProviderOfferState-address-uint256-enum-OfferType-bool-uint256-]: ../ProvidersOffers.md#ProvidersOffers-setProviderOfferState-address-uint256-enum-OfferType-bool-uint256-
[Staking]: ../Staking.md#Staking
[Staking-getStakeInfo-address-]: ../Staking.md#Staking-getStakeInfo-address-
[Staking-getLockedTokensInfo-address-]: ../Staking.md#Staking-getLockedTokensInfo-address-
[Staking-stake-uint256-]: ../Staking.md#Staking-stake-uint256-
[Staking-stakeFor-address-uint256-]: ../Staking.md#Staking-stakeFor-address-uint256-
[Staking-unstake-uint256-]: ../Staking.md#Staking-unstake-uint256-
[Staking-lockTokens-address-uint256-uint256-]: ../Staking.md#Staking-lockTokens-address-uint256-uint256-
[Staking-unlockTokens-address-uint256-]: ../Staking.md#Staking-unlockTokens-address-uint256-
[Staking-confiscateTokensFrom-address-uint256-]: ../Staking.md#Staking-confiscateTokensFrom-address-uint256-
[Staking-TokensStaked-address-uint256-uint256-]: ../Staking.md#Staking-TokensStaked-address-uint256-uint256-
[Staking-TokensUnstaked-address-uint256-uint256-]: ../Staking.md#Staking-TokensUnstaked-address-uint256-uint256-
[Staking-TokensLocked-address-uint256-uint256-]: ../Staking.md#Staking-TokensLocked-address-uint256-uint256-
[Staking-TokensUnlocked-address-uint256-uint256-]: ../Staking.md#Staking-TokensUnlocked-address-uint256-uint256-
[Superpro]: ../Superpro.md#Superpro
[Superpro-onlyAdmin--]: ../Superpro.md#Superpro-onlyAdmin--
[Superpro-SUPERPRO_STORAGE_CONFIG-bytes32]: ../Superpro.md#Superpro-SUPERPRO_STORAGE_CONFIG-bytes32
[Superpro-getConfigStorage--]: ../Superpro.md#Superpro-getConfigStorage--
[Superpro-getVersion--]: ../Superpro.md#Superpro-getVersion--
[Superpro-getToken--]: ../Superpro.md#Superpro-getToken--
[Superpro-getConfigParam-enum-ParamName-]: ../Superpro.md#Superpro-getConfigParam-enum-ParamName-
[Superpro-setVersion-string-]: ../Superpro.md#Superpro-setVersion-string-
[Superpro-setConfigParam-enum-ParamName-uint256-]: ../Superpro.md#Superpro-setConfigParam-enum-ParamName-uint256-
[Superpro-setConfigParams-struct-SuperproParams-]: ../Superpro.md#Superpro-setConfigParams-struct-SuperproParams-
[Superpro-ConfigStorage]: ../Superpro.md#Superpro-ConfigStorage
[Diamond]: ../diamond/Diamond.md#Diamond
[Diamond-constructor-address-address-]: ../diamond/Diamond.md#Diamond-constructor-address-address-
[Diamond-fallback--]: ../diamond/Diamond.md#Diamond-fallback--
[Diamond-receive--]: ../diamond/Diamond.md#Diamond-receive--
[DiamondCutFacet]: ../diamond/facets/DiamondCutFacet.md#DiamondCutFacet
[DiamondCutFacet-diamondCut-struct-IDiamondCut-FacetCut---address-bytes-]: ../diamond/facets/DiamondCutFacet.md#DiamondCutFacet-diamondCut-struct-IDiamondCut-FacetCut---address-bytes-
[DiamondLoupeFacet]: ../diamond/facets/DiamondLoupeFacet.md#DiamondLoupeFacet
[DiamondLoupeFacet-facets--]: ../diamond/facets/DiamondLoupeFacet.md#DiamondLoupeFacet-facets--
[DiamondLoupeFacet-facetFunctionSelectors-address-]: ../diamond/facets/DiamondLoupeFacet.md#DiamondLoupeFacet-facetFunctionSelectors-address-
[DiamondLoupeFacet-facetAddresses--]: ../diamond/facets/DiamondLoupeFacet.md#DiamondLoupeFacet-facetAddresses--
[DiamondLoupeFacet-facetAddress-bytes4-]: ../diamond/facets/DiamondLoupeFacet.md#DiamondLoupeFacet-facetAddress-bytes4-
[DiamondLoupeFacet-supportsInterface-bytes4-]: ../diamond/facets/DiamondLoupeFacet.md#DiamondLoupeFacet-supportsInterface-bytes4-
[OwnershipFacet]: ../diamond/facets/OwnershipFacet.md#OwnershipFacet
[OwnershipFacet-transferOwnership-address-]: ../diamond/facets/OwnershipFacet.md#OwnershipFacet-transferOwnership-address-
[OwnershipFacet-owner--]: ../diamond/facets/OwnershipFacet.md#OwnershipFacet-owner--
[IDiamondCut]: ../diamond/interfaces/IDiamondCut.md#IDiamondCut
[IDiamondCut-diamondCut-struct-IDiamondCut-FacetCut---address-bytes-]: ../diamond/interfaces/IDiamondCut.md#IDiamondCut-diamondCut-struct-IDiamondCut-FacetCut---address-bytes-
[IDiamondCut-DiamondCut-struct-IDiamondCut-FacetCut---address-bytes-]: ../diamond/interfaces/IDiamondCut.md#IDiamondCut-DiamondCut-struct-IDiamondCut-FacetCut---address-bytes-
[IDiamondCut-FacetCut]: ../diamond/interfaces/IDiamondCut.md#IDiamondCut-FacetCut
[IDiamondCut-FacetCutAction]: ../diamond/interfaces/IDiamondCut.md#IDiamondCut-FacetCutAction
[IDiamondLoupe]: ../diamond/interfaces/IDiamondLoupe.md#IDiamondLoupe
[IDiamondLoupe-facets--]: ../diamond/interfaces/IDiamondLoupe.md#IDiamondLoupe-facets--
[IDiamondLoupe-facetFunctionSelectors-address-]: ../diamond/interfaces/IDiamondLoupe.md#IDiamondLoupe-facetFunctionSelectors-address-
[IDiamondLoupe-facetAddresses--]: ../diamond/interfaces/IDiamondLoupe.md#IDiamondLoupe-facetAddresses--
[IDiamondLoupe-facetAddress-bytes4-]: ../diamond/interfaces/IDiamondLoupe.md#IDiamondLoupe-facetAddress-bytes4-
[IDiamondLoupe-Facet]: ../diamond/interfaces/IDiamondLoupe.md#IDiamondLoupe-Facet
[IERC165]: ../diamond/interfaces/IERC165.md#IERC165
[IERC165-supportsInterface-bytes4-]: ../diamond/interfaces/IERC165.md#IERC165-supportsInterface-bytes4-
[IERC173]: ../diamond/interfaces/IERC173.md#IERC173
[IERC173-owner--]: ../diamond/interfaces/IERC173.md#IERC173-owner--
[IERC173-transferOwnership-address-]: ../diamond/interfaces/IERC173.md#IERC173-transferOwnership-address-
[IERC173-OwnershipTransferred-address-address-]: ../diamond/interfaces/IERC173.md#IERC173-OwnershipTransferred-address-address-
[LibDiamond]: ../diamond/libraries/LibDiamond.md#LibDiamond
[LibDiamond-DIAMOND_STORAGE_POSITION-bytes32]: ../diamond/libraries/LibDiamond.md#LibDiamond-DIAMOND_STORAGE_POSITION-bytes32
[LibDiamond-diamondStorage--]: ../diamond/libraries/LibDiamond.md#LibDiamond-diamondStorage--
[LibDiamond-setContractOwner-address-]: ../diamond/libraries/LibDiamond.md#LibDiamond-setContractOwner-address-
[LibDiamond-contractOwner--]: ../diamond/libraries/LibDiamond.md#LibDiamond-contractOwner--
[LibDiamond-enforceIsContractOwner--]: ../diamond/libraries/LibDiamond.md#LibDiamond-enforceIsContractOwner--
[LibDiamond-diamondCut-struct-IDiamondCut-FacetCut---address-bytes-]: ../diamond/libraries/LibDiamond.md#LibDiamond-diamondCut-struct-IDiamondCut-FacetCut---address-bytes-
[LibDiamond-addFunctions-address-bytes4---]: ../diamond/libraries/LibDiamond.md#LibDiamond-addFunctions-address-bytes4---
[LibDiamond-replaceFunctions-address-bytes4---]: ../diamond/libraries/LibDiamond.md#LibDiamond-replaceFunctions-address-bytes4---
[LibDiamond-removeFunctions-address-bytes4---]: ../diamond/libraries/LibDiamond.md#LibDiamond-removeFunctions-address-bytes4---
[LibDiamond-addFacet-struct-LibDiamond-DiamondStorage-address-]: ../diamond/libraries/LibDiamond.md#LibDiamond-addFacet-struct-LibDiamond-DiamondStorage-address-
[LibDiamond-addFunction-struct-LibDiamond-DiamondStorage-bytes4-uint96-address-]: ../diamond/libraries/LibDiamond.md#LibDiamond-addFunction-struct-LibDiamond-DiamondStorage-bytes4-uint96-address-
[LibDiamond-removeFunction-struct-LibDiamond-DiamondStorage-address-bytes4-]: ../diamond/libraries/LibDiamond.md#LibDiamond-removeFunction-struct-LibDiamond-DiamondStorage-address-bytes4-
[LibDiamond-initializeDiamondCut-address-bytes-]: ../diamond/libraries/LibDiamond.md#LibDiamond-initializeDiamondCut-address-bytes-
[LibDiamond-enforceHasContractCode-address-string-]: ../diamond/libraries/LibDiamond.md#LibDiamond-enforceHasContractCode-address-string-
[LibDiamond-OwnershipTransferred-address-address-]: ../diamond/libraries/LibDiamond.md#LibDiamond-OwnershipTransferred-address-address-
[LibDiamond-DiamondCut-struct-IDiamondCut-FacetCut---address-bytes-]: ../diamond/libraries/LibDiamond.md#LibDiamond-DiamondCut-struct-IDiamondCut-FacetCut---address-bytes-
[LibDiamond-FacetAddressAndPosition]: ../diamond/libraries/LibDiamond.md#LibDiamond-FacetAddressAndPosition
[LibDiamond-FacetFunctionSelectors]: ../diamond/libraries/LibDiamond.md#LibDiamond-FacetFunctionSelectors
[LibDiamond-DiamondStorage]: ../diamond/libraries/LibDiamond.md#LibDiamond-DiamondStorage
[DiamondInit]: ../diamond/upgradeInitializers/DiamondInit.md#DiamondInit
[DiamondInit-init--]: ../diamond/upgradeInitializers/DiamondInit.md#DiamondInit-init--
[IOffers]: #IOffers
[IOffers-isOfferEnabled-uint256-]: #IOffers-isOfferEnabled-uint256-
[IOffers-isOfferCancelable-uint256-]: #IOffers-isOfferCancelable-uint256-
[IOffers-isOfferAllowedForConsumer-uint256-address-]: #IOffers-isOfferAllowedForConsumer-uint256-address-
[IOffers-isOfferRestrictedByOfferType-uint256-enum-OfferType-]: #IOffers-isOfferRestrictedByOfferType-uint256-enum-OfferType-
[IOffers-isOfferRestrictionsPermitOtherOffer-uint256-uint256-]: #IOffers-isOfferRestrictionsPermitOtherOffer-uint256-uint256-
[IOffers-isProviderHasEnabledOffers-address-]: #IOffers-isProviderHasEnabledOffers-address-
[IOffers-getProviderRequiredSecDepo-address-uint256-]: #IOffers-getProviderRequiredSecDepo-address-uint256-
[IOffers-getOfferType-uint256-]: #IOffers-getOfferType-uint256-
[IOffers-getOfferGroup-uint256-]: #IOffers-getOfferGroup-uint256-
[IOffers-getOfferProviderAuthority-uint256-]: #IOffers-getOfferProviderAuthority-uint256-
[IOffers-getOfferDisabledAfter-uint256-]: #IOffers-getOfferDisabledAfter-uint256-
[IOffers-getOfferHoldDeposit-uint256-]: #IOffers-getOfferHoldDeposit-uint256-
[IOffers-getOfferClosingPrice-uint256-uint256-uint256-]: #IOffers-getOfferClosingPrice-uint256-uint256-uint256-
[IOffers-gcProviderOffers-address-]: #IOffers-gcProviderOffers-address-
[IOffers-addProviderOffer-address-uint256-enum-OfferType-]: #IOffers-addProviderOffer-address-uint256-enum-OfferType-
[IOffers-setProviderOfferState-address-uint256-enum-OfferType-bool-uint256-]: #IOffers-setProviderOfferState-address-uint256-enum-OfferType-bool-uint256-
[IOrders]: IOrders.md#IOrders
[IOrders-getOrder-uint256-]: IOrders.md#IOrders-getOrder-uint256-
[IProviders]: IProviders.md#IProviders
[IProviders-isProviderRegistered-address-]: IProviders.md#IProviders-isProviderRegistered-address-
[IProviders-getProviderActionAccount-address-]: IProviders.md#IProviders-getProviderActionAccount-address-
[IProviders-getProviderTokenReceiver-address-]: IProviders.md#IProviders-getProviderTokenReceiver-address-
[IProviders-getProviderSecurityDeposit-address-]: IProviders.md#IProviders-getProviderSecurityDeposit-address-
[IProviders-getProviderRequiredSecDepo-address-uint256-]: IProviders.md#IProviders-getProviderRequiredSecDepo-address-uint256-
[IProvidersOffers]: IProvidersOffers.md#IProvidersOffers
[IProvidersOffers-isProviderHasEnoughSecurityDeposit-address-]: IProvidersOffers.md#IProvidersOffers-isProviderHasEnoughSecurityDeposit-address-
[IStaking]: IStaking.md#IStaking
[IStaking-stake-uint256-]: IStaking.md#IStaking-stake-uint256-
[IStaking-stakeFor-address-uint256-]: IStaking.md#IStaking-stakeFor-address-uint256-
[IStaking-unstake-uint256-]: IStaking.md#IStaking-unstake-uint256-
[IStaking-lockTokens-address-uint256-uint256-]: IStaking.md#IStaking-lockTokens-address-uint256-uint256-
[IStaking-unlockTokens-address-uint256-]: IStaking.md#IStaking-unlockTokens-address-uint256-
[IStaking-confiscateTokensFrom-address-uint256-]: IStaking.md#IStaking-confiscateTokensFrom-address-uint256-
[IStaking-getStakeInfo-address-]: IStaking.md#IStaking-getStakeInfo-address-
[IStaking-getLockedTokensInfo-address-]: IStaking.md#IStaking-getLockedTokensInfo-address-
[ISuperpro]: ISuperpro.md#ISuperpro
[ISuperpro-owner--]: ISuperpro.md#ISuperpro-owner--
[ISuperpro-getToken--]: ISuperpro.md#ISuperpro-getToken--
[ISuperpro-getConfigParam-enum-ParamName-]: ISuperpro.md#ISuperpro-getConfigParam-enum-ParamName-
[ISuperproToken]: ISuperproToken.md#ISuperproToken
[ISuperproToken-mint-address-uint256-]: ISuperproToken.md#ISuperproToken-mint-address-uint256-
[ISuperproToken-transfer-address-uint256-]: ISuperproToken.md#ISuperproToken-transfer-address-uint256-
[ISuperproToken-transferFrom-address-address-uint256-]: ISuperproToken.md#ISuperproToken-transferFrom-address-address-uint256-
[ISuperproToken-allowance-address-address-]: ISuperproToken.md#ISuperproToken-allowance-address-address-
[ISuperproToken-approve-address-uint256-]: ISuperproToken.md#ISuperproToken-approve-address-uint256-
[ISuperproToken-burnFrom-address-uint256-]: ISuperproToken.md#ISuperproToken-burnFrom-address-uint256-
[OriginsHelper]: ../libs/OriginsHelper.md#OriginsHelper
[OriginsHelper-init-struct-Origins-]: ../libs/OriginsHelper.md#OriginsHelper-init-struct-Origins-
[OriginsHelper-update-struct-Origins-]: ../libs/OriginsHelper.md#OriginsHelper-update-struct-Origins-
[ProviderHelper]: ../libs/ProviderHelper.md#ProviderHelper
[ProviderHelper-clear-struct-OffersSet-contract-IOffers-]: ../libs/ProviderHelper.md#ProviderHelper-clear-struct-OffersSet-contract-IOffers-
[ProviderHelper-updDisableAfter-uint256---contract-IOffers-]: ../libs/ProviderHelper.md#ProviderHelper-updDisableAfter-uint256---contract-IOffers-
[ProviderHelper-offerTumbler-struct-ProviderOffersData-bool-bool-]: ../libs/ProviderHelper.md#ProviderHelper-offerTumbler-struct-ProviderOffersData-bool-bool-
[ProviderHelper-addDelayDisable-struct-ProviderOffersData-bool-uint256-]: ../libs/ProviderHelper.md#ProviderHelper-addDelayDisable-struct-ProviderOffersData-bool-uint256-
[ProviderHelper-addOffer-struct-ProviderOffersData-bool-uint256-]: ../libs/ProviderHelper.md#ProviderHelper-addOffer-struct-ProviderOffersData-bool-uint256-
[Set]: ../libs/Set.md#Set
[Set-isEmpty-struct-AddressHashSet-]: ../libs/Set.md#Set-isEmpty-struct-AddressHashSet-
[Set-add-struct-AddressHashSet-address-]: ../libs/Set.md#Set-add-struct-AddressHashSet-address-
[Set-isExists-struct-AddressHashSet-address-]: ../libs/Set.md#Set-isExists-struct-AddressHashSet-address-
[Set-remove-struct-AddressHashSet-address-]: ../libs/Set.md#Set-remove-struct-AddressHashSet-address-
[Setn]: ../libs/Setn.md#Setn
[Setn-isEmpty-struct-OffersSet-]: ../libs/Setn.md#Setn-isEmpty-struct-OffersSet-
[Setn-add-struct-OffersSet-uint256-]: ../libs/Setn.md#Setn-add-struct-OffersSet-uint256-
[Setn-isExists-struct-OffersSet-uint256-]: ../libs/Setn.md#Setn-isExists-struct-OffersSet-uint256-
[Setn-remove-struct-OffersSet-uint256-]: ../libs/Setn.md#Setn-remove-struct-OffersSet-uint256-
[SuperproTokenMock]: ../mocks/SuperproTokenMock.md#SuperproTokenMock
[SuperproTokenMock-superpro-contract-ISuperpro]: ../mocks/SuperproTokenMock.md#SuperproTokenMock-superpro-contract-ISuperpro
[SuperproTokenMock-constructor-uint256-]: ../mocks/SuperproTokenMock.md#SuperproTokenMock-constructor-uint256-
[SuperproTokenMock-mint-address-uint256-]: ../mocks/SuperproTokenMock.md#SuperproTokenMock-mint-address-uint256-
[ERC20]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20
[ERC20-constructor-string-string-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-constructor-string-string-
[ERC20-name--]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-name--
[ERC20-symbol--]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-symbol--
[ERC20-decimals--]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-decimals--
[ERC20-totalSupply--]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-totalSupply--
[ERC20-balanceOf-address-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-balanceOf-address-
[ERC20-transfer-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-transfer-address-uint256-
[ERC20-allowance-address-address-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-allowance-address-address-
[ERC20-approve-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-approve-address-uint256-
[ERC20-transferFrom-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-transferFrom-address-address-uint256-
[ERC20-increaseAllowance-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-increaseAllowance-address-uint256-
[ERC20-decreaseAllowance-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-decreaseAllowance-address-uint256-
[ERC20-_transfer-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-_transfer-address-address-uint256-
[ERC20-_mint-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-_mint-address-uint256-
[ERC20-_burn-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-_burn-address-uint256-
[ERC20-_approve-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-_approve-address-address-uint256-
[ERC20-_spendAllowance-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-_spendAllowance-address-address-uint256-
[ERC20-_beforeTokenTransfer-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-_beforeTokenTransfer-address-address-uint256-
[ERC20-_afterTokenTransfer-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/ERC20.md#ERC20-_afterTokenTransfer-address-address-uint256-
[IERC20]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20
[IERC20-totalSupply--]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-totalSupply--
[IERC20-balanceOf-address-]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-balanceOf-address-
[IERC20-transfer-address-uint256-]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-transfer-address-uint256-
[IERC20-allowance-address-address-]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-allowance-address-address-
[IERC20-approve-address-uint256-]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-approve-address-uint256-
[IERC20-transferFrom-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-transferFrom-address-address-uint256-
[IERC20-Transfer-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-Transfer-address-address-uint256-
[IERC20-Approval-address-address-uint256-]: ../openzeppelin/contracts/token/ERC20/IERC20.md#IERC20-Approval-address-address-uint256-
[ERC20Burnable]: ../openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.md#ERC20Burnable
[ERC20Burnable-burn-uint256-]: ../openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.md#ERC20Burnable-burn-uint256-
[ERC20Burnable-burnFrom-address-uint256-]: ../openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.md#ERC20Burnable-burnFrom-address-uint256-
[IERC20Metadata]: ../openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.md#IERC20Metadata
[IERC20Metadata-name--]: ../openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.md#IERC20Metadata-name--
[IERC20Metadata-symbol--]: ../openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.md#IERC20Metadata-symbol--
[IERC20Metadata-decimals--]: ../openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.md#IERC20Metadata-decimals--
[Context]: ../openzeppelin/contracts/utils/Context.md#Context
[Context-_msgSender--]: ../openzeppelin/contracts/utils/Context.md#Context-_msgSender--
[Context-_msgData--]: ../openzeppelin/contracts/utils/Context.md#Context-_msgData--
[SafeMath]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath
[SafeMath-tryAdd-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-tryAdd-uint256-uint256-
[SafeMath-trySub-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-trySub-uint256-uint256-
[SafeMath-tryMul-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-tryMul-uint256-uint256-
[SafeMath-tryDiv-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-tryDiv-uint256-uint256-
[SafeMath-tryMod-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-tryMod-uint256-uint256-
[SafeMath-add-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-add-uint256-uint256-
[SafeMath-sub-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-sub-uint256-uint256-
[SafeMath-mul-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-mul-uint256-uint256-
[SafeMath-div-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-div-uint256-uint256-
[SafeMath-mod-uint256-uint256-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-mod-uint256-uint256-
[SafeMath-sub-uint256-uint256-string-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-sub-uint256-uint256-string-
[SafeMath-div-uint256-uint256-string-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-div-uint256-uint256-string-
[SafeMath-mod-uint256-uint256-string-]: ../openzeppelin/contracts/utils/math/SafeMath.md#SafeMath-mod-uint256-uint256-string-
[MarksStorageAccessor]: ../storages/MarksStorageAccessor.md#MarksStorageAccessor
[MarksStorageAccessor-MARKS_STORAGE_REGISTRY-bytes32]: ../storages/MarksStorageAccessor.md#MarksStorageAccessor-MARKS_STORAGE_REGISTRY-bytes32
[MarksStorageAccessor-getMarksStorage--]: ../storages/MarksStorageAccessor.md#MarksStorageAccessor-getMarksStorage--
[MarksStorageAccessor-ProviderMarksCount]: ../storages/MarksStorageAccessor.md#MarksStorageAccessor-ProviderMarksCount
[MarksStorageAccessor-MarksStorage]: ../storages/MarksStorageAccessor.md#MarksStorageAccessor-MarksStorage
[OffersStorageAccessor]: ../storages/OffersStorageAccessor.md#OffersStorageAccessor
[OffersStorageAccessor-OFFERS_STORAGE-bytes32]: ../storages/OffersStorageAccessor.md#OffersStorageAccessor-OFFERS_STORAGE-bytes32
[OffersStorageAccessor-getOffersStorage--]: ../storages/OffersStorageAccessor.md#OffersStorageAccessor-getOffersStorage--
[OffersStorageAccessor-Offer]: ../storages/OffersStorageAccessor.md#OffersStorageAccessor-Offer
[OffersStorageAccessor-ValueOffer]: ../storages/OffersStorageAccessor.md#OffersStorageAccessor-ValueOffer
[OffersStorageAccessor-TeeOffer]: ../storages/OffersStorageAccessor.md#OffersStorageAccessor-TeeOffer
[OffersStorageAccessor-OffersStorage]: ../storages/OffersStorageAccessor.md#OffersStorageAccessor-OffersStorage
[OrdersStorageAccessor]: ../storages/OrdersStorageAccessor.md#OrdersStorageAccessor
[OrdersStorageAccessor-ORDERS_STORAGE-bytes32]: ../storages/OrdersStorageAccessor.md#OrdersStorageAccessor-ORDERS_STORAGE-bytes32
[OrdersStorageAccessor-getOrdersStorage--]: ../storages/OrdersStorageAccessor.md#OrdersStorageAccessor-getOrdersStorage--
[OrdersStorageAccessor-Order]: ../storages/OrdersStorageAccessor.md#OrdersStorageAccessor-Order
[OrdersStorageAccessor-OrdersStorage]: ../storages/OrdersStorageAccessor.md#OrdersStorageAccessor-OrdersStorage
[ProvidersOffersStorageAccessor]: ../storages/ProvidersOffersStorageAccessor.md#ProvidersOffersStorageAccessor
[ProvidersOffersStorageAccessor-PROVIDERS_OFFERS_STORAGE_REGISTRY-bytes32]: ../storages/ProvidersOffersStorageAccessor.md#ProvidersOffersStorageAccessor-PROVIDERS_OFFERS_STORAGE_REGISTRY-bytes32
[ProvidersOffersStorageAccessor-getProvidersOffersStorage--]: ../storages/ProvidersOffersStorageAccessor.md#ProvidersOffersStorageAccessor-getProvidersOffersStorage--
[ProvidersOffersStorageAccessor-Storage]: ../storages/ProvidersOffersStorageAccessor.md#ProvidersOffersStorageAccessor-Storage
[ProvidersStorageAccessor]: ../storages/ProvidersStorageAccessor.md#ProvidersStorageAccessor
[ProvidersStorageAccessor-PROVIDERS_STORAGE_REGISTRY-bytes32]: ../storages/ProvidersStorageAccessor.md#ProvidersStorageAccessor-PROVIDERS_STORAGE_REGISTRY-bytes32
[ProvidersStorageAccessor-getProvidersStorage--]: ../storages/ProvidersStorageAccessor.md#ProvidersStorageAccessor-getProvidersStorage--
[ProvidersStorageAccessor-ProviderData]: ../storages/ProvidersStorageAccessor.md#ProvidersStorageAccessor-ProviderData
[ProvidersStorageAccessor-ProvidersStorage]: ../storages/ProvidersStorageAccessor.md#ProvidersStorageAccessor-ProvidersStorage
[StakingStorageAccessor]: ../storages/StakingStorageAccessor.md#StakingStorageAccessor
[StakingStorageAccessor-STAKING_STORAGE-bytes32]: ../storages/StakingStorageAccessor.md#StakingStorageAccessor-STAKING_STORAGE-bytes32
[StakingStorageAccessor-getStakingStorage--]: ../storages/StakingStorageAccessor.md#StakingStorageAccessor-getStakingStorage--
[StakingStorageAccessor-StakingStorage]: ../storages/StakingStorageAccessor.md#StakingStorageAccessor-StakingStorage

## `IOffers`



## Functions
### isOfferEnabled
```solidity
  function isOfferEnabled(
  ) external returns (bool)
```




### isOfferCancelable
```solidity
  function isOfferCancelable(
  ) external returns (bool)
```




### isOfferAllowedForConsumer
```solidity
  function isOfferAllowedForConsumer(
  ) external returns (bool)
```




### isOfferRestrictedByOfferType
```solidity
  function isOfferRestrictedByOfferType(
  ) external returns (bool)
```




### isOfferRestrictionsPermitOtherOffer
```solidity
  function isOfferRestrictionsPermitOtherOffer(
  ) external returns (bool)
```




### isProviderHasEnabledOffers
```solidity
  function isProviderHasEnabledOffers(
  ) external returns (bool)
```




### getProviderRequiredSecDepo
```solidity
  function getProviderRequiredSecDepo(
  ) external returns (uint256)
```




### getOfferType
```solidity
  function getOfferType(
  ) external returns (enum OfferType)
```




### getOfferGroup
```solidity
  function getOfferGroup(
  ) external returns (enum OfferGroup)
```




### getOfferProviderAuthority
```solidity
  function getOfferProviderAuthority(
  ) external returns (address)
```




### getOfferDisabledAfter
```solidity
  function getOfferDisabledAfter(
  ) external returns (uint256)
```




### getOfferHoldDeposit
```solidity
  function getOfferHoldDeposit(
  ) external returns (uint256)
```




### getOfferClosingPrice
```solidity
  function getOfferClosingPrice(
  ) external returns (uint256)
```




### gcProviderOffers
```solidity
  function gcProviderOffers(
  ) external
```




### addProviderOffer
```solidity
  function addProviderOffer(
  ) external
```




### setProviderOfferState
```solidity
  function setProviderOfferState(
  ) external
```




