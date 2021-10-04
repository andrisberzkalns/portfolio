import React from "react";
import {
  Heading,
  useColorMode
} from "@chakra-ui/react";

interface TSectionHeading {
  isLight?: boolean
}

export const SectionHeader: React.FC<TSectionHeading> = ({children, isLight = false}) => {
  const { colorMode } = useColorMode();

  return (
      <Heading 
        // bgGradient={"linear(to-tr, #314755, #26a0da)"}
        bgGradient={ (colorMode == 'light' && !isLight) ? "linear(to-tr, #314755, #26a0da)" : "linear(to-tr, gray.100, gray.200)"}
        bgClip="text"
        style={{
          userSelect: "none"
        }}
        // data-aos="fade-up"
        // data-aos-duration="500"
      >
        {children}
      </Heading>
  );
};
