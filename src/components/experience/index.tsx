import React from "react";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Image
} from "@chakra-ui/react";
import { SectionHeader } from "@components";

import data from "@public/meta.json";

export const Experience: React.FC = () => {
  return (
    <Container maxW="container.lg" centerContent mt={16} id="experience">
      <SectionHeader>Experience</SectionHeader>
      <Center h="100%" w="100%">
        <Box mt={8}>
          <SimpleGrid columns={1} spacing={12} px={20} py={10}>
            {(data?.experiences ?? []).map((experience, index) => (
              <>
                <Flex data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay={150 * index}>
                  <Image w={150} h={150} src={experience.image} alt={experience.name} mr={8} />
                  <Box key={experience.name} >
                    <Heading fontSize={18} fontWeight="500" py={5}>
                      {experience.name}
                    </Heading>
                    <Text>
                      {experience.dates}
                    </Text>
                    <Text>
                      {experience.description}
                    </Text>
                  </Box>
                </Flex>
                {index !== data.experiences.length - 1 && <Divider variant="solid"/>}
              </>
            ))}
          </SimpleGrid>
        </Box>
      </Center>
    </Container>
  );
};
