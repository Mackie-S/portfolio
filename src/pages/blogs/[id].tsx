import { client } from "../../libs/client";
import { Page } from "../../components/Page";
import { HeroOthers } from "../../components/HeroOthers";
import type { Blog } from "../../types/blog";
import { Box, Heading, Text, Image as ChakraImage, Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

type Props = {
  blog: Blog;
};

export default function BlogId({ blog }: Props) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const formattedDay = dayjs.utc(blog.publishedAt).tz("Asia/Tokyo").format("YYYY-MM-DD");
  return (
    <Page>
      <HeroOthers>Blog</HeroOthers>
      <Box p={["5%", "5%", "50px"]} m="auto" maxW="1000px">
        {blog.image ? (
          <ChakraImage w="100%" h="200px" mb="20px" objectFit="cover" src={blog.image.url} alt="" />
        ) : (
          <Flex w="100%" h="200px" bg="gray.100" mb="20px" justify="center">
            <Text fontSize="32px" fontWeight="bold" alignSelf="center">
              No Image
            </Text>
          </Flex>
        )}
        <Heading
          mb="10px"
          as="h2"
          size="lg"
          position="relative"
          display="inline-block"
          _after={{
            content: '""',
            display: "inline-block",
            width: "100%",
            height: "2px",
            position: "absolute",
            borderRadius: "2px",
            backgroundColor: "#2b5f2a",
            bottom: "-3px",
            left: "0",
          }}
        >
          {blog.title}
        </Heading>
        <Text mb="20px">{formattedDay}</Text>
        <Box
          lineHeight="2"
          _hover={{ color: "brand.gray" }}
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </Box>
    </Page>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: { id: string }) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
