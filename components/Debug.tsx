import styled from "styled-components";

const Code = styled.pre`
  background-color: black;
  padding: 1rem;
  margin: 0;
`;

interface IDebugProps {
  value: unknown;
}

export const Debug = ({ value }: IDebugProps) => (
  <Code>{JSON.stringify(value, null, 2)}</Code>
);
