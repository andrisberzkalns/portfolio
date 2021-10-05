import React, { CSSProperties } from "react";
import { Image } from "@chakra-ui/react";
import { Box, Flex, Center, useColorMode } from "@chakra-ui/react";

const iconStyle: CSSProperties = {
  fontSize: 22,
  color: "#fff",
  marginRight: "0.25rem",
  marginLeft: "0.25rem",
  userSelect: "none",
};

export const Footer: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Center bg={colorMode === 'light' ? "header.100" : 'black'} py={10}>
      <Flex flexDirection="column">
        <Flex mt={5}>
          <Box mx={4}>
            <a
              href="https://github.com/andrisberzkalns"
              target="_blank"
              style={iconStyle}
              rel="noreferrer"
            >
              <Image
                src="/icons/github-icon.png"
                alt="github"
                width="28px"
                height="29px"
              />
            </a>
          </Box>
          <Box mx={4}>
            <a
              href="https://twitter.com/BerzkalnsAndris"
              target="_blank"
              style={iconStyle}
              rel="noreferrer"
            >
              <Image
                src="/icons/twitter-icon.png"
                alt="twitter"
                width="28px"
                height="28px"
              />
            </a>
          </Box>
          <Box mx={4}>
            <a
              href="https://www.linkedin.com/in/andris-b-584265a5/"
              target="_blank"
              style={iconStyle}
              rel="noreferrer"
            >
              <Image
                src="/icons/linkedin-icon.png"
                layout="fill"
                alt="linkedin"
                width="28px"
                height="32px"
              />
            </a>
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};
