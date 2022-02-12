import styled from "styled-components";
import { getColour } from "../../../../functions";

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${getColour("banner2")};
  padding: 0.5rem 1rem;
`;

export const FormTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: ${getColour("heading")};
`;

export const FormButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 1;
`;

interface IFormProps {
  buttons?: React.ReactNode;
  children: React.ReactNode;
  title: string;
}

export const Form = ({ buttons, children, title }: IFormProps) => (
  <>
    <FormHeader>
      <FormTitle>{title}</FormTitle>
      {buttons && <FormButtons>{buttons}</FormButtons>}
    </FormHeader>
    <FormContent>{children}</FormContent>
  </>
);
