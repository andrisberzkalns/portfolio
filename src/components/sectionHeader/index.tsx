import React from "react";
import {
  Heading,
  useColorMode
} from "@chakra-ui/react";

export const SectionHeader: React.FC = ({children}) => {
  const { colorMode } = useColorMode();

  return (
      <Heading 
        bgGradient={ colorMode == 'light' ? "linear(to-tr, #314755, #26a0da)" : "linear(to-tr, gray.100, gray.200)"}
        bgClip="text"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        {children}
      </Heading>
  );
};
