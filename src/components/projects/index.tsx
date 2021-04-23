import React, { useState } from "react";
import { Container, SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import data from "@public/meta.json";
import { SectionHeader } from "@components";

export const Projects: React.FC = () => {

  const [selectedId, setSelectedId] = useState(null);

  return (
    <Container maxW="container.lg" centerContent id="projects">
      <SectionHeader>Projects</SectionHeader>

      {/* <AnimateSharedLayout type="crossfade">
        {(data?.projects ?? []).map((project) => (
          <motion.div layoutId={project.id} onClick={() => setSelectedId(project.id)}>
            <motion.h2>{project.name}</motion.h2>
            <motion.h5>{project.description}</motion.h5>
          </motion.div>
        ))}
      
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h2>{project.subtitle}</motion.h2>
              <motion.h5>{project.title}</motion.h5>
              <motion.h5>AAA</motion.h5>
              <motion.img src={project.image} boxShadow="lg" data-aos="fade-up"/>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout> */}

      <SimpleGrid columns={2} spacing={12} px={20} py={10}>
        {(data?.projects ?? []).map((project, index) => (
          <Box key={project.name}>
            <Heading fontSize={16} fontWeight="500" py={5} data-aos="fade-up" data-aos-duration="500" data-aos-delay={150 * ((index % 2) + 1)} >
              {project.name}
            </Heading>
            {
              project.description && <Text fontSize={14} data-aos="fade-up" data-aos-duration="500" data-aos-delay={150 * ((index % 2) + 1) + 50}>{project.description}</Text>
            }
            <Image src={project.image} h="300" boxShadow="lg" data-aos="fade-up" data-aos-duration="500" data-aos-delay={150 * ((index % 2) + 1) + 100}/>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};
