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
      <SimpleGrid columns={{base: 2, sm: 3, md: 4, lg: 4}} spacing={12} w="100%" mt={20}>

        {(data?.skills ?? []).map((skill, index) => (
          <>
            <Box
              data-aos="zoom-in-up" 
              data-aos-duration="500" 
              data-aos-delay={100 * (1)}
            >
              <Square mx={'auto'} size={{base: ICON_SIZE / 1.5, md: ICON_SIZE}} bg={colorMode === 'light' ? '' : 'white'} borderRadius={colorMode === 'light' ? 'none' :'3xl'}>
                {/* <Box px={ICON_SIZE} w={ICON_SIZE}> */}
                  <Image maxW={{base: ICON_SIZE / 1.5, md: ICON_SIZE}} maxH={{base: ICON_SIZE / 1.5, sm: ICON_SIZE}} p={2} src={skill.image} alt={skill.name}/>
                {/* </Box> */}
              </Square>
              <Center>
                <Heading fontSize={18} align={'center'} fontWeight="600" py={5} color={colorMode === 'light' ? "gray" : "light" }>
                  {skill.name}
                </Heading>
              </Center>
            </Box>
          </>
        ))}
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
