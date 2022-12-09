import { Heading, Flex, Image as ChakraImage } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Flex
      bgColor="brand.gray"
      w="full"
      h="150px"
      padding="20px"
      direction="column"
      justify="center"
      position="relative"
    >
      <Flex gap={["20px","20px","45px"]} position="absolute" top="20px">
        <Link href="/">
          <a>
            <ChakraImage
              src="/images/logo_white.svg"
              alt="サイトロゴ"
              w={["20px", "20px", "30px"]}
              h={["20px", "20px", "30px"]}
            />
          </a>
        </Link>
        <Link href="https://twitter.com/mackie_eng_web">
          <a target="_blank" rel="noopener">
            <ChakraImage
              src="/images/twitter_icon.svg"
              alt="サイトロゴ"
              w={["20px", "20px", "30px"]}
              h={["20px", "20px", "30px"]}
            />
          </a>
        </Link>{" "}
        <Link href="https://github.com/Mackie-S">
          <a target="_blank" rel="noopener">
            <ChakraImage
              src="/images/github_icon.svg"
              alt="サイトロゴ"
              w={["20px", "20px", "30px"]}
              h={["20px", "20px", "30px"]}
            />
          </a>
        </Link>
      </Flex>
      <Heading as="h2" size={["sm", "sm", "md"]} color="white" alignSelf="center">
        Copyright ©️ 2022 DaDa Lab
      </Heading>
    </Flex>
  );
};
