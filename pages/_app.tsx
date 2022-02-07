import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { dark, GlobalStyles, socket, SocketContext } from "~/providers";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  console.log({ pathname: router.route });

  // TODO: conditionally do stuff depending on the top-most route
  // e.g. apply base page (header, main area) for control pages

  return (
    <SocketContext.Provider value={socket}>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SocketContext.Provider>
  );
};

export default MyApp;
