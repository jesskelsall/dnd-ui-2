import styled from "styled-components";
import { getColour } from "../../../../functions";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  text-align: left;
`;

// Body

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid ${getColour("border")};
  outline: none;
`;

// Header

export const TableHead = styled.thead`
  position: sticky;
  top: 0;
  background-color: ${getColour("banner3")};
`;

export const TableHeaderRow = styled(TableRow)``;

export const TableHeaderCell = styled(TableCell)`
  border-bottom: none;
  font-weight: bold;
  color: ${getColour("heading")};
`;
