import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  ControlLayout,
  DefaultLayout,
  DisplayLayout,
  EditorLayout,
} from "../components";
import {
  dark,
  DataStoreProvider,
  GlobalStyles,
  socket,
  SocketContext,
} from "../providers";
import { IPage } from "../types";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const { collectionSelector } = Component as IPage;

  // Apply layout based on the page route and properties
  let Layout: typeof DefaultLayout | typeof EditorLayout = DefaultLayout;
  if (router.route.startsWith("/control")) {
    Layout = collectionSelector ? EditorLayout : ControlLayout;
  } else if (router.route.startsWith("/display")) {
    Layout = DisplayLayout;
  }

  return (
    <SocketContext.Provider value={socket}>
      <DataStoreProvider>
        <ThemeProvider theme={dark}>
          <GlobalStyles />
          <Layout collectionSelector={collectionSelector}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </DataStoreProvider>
    </SocketContext.Provider>
  );
};

export default MyApp;
