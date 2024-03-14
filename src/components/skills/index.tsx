import React from "react";
import { Square, Center, Container, SimpleGrid, Box, Heading, Image, useColorMode } from "@chakra-ui/react";
import { SectionHeader } from "@components";
import data from "@public/meta.json";

const ICON_SIZE = 100;

export const Skills: React.FC = () => {
	const { colorMode } = useColorMode();

	return (
		<Container maxW="container.lg" centerContent mt={16} pt={16} id="skills">
			<SectionHeader>Skills</SectionHeader>
			<SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 4 }} spacing={12} w="100%" mt={20}>
				{(data?.skills ?? []).map((skill, index) => (
					<Box>
						<Box
							key={skill.name}
							style={{
								userSelect: "none",
								transitionDuration: "0.2s",
								transitionTimingFunction: "cubic-bezier(0.15, 0.32, 0.55, 1.95)",
							}}
							_hover={{
								transform: "scale(1.3)",
								transitionDuration: "0.2s",
								transitionTimingFunction: "cubic-bezier(0.15, 0.32, 0.55, 1.95)",
							}}
						>
							<Square
								// data-aos="zoom-in-up"
								// data-aos-duration="500"
								// data-aos-delay={100 * (1)}
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
									maxW={{ base: ICON_SIZE / 1.5, md: ICON_SIZE }}
									maxH={{ base: ICON_SIZE / 1.5, sm: ICON_SIZE }}
									p={2}
									src={skill.image}
									alt={skill.name}
								/>
								<Image
									style={{
										position: "absolute",
										filter: "contrast(50%) blur(2px) brightness(0) opacity(0.5)",
									}}
									maxW={{ base: ICON_SIZE / 1.5, md: ICON_SIZE }}
									maxH={{ base: ICON_SIZE / 1.5, sm: ICON_SIZE }}
									p={2}
									src={skill.image}
									alt={skill.name}
								/>
								<Image
									style={{
										zIndex: 1,
									}}
									maxW={{ base: ICON_SIZE / 1.5, md: ICON_SIZE }}
									maxH={{ base: ICON_SIZE / 1.5, sm: ICON_SIZE }}
									p={2}
									src={skill.image}
									alt={skill.name}
								/>
								{/* </Box> */}
							</Square>
						</Box>
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
