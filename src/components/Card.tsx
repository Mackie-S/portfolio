// Blogsのカードレイアウト
import { Heading, Text, Image as ChakraImage, Flex } from "@chakra-ui/react";
import Link from "next/link";
import type { Blog } from "../types/blog";

type Props = {
  blog: Blog;
};

export const Card = ({ blog }: Props) => {
  return (
    <Link href={`/blog/${blog.id}`} key={blog.id}>
      <a>
        <Flex
          bg={"white"}
          boxShadow={"base"}
          rounded={"md"}
          gap={6}
          p={6}
          h="200px"
          overflow="hidden"
          _hover={{ boxShadow: "xl" }}
          transitionDuration="0.2s"
        >
          <Flex w="40%" h="100%" bg="gray.100" justify="center">
            {blog.image ? (
              <ChakraImage w="100%" objectFit="cover" src={blog.image.url} alt="" />
            ) : (
              <Text fontSize="32px" fontWeight="bold" alignSelf="center">
                No Image
              </Text>
            )}
          </Flex>
          <Heading w="60%" color={"gray.700"} fontSize={"xl"} fontFamily={"body"}>
            {blog.title}
          </Heading>
          <Text></Text>
        </Flex>
      </a>
    </Link>
  );
};
