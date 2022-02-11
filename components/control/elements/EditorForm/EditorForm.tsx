import _ from "lodash/fp";
import { useRouter } from "next/router";
import { Button, Form } from "../../../framework";

export interface IEditorFormProps<RecordType> {
  actionSet: (data: RecordType) => void;
  children: React.ReactNode;
  data: RecordType;
  dataOriginal: RecordType;
  name: string;
  type: string;
}

export function EditorForm<RecordType>({
  actionSet,
  children,
  data,
  dataOriginal,
  name,
  type,
}: IEditorFormProps<RecordType>) {
  const router = useRouter();

  const changes = !_.isEqual(data, dataOriginal);
  const title = `${type}: ${name}`;

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
