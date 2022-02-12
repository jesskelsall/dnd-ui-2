import _ from "lodash/fp";
import { useRouter } from "next/router";
import { NoContent } from "../../framework";
import { useDataStore } from "../../../providers";
import { TCollectionSelector } from "../../../types";
import { ControlLayout } from "../ControlLayout";
import { getRecordById } from "../../../functions";

export interface IEditorLayoutProps {
  children: React.ReactNode;
  collectionSelector?: TCollectionSelector;
}

export const EditorLayout = ({
  children,
  collectionSelector,
}: IEditorLayoutProps) => {
  const { dataStore, loading } = useDataStore();
  const router = useRouter();

  const noContent = (
    <NoContent>{loading ? "Loading..." : "No record found."}</NoContent>
  );

  // Route must be dynamic and end with the query param

  const paramName: string = _.flow(
    _.split("/"),
    _.last,
    _.replace(/[[\]]/g, "")
  )(router.route);
  const recordId = router.query[`${paramName}`];

  // The Next.js page must have a collection selector defined

  if (!recordId || typeof recordId !== "string" || !collectionSelector) {
    return <ControlLayout>{noContent}</ControlLayout>;
  }

  const collection = collectionSelector(dataStore.copies.control);
  const record = getRecordById(collection, recordId);

  return <ControlLayout>{record ? children : noContent}</ControlLayout>;
};
