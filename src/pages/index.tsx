import type { NextPage } from "next";
import { Page } from "../components/Page";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { BreadcrumbNav } from "../components/BreadcrumbNav";

const Home: NextPage = () => {
  return (
    <Page>
      <Hero />
      <Container>
        <About />
      </Container>
    </Page>
  );
};

export default Home;
