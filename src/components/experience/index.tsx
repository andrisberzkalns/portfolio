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
    <Container maxW="container.lg" centerContent mt={16} pt={16} mb={16} id="experience">
      <SectionHeader>Experience</SectionHeader>
      <Center h="100%" w="100%">
        <Box mt={8}>
          <SimpleGrid columns={1} spacing={4} px={{base: 2, md: 20}} py={10}>
            {(data?.experiences ?? []).map((experience, index) => (
              <>
                <Box p={8} display={{base: 'block', md: 'flex'}} data-aos="zoom-in-up" data-aos-duration="500" data-aos-delay={150 * index}>
                  <Box rounded={'xl'} w="100%" maxH={150} bg="white" display={{base: 'block', md: 'none'}}>
                    <Center>
                      <Image p={4} layout="fill" maxH={150} src={experience.image} alt={experience.name} mr={{base: 0, md: 8}} />
                    </Center>
                  </Box>
                  <Center>
                    <Box rounded={'xl'} w={150} h={150} bg="white" display={{base: 'none', md: 'block'}} mr={8}>
                      <Center w={150} h={150}>
                        <Image w={150} maxH={150} src={experience.image} alt={experience.name} />
                      </Center>
                    </Box>
                    <Box key={experience.name} mt={{base: 4, md: 0}}>
                      {/* <Heading fontSize={18} fontWeight="500">
                        {experience.name}
                      </Heading> */}
                      <Text mb={2}>
                        <b style={{'textTransform': 'uppercase'}}>{experience.position}</b>
                        <Box display={{base: 'box', sm: 'inline'}} ml={{base: 0, sm: 2}}><i>(&nbsp;{experience.dates}&nbsp;)</i></Box>
                      </Text>
                      <Text>
                        {experience.description}
                      </Text>
                    </Box>
                  </Center>
                </Box>
                {index !== data.experiences.length - 1 && <Divider variant="solid" colorScheme={'gray'} size={'md'}/>}
              </>
            ))}
          </SimpleGrid>
        </Box>
      </Center>
    </Container>
  );
};
