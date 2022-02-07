import _ from "lodash/fp";
import Link from "next/link";
import styled from "styled-components";
import { SyncButton } from "../SyncButton";
import { getColor } from "../../../../functions";

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

export const HeaderTitle = styled.a`
  color: ${getColor("heading")};
  font-size: 1.25rem;
`;

export const Header = () => (
  <StyledHeader>
    <HeaderSide>
      <Link href="/" passHref>
        <HeaderTitle>dnd-ui-2</HeaderTitle>
      </Link>
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
