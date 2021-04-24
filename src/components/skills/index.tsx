import React from "react";
import { Center, Container, SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import { SectionHeader } from "@components";
import data from "@public/meta.json";

export const Skills: React.FC = () => {

  return (
    <Container maxW="container.lg" centerContent mt={16} id="skills">
      <SectionHeader>Skills</SectionHeader>
      <SimpleGrid columns={3} spacing={12} w="100%">
        <Box
          data-aos="zoom-in-up" 
          data-aos-duration="500" 
          data-aos-delay={150 * (1)}
        >
          <Center>
            <Heading fontSize={18} fontWeight="600" py={5}>
              Front-end development
            </Heading>
          </Center>
        </Box>
        <Box
          data-aos="zoom-in-up" 
          data-aos-duration="500" 
          data-aos-delay={150 * (2)}
        >
          <Center>
            <Heading fontSize={18} fontWeight="600" py={5}>
              Back-end development
            </Heading>
          </Center>
        </Box>
        <Box
          data-aos="zoom-in-up" 
          data-aos-duration="500" 
          data-aos-delay={150 * (3)}
        >
          <Center>
            <Heading fontSize={18} fontWeight="600" py={5}>
              Project development
            </Heading>
          </Center>
        </Box>
        {/* {(data?.skills ?? []).map((skill, index) => (
          <Box
            key={skill.name} 
            data-aos="zoom-in-up" 
            data-aos-duration="500" 
            data-aos-delay={150 * ((index % 4) + 1)} 
          >
            <Center>
              <Heading fontSize={16} fontWeight="500" py={5}>
                {skill.name}
              </Heading>
            </Center>
            <Image src={skill.image} boxShadow="lg" />
          </Box>
        ))} */}
      </SimpleGrid>
    </Container>
  );
};
