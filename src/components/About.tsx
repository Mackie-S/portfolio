import { Heading, Box, Text, TextProps, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  const TextGold = (props: TextProps) => (
    <Text
      as="span"
      cursor="pointer"
      color="brand.dgold"
      _hover={{ color: "brand.gold" }}
      borderBottom="solid 1px"
      transition="color 100ms cubic-bezier(.08,.52,.52,1)"
      {...props}
    />
  );
  return (
    <Box p={["5%", "5%", 10]}>
      <Heading as="h2" size="2xl" id="about" textAlign="center" mb="50px">
        About
      </Heading>
      <Box margin="auto" maxW="935px" height={["unset", "unset", "530px"]} position="relative" display={["flex","flex","block"]} flexDirection="column" alignItems="center" gap={8}>
        <ChakraImage
          src="/images/About_img.webp"
          alt="著者の顔写真"
          display="inline-block"
          position={["unset", "unset", "absolute"]}
          left="0"
          top="0"
          w={["100%", "100%", "35%"]}
          maxW={["500px","500px","unset"]}
          objectFit="cover"
          zIndex="1"
          mr={["unset", "unset", "50%"]}
        />
        <Box
          bgColor="brand.lgray"
          padding={["5%", "10%", "60px 90px 60px 150px"]}
          position={["unset", "unset", "absolute"]}
          bottom="0"
          right="0"
          maxW="700px"
          w={["100%", "100%", "75%"]}
        >
          <Text>
            こんにちは、DaDa Labの
            <Text as="span" fontWeight="bold">
              Mackie
            </Text>
            と申します。 私の詳細プロフィールは
            <Link href="/profile">
              <TextGold>Profile</TextGold>
            </Link>
            をご覧ください。
            <br />
            Web制作、開発の学習及び実績のアウトプットとして本サイトを作成しました。
            <br />
            現在はフロントエンド技術に注力しておりまして、Reactを利用したサービス開発、Jamstack
            Architectureでの開発を行っております。
            <br />
            詳しくは
            <Link href="/skills">
              <TextGold>Skills</TextGold>
            </Link>
            、
            <Link href="/works">
              <TextGold>Works</TextGold>
            </Link>
            、
            <Link href="/blogs">
              <TextGold>Blogs</TextGold>
            </Link>
            をご覧ください。
            <br />
            その他、LPやWordPressテーマ開発のお仕事も承っておりますのでご興味ございましたら
            <Link href="/contact">
              <TextGold>お問い合せ</TextGold>
            </Link>
            ください。
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
