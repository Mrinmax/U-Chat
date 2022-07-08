import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Center h="100vh">
        <Stack
          align="center"
          bgColor="whitesmoke"
          padding={16}
          rounded="3xl"
          spacing={12}
          boxShadow="lg"
        >
          <Box
            bgColor="#2dfdb8"
            w="fit-content"
            p={5}
            rounded="3xl"
            boxShadow="md"
          >
            <ChatIcon w="100px" h="100px" color="white" />
          </Box>
          <Button boxShadow="md">Sign in with Google</Button>
        </Stack>
      </Center>
    </>
  );
}
