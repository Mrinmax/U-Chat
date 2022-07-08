import { Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const Chat = () => {
  return (
    <Flex p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
      <Avatar marginEnd={3} src="" />
      <Text>user@gmail.com</Text>
    </Flex>
  );
};

export default function Sidebar() {
  return (
    <Flex
      bg="blue.50"
      w="300px"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex
        bg="blue.50"
        h="81px"
        w="100%"
        align="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        p={3}
      >
        <Flex align="center">
          <Avatar src="" marginEnd={3} />
          <Text>Mrinal k sardar</Text>
        </Flex>
        <IconButton size="sm" icon={<CloseIcon />} />
      </Flex>

      <Button m={5} p={4} bg="blue.100">
        New chat
      </Button>

      <Flex
        overflowX="scroll"
        direction="column"
        flex={1}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </Flex>
    </Flex>
  );
}
