import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export const Categories = ({ categories }: any) => {
  return (
    <Box>
      <UnorderedList>
        {categories.map((category: any) => {
          return (
            <ListItem key={category.id}>
              <Link href={`/category/${category.id}`}>
                {category.name}
              </Link>
            </ListItem> 
          );
        })}
      </UnorderedList>
    </Box>
  );
};
