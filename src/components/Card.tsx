// Blogsのカードレイアウト
import { client } from "../libs/client";

import { Box, Stack, Heading, Text, Image as ChakraImage, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import bgImg from "../../public/images/background.webp";

export const Card = ({ blog }: any) => {
  return (
    <Box py={6}>
      <Link href={`/blog/${blog.id}`} key={blog.id}>
        <a>
          <Box
            bg={"white"}
            boxShadow={"base"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
            _hover={{ boxShadow: "xl" }}
            w="380px"
            h="560px"
            transitionDuration="0.2s"
          >
            <Flex h="210px" bg="gray.100" mt={-6} mx={-6} mb={6} pos={"relative"} justify="center">
              {blog.image ? (
                <ChakraImage h="210px" src={blog.image.url} alt="" />
              ) : (
                <Text fontSize="32px" fontWeight="bold" alignSelf="center">
                  No Image
                </Text>
              )}
            </Flex>
            <Stack>
              <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
                {blog.title}
              </Heading>
              <Text color={"gray.500"}>{blog.content}</Text>
            </Stack>
          </Box>
        </a>
      </Link>
    </Box>
  );
};
