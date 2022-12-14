import { client } from "../../libs/client";
import { Grid, Flex } from "@chakra-ui/react";
import { Page } from "../../components/Page";
import { HeroOthers } from "../../components/HeroOthers";
import { Categories } from "../../components/Categories";
import { Card } from "../../components/Card";
import type { Blog, Category } from "../../types/blog";

type Props = {
  blogs: Blog[];
  categories: Category[];
};

export default function CategoryId({ blogs, categories }: Props) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blogs.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <Page>
      <HeroOthers>Blogs</HeroOthers>
      <Grid templateColumns={["1fr", "1fr", "repeat(2,1fr)"]} gap={4} maxW="1380px" m="auto" p={["5%", "5%", "50px"]}>
        <Flex direction="column" gap={4}>
          {blogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
        </Flex>
        <Categories categories={categories} />
      </Grid>
    </Page>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content: { id: string }) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}` } });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blogs: data.contents,
      categories: categoryData.contents,
    },
  };
};
