import Link from "next/link";
import { client } from "../../libs/client";
import { Grid } from "@chakra-ui/react";
import { Page } from "../../components/Page";
import { HeroOthers } from "../../components/HeroOthers";
import { Categories } from "../../components/Categories";
import { Card } from "../../components/Card";

export default function CategoryId({ blog, categories }: any) {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blog.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <Page>
      <HeroOthers>Blogs</HeroOthers>
      <Grid templateColumns="repeat(3,1fr)">
        <Categories categories={categories} />
        <Card blog={blog} />
      </Grid>
    </Page>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content: any) => `/category/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", queries: { filters: `category[equals]${id}` } });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      categories: categoryData.contents,
    },
  };
};
