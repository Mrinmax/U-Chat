import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";

const Topbar = () => {
  return (
    <Flex bg="blue.50" h="75px" w="100%" align="center" p={5}>
      <Avatar src="" marginEnd={3} />
      <Heading size="lg">user@gmail.com</Heading>
    </Flex>
  );
};

const Bottombar = () => {
  return (
    <FormControl p={3}>
      <Input placeholder="Type message" />
      <Button type="submit" hidden autoComplete="off">
        Submit
      </Button>
    </FormControl>
  );
};

export default function Chat() {
  return (
    <Flex h="100vh">
      <Sidebar />
      <Flex flex={1} direction="column">
        <Topbar />
        <Flex
          flex={1}
          direction="column"
          pt={4}
          mx={5}
          overflowX="scroll"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex
            bg="blue.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="green.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="blue.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="green.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="blue.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="green.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="blue.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="green.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="blue.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="green.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="blue.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="green.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="blue.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
          <Flex
            bg="green.50"
            w="fit-content"
            minWidth="10px"
            borderRadius="lg"
            p={3}
            m={1}
            alignSelf="flex-end"
          >
            <Text>This is a dummy messsage</Text>
          </Flex>
        </Flex>
        <Bottombar />
      </Flex>
    </Flex>
  );
}
