import type { NextPage } from "next";
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
      <Grid templateColumns="repeat(3,1fr)">
        <GridItem>
          <Categories categories={categories} />
        </GridItem>
        <Card blog={blog} />
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
