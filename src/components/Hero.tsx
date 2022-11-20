import { Flex, Box, Button, Heading } from "@chakra-ui/react";
import Link from "next/link";
import bgImg from "../../public/images/background.webp";

export const Hero = () => {
  return (
    <Flex justify="center" align="center" width="full" height="100vh" bgImage={bgImg.src} bgSize="cover">
      <Flex direction="column" align="center" gap="30px">
        <Heading as="h1" size="4xl">
          Mackie Lab
        </Heading>
        <Link href="#about">
          <Button
            as="a"
            cursor="pointer"
            bgColor="brand.gray"
            _hover={{ opacity: "0.7" }}
            _active={{ opacity: "0.5" }}
            color="white"
            width="140px"
            height="50px"
            rounded="50px"
          >
            About
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
