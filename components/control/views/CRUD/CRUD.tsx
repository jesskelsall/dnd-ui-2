import { Many, ValueIteratee } from "lodash";
import _ from "lodash/fp";
import Link from "next/link";
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
  width: 0;
`;

export interface RecordWithId {
  id: string;
}

export interface IColumn<DataType> {
  display: (data: DataType) => string;
  title: string;
}

export interface ICRUDProps<DataType> {
  columns: IColumn<DataType>[];
  data: Record<string, DataType>;
  headerButtons?: React.ReactNode;
  linkBase: string;
  sendCreate: (id: string, baseId?: string) => void;
  sendDelete: (id: string) => void;
  sortBy?: Many<ValueIteratee<unknown>>;
  title: string;
}

export function CRUD<DataType extends RecordWithId>({
  columns,
  data,
  headerButtons,
  linkBase,
  sendCreate,
  sendDelete,
  sortBy = [],
  title,
}: ICRUDProps<DataType>) {
  const router = useRouter();
  const orderedData = _.sortBy(sortBy, data);

  const onCreate = (baseId?: string) => () => {
    const createdId = randomId(data);

    sendCreate(createdId, baseId);
    router.push(`${linkBase}/${createdId}`);
  };

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
              <Button block colour="green" onClick={onCreate()}>
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
                  <Link href={`${linkBase}/${record.id}`} passHref>
                    <Button>Change</Button>
                  </Link>
                  <Button onClick={onCreate(record.id)}>Copy</Button>
                  <Button colour="red" onClick={() => sendDelete(record.id)}>
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
