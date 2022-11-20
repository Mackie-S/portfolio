import { Box, Heading } from "@chakra-ui/react";

export const CommingSoon = () => {
  return (
    <Box bgColor="brand.lgray" w="90%" margin="100px auto" padding="5%">
      <Heading as="h3" size="xl" textAlign="center">
        🚧作成中です。しばらくお待ちください🚧
      </Heading>
    </Box>
  );
};
