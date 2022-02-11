import { NextPage } from "next";
import { IDataCopy } from "./DataStore";

export type TCollectionSelector = (
  dataCopy: IDataCopy
) => Record<string, unknown>;

export type IPage = NextPage & {
  collectionSelector?: TCollectionSelector;
};
