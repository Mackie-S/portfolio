import type { NextPage } from "next";
import { HeroOthers } from "../../components/HeroOthers";
import { Page } from "../../components/Page";
import { client } from "../../libs/client";
import { Card } from "../../components/Card";
import { Flex, Grid } from "@chakra-ui/react";
import { Categories } from "../../components/Categories";
import type { Blog, Category } from "../../types/blog";

type Props = {
  blogs: Blog[];
  categories: Category[];
};

const blogs: NextPage<Props> = ({ blogs, categories }: Props) => {
  return (
    <Page>
      <HeroOthers>Blogs</HeroOthers>
      <Grid
        templateColumns={["1fr", "1fr", "2fr 1fr"]}
        gap={4}
        maxW="1380px"
        m="auto"
        p={["5%", "5%", "50px"]}
      >
        <Flex direction="column" gap={4}>
          {blogs.map((blog, index) => (
            <Card key={index} blog={blog} />
          ))}
        </Flex>
        <Categories categories={categories} />
      </Grid>
    </Page>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blogs: data.contents,
      categories: categoryData.contents,
    },
  };
};

export default blogs;
