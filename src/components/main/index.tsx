import React, { useEffect, useRef } from "react";
import { Box, Center, useTheme, Text, Image, useColorMode } from "@chakra-ui/react";
import { useWindowSize, useMouse, useOrientation } from "react-use";
import { Button } from "@components";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRightIcon } from "@chakra-ui/icons";

export const Main: React.FC = () => {
  const theme = useTheme();
  const ref = React.useRef(null);
  const canvasRef = useRef(null);
  const orientation = useOrientation();
  const { colorMode } = useColorMode();
  const { width, height } = useWindowSize();
  const { elX, elY } = useMouse(ref);

  console.log(orientation);

  useEffect(() => {
    if(canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      canvas.width  = width;
      canvas.height = height;

      

      context.fillStyle = 'rgba(0,0,0,0.4)';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);  // (0,0) the top left of the canvas
      context.clearRect(elX - 150, 0, 300, context.canvas.height);
      const grd = context.createLinearGradient(elX - 150, 0, elX + 150, 0);
      grd.addColorStop(0, "rgba(0,0,0,0.4)");
      grd.addColorStop(0.5, "rgba(0,0,0,0)");
      grd.addColorStop(1, "rgba(0,0,0,0.4)");

      context.fillStyle = grd;
      // context.fillStyle = 'rgba(0,0,0,0.15)';
      context.fillRect(elX - 150, 0, 300, context.canvas.height);  // (0,0) the top left of the canvas
      // context.fillRect(elX + 150, 0, -50, context.canvas.height);  // (0,0) the top left of the canvas
      // context.fillStyle = 'rgba(0,0,0,0.15)';
      // context.fillRect(elX - 100, 0, 100, context.canvas.height);  // (0,0) the top left of the canvas

    }
  }, [elX, elY, width, height])

  return (
    <>
      <Box 
        // bg="main.100"
        h="100vh"
        w="100%"
        color="white"
        textAlign="center" 
        ref={ref}
        id="home"
        style={{
          position: "relative",
          backgroundColor: "rgba(0,0,0,1)"
        }}
        bgImage="url('/images/main-img.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
      >
        {
          width > 800 &&
          <canvas style={{position: "absolute", top: 0, left: 0, width: '100%', height: '100%'}} ref={canvasRef} />
        }
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "100px"
          }}
        >
          {/* <polygon fill="white" points="0,100 50,0 100,100"/> */}
          <polygon fill={colorMode == 'light' ? "white" : "rgb(26,32,44)" } points="0,0 50,100 100,0 100,100 0,100 0,0"/>
        </svg>
        <Center h="100%">
          <Box data-aos="zoom-in">
            <Center>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="/images/profile-img-color.jpg"
                alt="Andris Bērzkalns"
                style={{boxShadow: "0px 5px 10px #000"}}
              />
            </Center>
            <Text textShadow="0px 5px 10px #000" fontWeight={"bolder"} style={{ fontSize: theme.fontSizes["4xl"], padding: 0, margin: 0 }}>Hi, my name is Andris Bērzkalns</Text>
            <Text textShadow="0px 5px 10px #000" fontWeight={"bolder"}  style={{ fontSize: theme.fontSizes["lg"] }}>
              I am a Software Engineer / Full-Stack Web Developer.
            </Text>
            <ScrollLink
              activeClass="active"
              to={'contact'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button mt={20} colorScheme="purple" variant="solid" style={{boxShadow: "0px 5px 10px #000"}}>Contact me</Button>
            </ScrollLink>
          </Box>
          <Box position="absolute" bottom={20} _hover={{cursor: "pointer", transform: "translateY(5px)"}}>
            <ScrollLink
              activeClass="active"
              to={'about'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                padding: 5
              }}
            >
              <Center>
                <ArrowRightIcon style={{transform: "rotate(90deg)"}} color="white" w="6" h="6"/>
              </Center>
            </ScrollLink>
          </Box>
        </Center>
      </Box>
    </>
  );
};
