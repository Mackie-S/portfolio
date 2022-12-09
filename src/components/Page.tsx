import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
