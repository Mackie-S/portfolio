import { Box, FormControl, FormLabel, Input, Textarea, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Form = () => {
  return (
    <Box maxW="500px" m="auto" py="50px">
      <form method="post" action="https://hyperform.jp/api/RCC4ie5v">
        <FormControl display="flex" flexDirection="column" gap={10}>
          <Box>
            <FormLabel fontWeight="bold">お名前</FormLabel>
            <Input type="text" name="お名前" placeholder="例）山田　太郎" required />
          </Box>
          <Box>
            <FormLabel fontWeight="bold">メールアドレス</FormLabel>
            <Input type="email" name="email" placeholder="例）example@example.com" required />
          </Box>
          <Box>
            <FormLabel fontWeight="bold">お問い合わせ内容</FormLabel>
            <Textarea name="お問い合わせ内容" required></Textarea>
          </Box>
          <Button type="submit">送信</Button>
        </FormControl>
      </form>
    </Box>
  );
};
