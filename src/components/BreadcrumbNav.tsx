import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const BreadcrumbNav = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/blogs" isCurrentPage>
          Blogs
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
