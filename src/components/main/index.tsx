import React, { useEffect, useRef } from "react";
import { Box, Center, useTheme, Text, Image, useColorMode } from "@chakra-ui/react";
import { useWindowSize, useMouse } from "react-use";
import useSpring from "react-use/lib/useSpring";
import { Button } from "@components";
import { Link as ScrollLink } from "react-scroll";

const LIGHT_SIZE = 900;

export const Main: React.FC = () => {
	const theme = useTheme();
	const ref = React.useRef(null);
	const canvasRef = useRef(null);
	const { colorMode } = useColorMode();
	const { width, height } = useWindowSize();
	const { elX, elY } = useMouse(ref);

	const sprintHoverPosition = useSpring(elX);

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext("2d");
			canvas.width = width;
			canvas.height = height;

			context.fillStyle = "rgba(0,0,0,0.4)";
			context.fillRect(0, 0, context.canvas.width, context.canvas.height); // (0,0) the top left of the canvas
			context.clearRect(sprintHoverPosition - LIGHT_SIZE / 2, 0, LIGHT_SIZE, context.canvas.height);
			const grd = context.createLinearGradient(sprintHoverPosition - LIGHT_SIZE / 2, 0, sprintHoverPosition + LIGHT_SIZE / 2, 0);
			grd.addColorStop(0, "rgba(0,0,0,0.4)");
			grd.addColorStop(0.5, "rgba(0,0,0,0)");
			grd.addColorStop(1, "rgba(0,0,0,0.4)");

			context.fillStyle = grd;
			context.fillRect(sprintHoverPosition - LIGHT_SIZE / 2, 0, LIGHT_SIZE, context.canvas.height); // (0,0) the top left of the canvas
		}
	}, [elX, elY, width, height, sprintHoverPosition]);

	return (
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
				backgroundColor: "rgba(0,0,0,1)",
				backgroundSize: `auto ${height}`,
			}}
			bgImage="url('/images/main-img-compressed.jpg')"
			bgPosition="center"
			bgRepeat="no-repeat"
			bgAttachment="fixed"
			bgSize="cover"
		>
			{width > 800 && <canvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} ref={canvasRef} />}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				style={{
					position: "absolute",
					bottom: "0",
					width: "100%",
					height: "100px",
				}}
			>
				<polygon fill={colorMode == "light" ? "white" : "rgb(26,32,44)"} points="0,0 50,100 100,0 100,100 0,100 0,0" />
			</svg>
			<Center h="100%">
				<Box data-aos="zoom-in">
					<Center>
						<Image borderRadius="full" boxSize="150px" src="/images/myavatar.png" alt="Profile image of Andris Bērzkalns" style={{ boxShadow: "0px 5px 10px #000" }} />
					</Center>
					<Text textShadow="0px 5px 10px #000" fontWeight={"bolder"} fontSize="4xl" px={2} pt={2} mb={2}>
						Andris&nbsp;Bērzkalns
					</Text>
					<Text textShadow="0px 5px 10px #000" fontWeight={"bolder"} style={{ fontSize: theme.fontSizes["lg"] }}>
						Software&nbsp;Engineer
					</Text>
					<ScrollLink activeClass="active" to={"contact"} spy={true} smooth={true} offset={-70} duration={500}>
						<Button mt={5} bg={"purple"} textColor="white" _hover={{ background: "white", color: "black" }} variant="solid" style={{ boxShadow: "0px 5px 10px #000" }}>
							Contact me
						</Button>
					</ScrollLink>
				</Box>
			</Center>
		</Box>
	);
};
