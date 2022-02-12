import { IDataRecord } from "../../DataRecord";

export type TMapId = string;

export interface IMap extends IDataRecord {
  fileName: string;
}
