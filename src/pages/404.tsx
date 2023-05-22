import { CommingSoon } from "../components/core/ComingSoon";
import { NotFoundPage } from "../components/core/NotFoundPage";
import { HeroOthers } from "../components/HeroOthers";
import { Page } from "../components/Page";

export default function Custom404() {
  return (
    <Page>
      <HeroOthers>404</HeroOthers>
      <NotFoundPage />
    </Page>
  );
}
