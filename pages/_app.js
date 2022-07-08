import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Chat from "./chat/[id]";

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <ChakraProvider>
      <Chat />
    </ChakraProvider>
  );
}

export default MyApp;
