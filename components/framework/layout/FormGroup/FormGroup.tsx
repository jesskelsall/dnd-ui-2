import React from "react";
import styled from "styled-components";
import { getColour } from "../../../../functions";

export interface IStyledFormGroupProps {
  flex?: boolean;
}

export const StyledFormGroup = styled.div<IStyledFormGroupProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${(props) => props.flex && "flex: 1;"}
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const FormGroupTitle = styled.h2`
  display: block;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: ${getColour("banner3")};
  font-size: 1.5rem;
  font-weight: normal;
  color: ${getColour("heading")};
`;

export interface IFormGroupProps {
  children?: React.ReactNode;
  flex?: boolean;
  title?: string;
}

export const FormGroup = ({ children, flex, title }: IFormGroupProps) => (
  <>
    {title && <FormGroupTitle>{title}</FormGroupTitle>}
    <StyledFormGroup flex={flex}>{children}</StyledFormGroup>
  </>
);
