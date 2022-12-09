import { Menu, MenuList, MenuItem, MenuButton as ChakraMenuButton, IconButton, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

type NavMenu = {
  name: string;
  link: string;
};

type MenuButtonProps = {
  navMenus: NavMenu[];
};

export const MenuButton = ({ navMenus }: MenuButtonProps) => {
  const router = useRouter();
  return (
    <Box display={["block", "block", "none"]} mt="20px">
      <Menu>
        <ChakraMenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
        <MenuList>
          {navMenus.map((value, index) => {
            return (
              <Link key={index} href={value.link}>
                <MenuItem
                  fontWeight="bold"
                  position="relative"
                  display="inline-block"
                  color={router.pathname === value.link ? "brand.gray" : "black"}
                >
                  {value.name}
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    </Box>
  );
};
