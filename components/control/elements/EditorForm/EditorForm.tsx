import _ from "lodash/fp";
import { useRouter } from "next/router";
import { IDataRecord } from "../../../../types";
import { Button, Form } from "../../../framework";

export interface IEditorFormProps<RecordType extends IDataRecord> {
  actionSet: (data: RecordType) => void;
  children: React.ReactNode;
  data: RecordType;
  dataOriginal: RecordType;
  type: string;
}

export function EditorForm<RecordType extends IDataRecord>({
  actionSet,
  children,
  data,
  dataOriginal,
  type,
}: IEditorFormProps<RecordType>) {
  const router = useRouter();

  const changes = !_.isEqual(data, dataOriginal);
  const title = `${type}: ${data.name}`;

  const previousPage = () => router.push(".");

  const onSave = () => {
    actionSet(data);
    previousPage();
  };

  return (
    <Form
      buttons={
        <>
          <Button colour="blue" disabled={!changes} onClick={onSave}>
            Save
          </Button>
          <Button colour={changes ? "red" : "blue"} onClick={previousPage}>
            Cancel
          </Button>
        </>
      }
      title={title}
    >
      {children}
    </Form>
  );
}
