import React from "react";
import styled, { css } from "styled-components";
import { getColor } from "~/functions";

const spacing = css`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  ${spacing}
`;

export const FormGroupTitle = styled.h2`
  display: block;
  position: sticky;
  top: 0;
  margin: 0;
  padding: 0.5rem 1rem;
  background-color: ${getColor("banner3")};
  font-size: 1.5rem;
  font-weight: normal;
  color: ${getColor("heading")};

  ${spacing}
`;

export interface IFormGroupProps {
  children?: React.ReactNode;
  title?: string;
}

export const FormGroup = ({ children, title }: IFormGroupProps) => (
  <>
    {title && <FormGroupTitle>{title}</FormGroupTitle>}
    <StyledFormGroup>{children}</StyledFormGroup>
  </>
);
