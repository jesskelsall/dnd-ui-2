import _ from "lodash/fp";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  ControlLayout,
  DefaultLayout,
  DisplayLayout,
  EditorLayout,
} from "../components";
import { APP_NAME } from "../consts";
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
  const { route } = router;

  const { collectionSelector } = Component as IPage;

  // Apply layout based on the page route and properties
  let Layout: typeof DefaultLayout | typeof EditorLayout = DefaultLayout;
  if (route.startsWith("/control")) {
    Layout = collectionSelector ? EditorLayout : ControlLayout;
  } else if (route.startsWith("/display")) {
    Layout = DisplayLayout;
  }

  // Prepare the page's title
  const routeParts = route.split("/").slice(1);
  let title = APP_NAME;

  if (routeParts.length) {
    title += ` ${_.startCase(routeParts[0])}`;

    if (routeParts.length > 1) {
      title += `: ${_.startCase(_.last(routeParts) as string)}`;
    }
  }

  return (
    <SocketContext.Provider value={socket}>
      <DataStoreProvider>
        <ThemeProvider theme={dark}>
          <Head>
            <title>{title}</title>
          </Head>
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
