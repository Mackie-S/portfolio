import { ReactElement, ReactNode } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
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
