import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ControlLayout, DefaultLayout } from "../components";
import {
  dark,
  DataStoreProvider,
  GlobalStyles,
  socket,
  SocketContext,
} from "../providers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Apply layout based on the page route
  let Layout = DefaultLayout;
  if (router.route.startsWith("/control/")) Layout = ControlLayout;

  return (
    <SocketContext.Provider value={socket}>
      <DataStoreProvider>
        <ThemeProvider theme={dark}>
          <GlobalStyles />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </DataStoreProvider>
    </SocketContext.Provider>
  );
};

export default MyApp;
