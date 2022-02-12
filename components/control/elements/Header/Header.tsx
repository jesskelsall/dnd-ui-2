import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { APP_NAME } from "../../../../consts";
import { getColour, updateDataStore } from "../../../../functions";
import { useDataStore, useSocket } from "../../../../providers";
import { Breadcrumbs } from "../Breadcrumb";
import { SyncButton } from "../SyncButton";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${getColour("banner1")};
  padding: 0.5rem 1rem;
`;

export const HeaderSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderTitle = styled.a`
  color: ${getColour("heading")};
  font-size: 1.25rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  const router = useRouter();
  const socket = useSocket();
  const { dataStore } = useDataStore();

  const applyChanges = () => {
    updateDataStore(socket, {
      action: "sync-applychanges",
      payload: undefined,
    });
  };

  const setRealTime = (realTime: boolean) => {
    updateDataStore(socket, {
      action: "sync-set-realtime",
      payload: realTime,
    });
  };

  return (
    <StyledHeader>
      <HeaderSide>
        <Link href="/" passHref>
          <HeaderTitle>{APP_NAME}</HeaderTitle>
        </Link>
        <Breadcrumbs route={router.route} />
      </HeaderSide>
      <HeaderSide>
        <SyncButton
          applyChanges={applyChanges}
          changes={dataStore.sync.changes}
          realTime={dataStore.sync.realTime}
          setRealTime={setRealTime}
        />
      </HeaderSide>
    </StyledHeader>
  );
};
