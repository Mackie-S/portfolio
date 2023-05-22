import { Flex, Heading, List, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import type { Category } from "../types/blog";

type Props = {
  categories: Category[];
};

export const Categories = ({ categories }: Props) => {
  return (
    <Flex gap={4} direction="column">
      <Heading as="h3" size="md" bgColor="#eee" py="6px" px="10px" borderRadius="5px">
        カテゴリー
      </Heading>
      <List>
        {categories.map((category) => {
          return (
            <Link key={category.id} href={`/category/${category.id}`}>
              <ListItem
                mb={5}
                py="6px"
                px="10px"
                position="relative"
                _after={{
                  content: '""',
                  display: "inline-block",
                  width: "100%",
                  height: "1px",
                  position: "absolute",
                  borderRadius: "1px",
                  backgroundColor: "#eee",
                  bottom: "-3px",
                  left: "0",
                }}
              >
                {category.name}
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Flex>
  );
};
