import styled from "styled-components";
import { Button } from "../Button";
import { IButtonProps } from "../Button/Button";

// export const Dot = styled(Button)``;

export const StyledDot = styled(Button)`
  position: relative;
`;

export const DotLetter = styled.span`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export interface IDotProps extends IButtonProps {
  children?: React.ReactNode;
}

export const Dot = ({ children, ...props }: IDotProps) => (
  <StyledDot {...props}>
    &nbsp;<DotLetter>{children}</DotLetter>
  </StyledDot>
);
