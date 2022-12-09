import type { NextPage } from "next";
import { HeroOthers } from "../components/HeroOthers";
import { Page } from "../components/Page";
import { Form } from "../components/Form";

const contact: NextPage = () => {
  return (
    <Page>
      <HeroOthers>Contact</HeroOthers>
      <Form />
    </Page>
  );
};

export default contact;   
