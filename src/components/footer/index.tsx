import React, { CSSProperties } from "react";
import Image from "next/image";
import { Box, Flex, Center, useColorMode } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  const { colorMode } = useColorMode();

  const iconStyle: CSSProperties = {
    fontSize: 22,
    color: "#fff",
    marginRight: "0.25rem",
    marginLeft: "0.25rem",
  };
  return (
    <Center bg={colorMode == 'light' ? "header.100" : "header.100"} py={10}>
      <Flex flexDirection="column">
        <Flex mt={5}>
          <Box mx={1}>
            <a href="https://github.com/andrisberzkalns" target="_blank" style={iconStyle}>
              <Image
                src="/icons/github-icon.svg"
                alt="github"
                width="28"
                height="29"
              />
            </a>
          </Box>
          <Box mx={1}>
            <a
              href="https://twitter.com/BerzkalnsAndris"
              target="_blank"
              style={iconStyle}
            >
              <Image
                src="/icons/twitter-icon.svg"
                alt="twitter"
                width="28"
                height="28"
              />
            </a>
          </Box>
          <Box mx={1}>
            <a
              href="https://www.linkedin.com/in/andris-b-584265a5/"
              target="_blank"
              style={iconStyle}
            >
              <Image
                src="/icons/linkedin-icon.svg"
                alt="linkedin"
                width="28"
                height="32"
              />
            </a>
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};
