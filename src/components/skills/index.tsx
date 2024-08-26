import React from "react";
import { Square, Center, Container, SimpleGrid, Box, Heading, Image, useColorMode } from "@chakra-ui/react";
import { SectionHeader } from "@components";
import { motion } from "framer-motion";
import data from "@public/meta.json";

const ICON_SIZE = 100;

export const Skills: React.FC = () => {
	const { colorMode } = useColorMode();
	return (
		<Container maxW="container.lg" centerContent mt={16} pb={16} id="skills">
			<SectionHeader>Skills</SectionHeader>
			<SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={12} w="100%" mt={20}>
				{(data?.skills ?? []).map((skill, ) => (
					<Box key={skill.name}>
						<motion.div whileHover={{ scale: 1.3, rotate: 10 }} whileTap={{ rotate: -10, borderRadius: "100%" }}>
							<Box
								style={{
									userSelect: "none",
								}}
							>
								<Square
									mx={"auto"}
									size={{ base: ICON_SIZE / 1.5, md: ICON_SIZE }}
									// bg={colorMode === "light" ? "" : "white"}
									borderRadius={colorMode === "light" ? "none" : "3xl"}
								>
									{/* <Box px={ICON_SIZE} w={ICON_SIZE}> */}
									<Image
										style={{
											position: "absolute",
											filter: "contrast(50%) blur(16px) brightness(100) opacity(0.3)",
											mixBlendMode: "screen",
										}}
										maxW={{ base: ICON_SIZE / 1.2, md: ICON_SIZE }}
										maxH={{ base: ICON_SIZE / 1.2, sm: ICON_SIZE }}
										p={2}
										src={skill.image}
										alt={skill.name}
									/>
									<Image
										style={{
											position: "absolute",
											filter: "contrast(50%) blur(2px) brightness(0) opacity(0.5)",
										}}
										maxW={{ base: ICON_SIZE / 1.2, md: ICON_SIZE }}
										maxH={{ base: ICON_SIZE / 1.2, sm: ICON_SIZE }}
										p={2}
										src={skill.image}
										alt={skill.name}
									/>
									<Image
										style={{
											zIndex: 1,
										}}
										maxW={{ base: ICON_SIZE / 1.2, md: ICON_SIZE }}
										maxH={{ base: ICON_SIZE / 1.2, sm: ICON_SIZE }}
										p={2}
										src={skill.image}
										alt={skill.name}
									/>
									{/* </Box> */}
								</Square>
							</Box>
						</motion.div>
						<Center>
							<Heading fontSize={18} fontWeight="600" py={5} color={colorMode === "light" ? "gray" : "light"}>
								{skill.name}
							</Heading>
						</Center>
					</Box>
				))}
			</SimpleGrid>
		</Container>
	);
};
