import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.h1`
  margin: 0;
  font-size: 3rem;
`;

export interface INoContentProps {
  children: React.ReactNode;
}

export const NoContent = ({ children }: INoContentProps) => (
  <Wrapper>
    <Text>{children}</Text>
  </Wrapper>
);
