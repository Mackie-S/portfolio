import type { NextPage } from "next";
import { CommingSoon } from "../components/ComingSoon";
import { HeroOthers } from "../components/HeroOthers";
import { Page } from "../components/Page";

const profile: NextPage = () => {
  return (
    <Page>
      <HeroOthers>Profile</HeroOthers>
      <CommingSoon />
    </Page>
  );
};

export default profile;
