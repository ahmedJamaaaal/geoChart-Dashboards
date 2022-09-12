import { GasFuelingStationDetails } from "./GasFuelingStationDetails";
import { GasFuelingStation } from "./GasFuelingStationLocation";
import { LiquefiedGasStationLocation } from "./LiquefiedGasStationLocation";

export interface geoChartsData {
  name?: string;
  result?: [];
  gasFuelingStationDetails?: GasFuelingStationDetails;
  GasFuelingStation?: GasFuelingStation;
  LiquefiedGasStationLocation?: LiquefiedGasStationLocation;

}