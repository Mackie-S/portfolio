import { Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <Flex bgColor="brand.gray" w="full" height="150px" padding="20px" direction="column">
      <Flex gap="45px">
        <Link href="/">
          <a>
            <Image src="/images/logo_white.svg" alt="サイトロゴ" width="30px" height="30px" />
          </a>
        </Link>
        <Link href="https://twitter.com/mackie_eng_web">
          <a target="_blank" rel="noopener">
            <Image src="/images/twitter_icon.svg" alt="サイトロゴ" width="30px" height="30px" />
          </a>
        </Link>{" "}
        <Link href="https://github.com/Mackie-S">
          <a target="_blank" rel="noopener">
            <Image src="/images/github_icon.svg" alt="サイトロゴ" width="30px" height="30px" />
          </a>
        </Link>
      </Flex>
      <Heading as="h2" size="md" color="white" alignSelf="center" justifySelf="center">
        Copyright ©️ 2022 DaDa Lab
      </Heading>
    </Flex>
  );
};
