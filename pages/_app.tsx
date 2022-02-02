import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { dark, GlobalStyles, socket, SocketContext } from "~/providers";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SocketContext.Provider value={socket}>
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </SocketContext.Provider>
);

export default MyApp;
