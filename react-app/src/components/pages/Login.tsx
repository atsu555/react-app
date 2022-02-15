import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryBtn } from "../atoms/button/PrimaryBtn";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setuserId] = useState('');

  const onClickLogin = () => login(userId);

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setuserId(e.target.value);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
          <PrimaryBtn
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryBtn>
        </Stack>
      </Box>
    </Flex>
  )
});