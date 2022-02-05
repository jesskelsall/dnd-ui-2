import styled from "styled-components";
import { Button } from "../Button";

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;

  ${Button}:not(:first-of-type) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  ${Button}:not(:last-of-type) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  ${Button} + ${Button} {
    margin-left: 1px;
  }
`;
