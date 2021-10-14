import React, { useState } from "react";
import { Container, SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import data from "@public/meta.json";
import { SectionHeader } from "@components";

export const Projects: React.FC = () => {

  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container maxW="container.lg" centerContent id="projects" mb={32} pt={16} mt={2}>
      <SectionHeader>Projects</SectionHeader>
      <SimpleGrid columns={{base: 1, md: 2}} spacing={12} px={{base: 2, md: 20}} my={20}>
        {(data?.projects ?? []).map((project, index) => (
          <a href={project.url} target={'_blank'} rel="noreferrer">
          <Box key={project.name}>
            <Image rounded={'xl'} alt={project.name} layout="fill" src={project.image} boxShadow="xl" data-aos="fade-up" data-aos-duration="500" data-aos-delay={150 * ((index % 2) + 1) + 100}/>
          </Box>
          </a>
        ))}
      </SimpleGrid>
    </Container>
  );
};
