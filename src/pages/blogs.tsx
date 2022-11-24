import type { InferGetStaticPropsType, NextPage } from "next";
import { HeroOthers } from "../components/HeroOthers";
import { Page } from "../components/Page";
import Link from "next/link";
import { client } from "../libs/client";
import { Card } from "../components/Card";
import { Grid, GridItem } from "@chakra-ui/react";
import { Categories } from "../components/Categories";

const blogs: NextPage = ({ blog, categories }: any) => {
  return (
    <Page>
      <HeroOthers>Blogs</HeroOthers>
      <Grid templateColumns="repeat(2,1fr)" gap={4} maxW="1180px" justifyContent="center" m="auto">
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {blog.map((blog: any, index: any) => (
            <Card key={index} blog={blog} />
          ))}
        </Grid>
        <Categories categories={categories} />
      </Grid>
    </Page>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const categoryData = await client.get({ endpoint: "categories" });

  return {
    props: {
      blog: data.contents,
      categories: categoryData.contents,
    },
  };
};

export default blogs;
