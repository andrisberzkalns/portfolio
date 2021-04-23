import React from "react";
import { Center, Container, SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import { SectionHeader } from "@components";
import data from "@public/meta.json";

export const Skills: React.FC = () => {

  return (
    <Container maxW="container.lg" centerContent mt={16} id="skills">
      <SectionHeader>Skills</SectionHeader>
      <Center h="100%" w="100%">
        <Box>
          <SimpleGrid columns={4} spacing={12} px={20} py={10}>
            {(data?.skills ?? []).map((skill, index) => (
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
            ))}
          </SimpleGrid>
        </Box>
      </Center>
    </Container>
  );
};
