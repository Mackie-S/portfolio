import { client } from "../../libs/client";
import { Grid, Flex } from "@chakra-ui/react";
import { Page } from "../../components/Page";
import { HeroOthers } from "../../components/HeroOthers";
import { Categories } from "../../components/Categories";
import { Card } from "../../components/Card";
import type { Blog, Category } from "../../types/blog";
import { useRouter } from "next/router";

type Props = {
  blogs: Blog[];
  categories: Category[];
};

export default function CategoryId({ blogs, categories }: Props) {
  const router = useRouter();

  return (
    <Page>
      <HeroOthers>Blogs</HeroOthers>
      <Grid templateColumns={["1fr", "1fr", "2fr 1fr"]} gap={4} maxW="1380px" m="auto" p={["5%", "5%", "50px"]}>
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

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });

  const paths = data.contents.map((content: { id: string }) => `/category/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", queries: { filters: `category[equals]${id}` } });
  const categoryData = await client.get({ endpoint: "categories" });

  if (data.contents.length === 0) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blogs: data.contents,
      categories: categoryData.contents,
    },
  };
};
