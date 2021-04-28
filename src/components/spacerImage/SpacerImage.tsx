import React from "react";
import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import { SectionHeader } from "@components";

const SpacerImage: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      w="100%"
      h="250px" 
      centerContent
      bgImage="url('/images/main-img.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      bgSize="cover"
      position="relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: "0",
          width: "100%",
          height: "100px"
        }}
      >
        {/* <polygon fill={colorMode == 'light' ? "white" : "rgb(26,32,44)" } points="0,0 0,100 50,0 100,0 100,100 50, 0"/> */}
        <polygon fill={colorMode == 'light' ? "white" : "rgb(26,32,44)" } points="0,0 50,100 100,0"/>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "100px"
        }}
      >
        <polygon fill={colorMode == 'light' ? "white" : "rgb(26,32,44)" } points="0,0 50,100 100,0 100,100 0,100"/>
      </svg>
    </Box>
  )
}

export default SpacerImage;