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

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

export const Experience: React.FC = () => {
  return (
    <Container maxW="container.lg" centerContent mt={16} pt={16} mb={16} id="experience">
      <SectionHeader>Experience</SectionHeader>
      <Center h="100%" w="100%">
        <Box mt={8}>
          <SimpleGrid columns={1} spacing={12} px={{base: 2, md: 20}} py={10}>
            {(data?.experiences ?? []).map((experience, index) => (
              <>
                <Box display={{base: 'block', md: 'flex'}} data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay={150 * index}>
                  <Image w={150} h={150} src={experience.image} alt={experience.name} mr={8} />
                  <Box key={experience.name} >
                    <Heading fontSize={18} fontWeight="500">
                      {experience.name}
                    </Heading>
                    <Text>
                      {experience.position}
                    </Text>
                    <Text>
                      {experience.dates}
                    </Text>
                    <Text>
                      {experience.description}
                    </Text>
                  </Box>
                </Box>
                {index !== data.experiences.length - 1 && <Divider variant="solid"/>}
              </>
            ))}
          </SimpleGrid>
        </Box>
      </Center>
    </Container>
  );
};
