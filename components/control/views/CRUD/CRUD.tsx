import { Many, ValueIteratee } from "lodash";
import _ from "lodash/fp";
import { useRouter } from "next/router";
import styled from "styled-components";
import { randomId } from "../../../../functions";
import {
  Button,
  ButtonGroup,
  Form,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
} from "../../../framework";

const ButtonCell = styled(TableHeaderCell)`
  min-width: 15.225rem;
  width: 0;
`;

export interface RecordWithId {
  id: string;
}

export interface IColumn<RecordType> {
  display: (data: RecordType) => string;
  title: string;
}

export interface ICRUDProps<RecordType> {
  actionDelete: (id: string) => void;
  actionSet: (record: RecordType) => void;
  columns: IColumn<RecordType>[];
  data: Record<string, RecordType>;
  headerButtons?: React.ReactNode;
  recordTemplate: (records: Record<string, RecordType>) => RecordType;
  sortBy?: Many<ValueIteratee<unknown>>;
  title: string;
}

export function CRUD<RecordType extends RecordWithId>({
  actionDelete,
  actionSet,
  columns,
  data,
  headerButtons,
  recordTemplate,
  sortBy = [],
  title,
}: ICRUDProps<RecordType>) {
  const router = useRouter();
  const orderedData = _.sortBy(sortBy, data);

  const navigateToRecord = (recordId: string) =>
    router.push(`${router.route}/${recordId}`);

  // CRUD functions

  const onChange = (recordId: string) => () => navigateToRecord(recordId);

  const onCopy = (record: RecordType) => () => {
    const newRecord = _.set("id", randomId(data), record);
    actionSet(newRecord);
    navigateToRecord(newRecord.id);
  };

  const onCreate = () => {
    const newRecord = recordTemplate(data);
    actionSet(newRecord);
    navigateToRecord(newRecord.id);
  };

  const onDelete = (recordId: string) => () => actionDelete(recordId);

  return (
    <Form buttons={headerButtons} title={title}>
      <Table>
        <TableHead>
          <TableHeaderRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.title}>
                {column.title}
              </TableHeaderCell>
            ))}
            <ButtonCell>
              <Button block colour="green" onClick={onCreate}>
                Create New
              </Button>
            </ButtonCell>
          </TableHeaderRow>
        </TableHead>
        <TableBody>
          {orderedData.map((record) => (
            <TableRow key={record.id}>
              {columns.map((column) => (
                <TableCell key={`${record.id}.${column.title}`}>
                  {column.display(record)}
                </TableCell>
              ))}
              <TableCell>
                <ButtonGroup>
                  <Button onClick={onChange(record.id)}>Change</Button>
                  <Button onClick={onCopy(record)}>Copy</Button>
                  <Button colour="red" onClick={onDelete(record.id)}>
                    Delete
                  </Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Form>
  );
}
