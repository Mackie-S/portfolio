import type { NextPage } from "next";
import { CommingSoon } from "../components/ComingSoon";
import { HeroOthers } from "../components/HeroOthers";
import { Page } from "../components/Page";
import { SalesCondition } from "../components/SalesCondition";

const profile: NextPage = () => {
  return (
    <Page>
      <HeroOthers>Profile</HeroOthers>
      <CommingSoon />
      <SalesCondition />
    </Page>
  );
};

export default profile;
