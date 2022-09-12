export interface GasFuelingStationDetails {
  stationType?: number;
  hasFence?: boolean;
  hasOuterInformativeBoard?: boolean;
  hasGuidingReflectivePanel?: boolean;
  hasIndicativeArrowsOnFloors?: boolean;
  hasInnerInformativeBoard?: boolean;
  hasPricingScreen?: boolean;
  pricingScreenLanguage?: number;
  pricingScreenTotalHight?: number;
  pricingScreenHight?: number;
  atmPlacment?: number;
  hasAfforestation?: boolean;
  hasParking?: boolean;
  hasParkingArrows?: boolean;
  hasHandicapParking?: boolean;
  servicesBuildingType?: number;
  isServiceBuildingHasHandicapRamp?: boolean;
  hasSecurityCameras?: boolean;
  hasFunctionalityToDisposeUsedOils?: boolean;
  hasManagingOffice?: boolean;
  editingPricingScreenFunctionality?: number;
  timeTakesToEditPricingScreen?: number;
  editingPumbsPricesFunctionality?: number;
  timeTakesToEditPumbsPrices?: number;
  challengesInEdtingGasPrices?: string;
  EdtingGasPricesPlacement?: number;
  getEditedPricesFunctionality?: string;
  gettingGasFunctionality?: number;
}

/*{
    "stationType":1,
    "hasFence":true,
    "hasOuterInformativeBoard":true,
    "hasGuidingReflectivePanel":true,
    "hasIndicativeArrowsOnFloors":true,
    "hasInnerInformativeBoard":true,
    "hasPricingScreen":true,
    "pricingScreenLanguage":1,
    "pricingScreenTotalHight":1,
    "pricingScreenHight":1,
    "atmPlacment":1,
    "hasAfforestation":true,
    "hasParking":true,
    "hasParkingArrows":true,
    "hasHandicapParking":true,
    "servicesBuildingType":1,
    "isServiceBuildingHasHandicapRamp":true,
    "hasSecurityCameras":true,
    "hasFunctionalityToDisposeUsedOils":true,
    "hasManagingOffice":true,
    "editingPricingScreenFunctionality":1,
    "timeTakesToEditPricingScreen":1,
    "editingPumbsPricesFunctionality":1,
    "timeTakesToEditPumbsPrices":1,
    "challengesInEdtingGasPrices":"",
    "EdtingGasPricesPlacement":1,
    "getEditedPricesFunctionality":"",
    "gettingGasFunctionality":1
}*/