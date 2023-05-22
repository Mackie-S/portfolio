import type { NextPage } from "next";
import { Page } from "../components/Page";
import { About } from "../components/orgs/About";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
      <About />
    </Page>
  );
};

export default Home;
