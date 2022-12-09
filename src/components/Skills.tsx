import { Box, Flex, Image as ChakraImage } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Skills = () => {
  return (
    <Box  maxW="1300px" mx="auto">
      <Flex justify="center" align="center" h="500px">
        <Link href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
            cursor="pointer"
          />
        </Link>
        <Link href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="figma"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="firebase"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://grafana.com" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg"
            alt="grafana"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://gulpjs.com" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg"
            alt="gulp"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <ChakraImage src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40" />
        </Link>
        <Link href="https://www.php.net" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            alt="php"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://sass-lang.com" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
            alt="sass"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="tailwind"
            width="40"
            height="40"
          />
        </Link>
        <Link href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
          <ChakraImage
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="40"
            height="40"
          />
        </Link>
      </Flex>
    </Box>
  );
};

export default Skills;
