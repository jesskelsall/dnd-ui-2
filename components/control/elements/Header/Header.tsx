import styled from "styled-components";
import _ from "lodash/fp";
import { getColor } from "~/functions";
import { SyncButton } from "~/components/control/elements/SyncButton";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${getColor("banner1")};
  padding: 0.5rem 1rem;
`;

export const HeaderSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderTitle = styled.span`
  color: ${getColor("heading")};
  font-size: 1.25rem;
`;

export const Header = () => (
  <StyledHeader>
    <HeaderSide>
      <HeaderTitle>dnd-ui-2</HeaderTitle>
    </HeaderSide>
    <HeaderSide>
      <SyncButton
        applyChanges={_.noop}
        changes={false}
        realTime={false}
        setRealTime={_.noop}
      />
    </HeaderSide>
  </StyledHeader>
);
