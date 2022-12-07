import Image from "next/image";
import Link from "next/link";
import { Flex, Box, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import { EventHandler, useDebugValue, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MenuButton } from "./MenuButton";

export const Header = () => {
  const navMenus = [
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Works",
      link: "/works",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [bgColor, setBgColor] = useState("unset");
  useEffect(() => {
    if (window.innerHeight < window.scrollY) {
      console.log(window.innerHeight, window.scrollY);
      setBgColor("whiteAlpha.700");
    }
  }, []);

  // ヘッダーナビ下線プロパティ
  const underline = {
    content: '""',
    display: "inline-block",
    position: "absolute",
    width: "100%",
    height: "4px",
    borderRadius: "4px",
    backgroundColor: "#2b5f2a",
    bottom: "-3px",
    left: "0",
    opacity: "1",
    transitionDuration: "0.9s",
  };

  const router = useRouter();

  return (
    <Flex
      justifyContent="space-between"
      position="fixed"
      w="full"
      padding="0 30px"
      zIndex="1000"
      opacity="0.7"
      bgColor={bgColor}
    >
      <Link href="/">
        <Box cursor="pointer">
          <Image src="/images/logo_black.svg" alt="サイトロゴ" width={50} height={50} />
        </Box>
      </Link>
      <MenuButton navMenus={navMenus} />
      <UnorderedList display={["none", "none", "flex"]} gap={10} listStyleType="none" alignItems="center">
        {navMenus.map((value, index) => {
          return (
            <Link key={index} href={value.link}>
              <ListItem
                fontWeight="bold"
                position="relative"
                display="inline-block"
                cursor="pointer"
                color={router.pathname === value.link ? "brand.gray" : "black"}
                _hover={{ _after: underline, color: "brand.gray" }}
                _after={router.pathname === value.link ? underline : { opacity: "0" }}
              >
                {value.name}
              </ListItem>
            </Link>
          );
        })}
      </UnorderedList>
    </Flex>
  );
};
