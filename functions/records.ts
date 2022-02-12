import { IDataRecord } from "../types";

export function getRecordById<DataRecord extends IDataRecord>(
  collection: Record<string, DataRecord>,
  id: string
): DataRecord | undefined {
  return collection[`${id}`];
}

export const getRecordName = (
  collection: Record<string, IDataRecord>,
  id: string
): string => {
  const record = getRecordById(collection, id);
  return record ? record.name : "";
};
