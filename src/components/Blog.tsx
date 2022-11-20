import type { NextPage } from "next";
import { HeroOthers } from "../components/HeroOthers";
import { Page } from "../components/Page";
import Link from "next/link";
import { client } from "../libs/client";

export const Blog = ({ blog }: any) => {
  return (
    <div>
      <ul>
        {blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });

//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };
