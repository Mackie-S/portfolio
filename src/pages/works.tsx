import type { NextPage } from "next";
import { CommingSoon } from "../components/core/ComingSoon";
import { HeroOthers } from "../components/HeroOthers";
import { Page } from "../components/Page";

const works: NextPage = () => {
  return (
    <Page>
      <HeroOthers>Works</HeroOthers>
      <CommingSoon />
    </Page>
  );
};

export default works;
