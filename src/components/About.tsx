import { Heading, Box, Text, TextProps } from "@chakra-ui/react";
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
    <article>
      <Heading as="h2" size="2xl" id="about" textAlign="center">
        About
      </Heading>
      <Box margin="auto" maxW="1330px" height="530px" position="relative">
        <Box position="absolute" left="0" top="0" w="460px" h="460px" zIndex="1">
          <Image src="/images/About_img.webp" alt="著者の顔写真" layout="fill" />
        </Box>
        <Box bgColor="brand.lgray" padding="60px 90px 60px 150px" position="absolute" bottom="0" right="0" maxW="870px">
          <Text>
            こんにちは、Mackie Labの
            <Text as="span" fontWeight="bold">
              Mackie
            </Text>
            と申します。 私の詳細プロフィールは{" "}
            <Link href="/profile">
              <TextGold>Profile</TextGold>
            </Link>{" "}
            をご覧ください。
            <br />
            Web制作、開発の学習及び実績のアウトプットとして本サイトを作成しました。
            <br />
            現在はフロントエンド技術に注力しておりまして、Reactを利用したサービス開発、Jamstackでの開発を行っております。
            <br />
            詳しくは{" "}
            <Link href="/skills">
              <TextGold>Skills</TextGold>
            </Link>
            、{" "}
            <Link href="/works">
              <TextGold>Works</TextGold>
            </Link>
            、{" "}
            <Link href="/blog">
              <TextGold>Blog</TextGold>
            </Link>{" "}
            をご覧ください。
            <br />
            その他、LPやWordPressテーマ開発のお仕事も承っておりますのでご興味ございましたら{" "}
            <Link href="/contact">
              <TextGold>お問い合せ</TextGold>
            </Link>{" "}
            ください。
          </Text>
        </Box>
      </Box>
    </article>
  );
};
