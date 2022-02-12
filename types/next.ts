import { NextPage } from "next";
import { IDataCopy, IDataRecord } from "./DataStore";

export type TCollectionSelector = (
  dataCopy: IDataCopy
) => Record<string, IDataRecord>;

export type IPage = NextPage & {
  collectionSelector?: TCollectionSelector;
};
