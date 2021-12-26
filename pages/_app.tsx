import type { AppProps } from "next/app";
import { socket, SocketContext } from "../context/socket";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SocketContext.Provider value={socket}>
    <Component {...pageProps} />
  </SocketContext.Provider>
);

export default MyApp;
