import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import bgImg from "../../public/images/background.webp";

type HeroOthersProps = {
  children: ReactNode;
};

export const HeroOthers = ({ children }: HeroOthersProps) => {
  return (
    <Flex justify="center" align="center" width="full" height="375px" bgImage={bgImg.src} bgSize="cover">
      <Flex direction="column" align="center" gap="30px">
        <Heading as="h1" size="4xl">
          {children}
        </Heading>
      </Flex>
    </Flex>
  );
};
