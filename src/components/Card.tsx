// Blogsのカードレイアウト
import { client } from "../libs/client";
import { Center, Box, Stack, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ blog }: any) => {
  return (
    <Center py={6}>
      {blog.map((blog: any) => {
        return (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <a>
              <Box
                maxW={"445px"}
                w={"full"}
                bg={"white"}
                boxShadow={"base"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
                _hover={{ boxShadow: "xl" }}
                transitionDuration="0.2s"
              >
                <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
                  {blog.image ? (
                    <picture>
                      {/* <source srcSet={blog.image.url + "?w=160&h=160&fit=crop&dpr=2 2x"} /> */}
                      <img src={`${blog.image.url}?fit=crop&h=210&w=300`} alt="" />
                    </picture>
                  ) : (
                    <Image src="/images/About_img.webp" layout={"fill"} alt="投稿画像" />
                  )}
                </Box>
                <Stack>
                  <Text
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    Blog
                  </Text>
                  <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
                    {blog.title}
                  </Heading>
                  <Text color={"gray.500"}>{blog.body}</Text>
                </Stack>
              </Box>
            </a>
          </Link>
        );
      })}
    </Center>
  );
};
