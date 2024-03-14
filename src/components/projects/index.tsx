import React, { useState } from "react";
import { Container, SimpleGrid, Box, Heading, Text, Image, Tag } from "@chakra-ui/react";
import { motion } from "framer-motion";
import data from "@public/meta.json";
import { SectionHeader } from "@components";

export const Projects: React.FC = () => {
	return (
		<Container maxW="container.2xl" centerContent id="projects" mb={8} pt={16} mt={2}>
			<SectionHeader>Projects</SectionHeader>
			<SimpleGrid columns={{ base: 1, lg: 2, xl: 3 }} spacing={2} px={{ base: 2, md: 20 }} my={20}>
				{(data?.projects ?? []).map((project, index) => (
					<a key={project.name} href={project.url} target={"_blank"} rel="noreferrer">
						<Box
							style={{
								position: "relative",
							}}
							boxShadow="xl"
						>
							<Image rounded={"xl"} alt={project.name} src={project.image} />
							<Box
								style={{
									position: "absolute",
									top: 0,
									width: "100%",
									transitionDuration: "0.4s",
									height: "100%",
									opacity: 0,
								}}
								_hover={{
									backgroundColor: "rgba(255,255,255,0.95)",
									opacity: "1 !important",
									transitionDuration: "0.4s",
								}}
								borderRadius="xl"
							>
								{project.description && (
									<Box p={4}>
										<Heading size="md" color="black">
											{project.name}
										</Heading>
										<Text color="black" mt={2}>
											{project.description}
										</Text>
										{project.technologies && (
											<Box mt={4}>
												{project.technologies.map((tech, index) => {
													// List of technologies used in the project
													return (
														<motion.div key={tech} style={{ display: "inline-block" }} whileHover={{ translateY: -2 }}>
															<Tag
																style={{
																	margin: "0.2rem",
																}}
																colorScheme="telegram"
																shadow="md"
															>
																{tech}
															</Tag>
														</motion.div>
													);
												})}
											</Box>
										)}
									</Box>
								)}
							</Box>
						</Box>
					</a>
				))}
			</SimpleGrid>
		</Container>
	);
};
