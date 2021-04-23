import React, { useEffect, useRef } from "react";
import { Box, Center, useTheme, Text, useColorMode } from "@chakra-ui/react";
import { useWindowSize, useMouse } from "react-use";
import { Button } from "@components";

export const Main: React.FC = () => {
  const theme = useTheme();
  const ref = React.useRef(null);
  const { colorMode } = useColorMode();
  const { width, height } = useWindowSize();
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(ref);
  const bubbles = useRef([{x: 100, y: 100, dx: 10, dy: 5}, {x: 300, y: 150, dx: 5, dy: -7}]);

  const canvasRef = useRef(null);

  useEffect(() => {
    if(canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      canvas.width  = width;
      canvas.height = height;

      context.fillStyle = 'rgba(0,0,0,0.90)';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);  // (0,0) the top left of the canvas
      context.clearRect(elX - 150, 0, 300, context.canvas.height);
    }
  }, [elX, elY, width, height])

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');

  //   const size = 100;

  //   bubbles.current = [];

  //   for(let i = 0; i < 300; i++) {
  //     const posX = Math.floor(Math.random() * context.canvas.width - size);
  //     const posY = Math.floor(Math.random() * context.canvas.height - size);
  //     const deltaX = Math.floor((Math.random() - 0.5) * 5) || 1;
  //     const deltaY = Math.floor((Math.random() - 0.5) * 5) || 1;

  //     bubbles.current.push({x: posX, y: posY, dx: deltaX, dy: deltaY});
  //   }

  //   // if(draw.current) {
  //   //   clearInterval(draw.current);
  //   // }

  //   const updatePosition = (bubble) => {
  //     bubble.x = bubble.x + bubble.dx;
  //     bubble.y = bubble.y + bubble.dy;
  //     if(bubble.x > context.canvas.width - size || bubble.x < 0) {
  //       bubble.dx = -bubble.dx;
  //     }
  //     if(bubble.y > context.canvas.height - size || bubble.y < 0) {
  //       bubble.dy = -bubble.dy;
  //     }

  //   }

  //   setInterval(() => {
  //     // context.fillStyle = 'rgba(0,0,0,0.7)';
  //     context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  //     bubbles.current.forEach(bubble => updatePosition(bubble));

  //     bubbles.current.forEach(bubble => {

  //       context.fillStyle = 'rgba(0,0,0,1)';
  //       context.fillRect(bubble.x, bubble.y, size, size);
  //     });
  //     // context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  //     // context.fillStyle = 'rgba(255,255,255,0.5)';

  //     // context.fillStyle = 'rgba(0,0,0,1)';
  //     // context.fillRect(0, 0, context.canvas.width, context.canvas.height);  // (0,0) the top left of the canvas
  //     // context.clearRect(elX, elY, 100, 100);
  //   }, 80)
  // }, [])

  return (
    <>
      <Box 
        // bg="main.100"
        h="100vh"
        w="100%"
        color="white"
        textAlign="center" 
        py={10}
        ref={ref}
        // bgGradient="linear(to-tr, #5C258D, #4389A2)"
        id="home"
        style={{
          position: "relative",
          backgroundColor: "rgba(0,0,0,0)"
        }}
        bgImage="url('/images/main-img.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        bgSize="cover"
        // borderBottomRightRadius="50%"
      >
        {/* <Box
          h="100vh"
          w="100%"
          top="0"
          bgGradient="linear(to-tr, #5C258D, #4389A2)"
          bgImage="url('/images/main-img.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          bgSize="cover"
          style={{
            position: "absolute",
            // transform: "skewY(-4deg)",
            // transformOrigin: "top left"
          }}
        ></Box> */}
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
            <Text textShadow="0px 5px 10px #000000" fontWeight={"bolder"} style={{ fontSize: theme.fontSizes["5xl"], padding: 0, margin: 0 }}>Andris Bērzkalns</Text>
            <Text textShadow="0px 5px 10px #000000" fontWeight={"bolder"}  style={{ fontSize: theme.fontSizes["lg"] }}>
              Software Engineer
            </Text>
            <Button boxShadow="2xl" mt={20} colorScheme="purple" variant="solid">Contact me</Button>
          </Box>
        </Center>
      </Box>
    </>
  );
};
