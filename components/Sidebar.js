import { Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Button, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { addDoc, collection } from "firebase/firestore";
import getOtherEmail from "../utils/getOtherEmail";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [user] = useAuthState(auth);
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const router = useRouter();

  const redirect = (id) => {
    router.push(`/chat/${id}`);
  };

  const chatExists = (email) =>
    chats?.find(
      (chat) => chat.users.includes(user.email) && chat.users.includes(email)
    );

  const newChat = async () => {
    const input = prompt("Enter email of chat partner");
    if (!chatExists(input) && input !== user.email) {
      await addDoc(collection(db, "chats"), { users: [user.email, input] });
    }
  };

  const chatList = () => {
    return chats
      ?.filter((chat) => chat.users.includes(user.email))
      .map((chat) => (
        <Flex
          onClick={() => redirect(chat.id)}
          key={Math.random()}
          p={3}
          align="center"
          _hover={{ bg: "gray.100", cursor: "pointer" }}
        >
          <Avatar marginEnd={3} src="" />
          <Text>{getOtherEmail(chat.users, user)}</Text>
        </Flex>
      ));
  };

  return (
    <Flex
      bg="blue.50"
      h="100%"
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
          <Avatar src={user.photoURL} marginEnd={3} />
          <Text>{user.displayName}</Text>
        </Flex>
        <IconButton
          onClick={() => signOut(auth)}
          size="sm"
          icon={<CloseIcon />}
        />
      </Flex>

      <Button onClick={() => newChat()} m={5} p={4} bg="blue.100">
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
        {chatList()}
      </Flex>
    </Flex>
  );
}
