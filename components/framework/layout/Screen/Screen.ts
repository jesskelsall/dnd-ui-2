import styled from "styled-components";
import { getColour } from "../../../../functions";

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${getColour("background")};
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  color: ${getColour("text")};
`;
