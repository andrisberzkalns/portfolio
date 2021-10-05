import React, { useState } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import data from "@public/meta.json";
import { SectionHeader } from "@components";

const About: React.FC = () => {
  return (
    <Container maxW="container.sm" centerContent id="about" mt={4} pt={16}>
      <SectionHeader>About me</SectionHeader>
      <Box mt={12} px={4} align="left">
        <Text color="black" data-aos="fade-up" data-aos-duration="500">I always had an interest for the visual aspects of design and from a young age started messing around with Photoshop and other Adobe software. So it was fitting that I started my professional career as a freelance graphics designer.</Text>
        <Text color="black" data-aos="fade-up" data-aos-duration="500">Technology, though, is my main passion and The University of Latvia is what halped shape my career path. I graduated the faculty of Computer Science while choosing a hot topic for my bachelor's thesis - Machine learning.</Text>
        <Text color="black" data-aos="fade-up" data-aos-duration="500">I'm also interested about finance related topics and consider myself a finance and stock market enthusiast. I am invested in the stock market.</Text>
        {/* <Text>Although most of my current profesional work is done in ServiceNow. I've been developing full-stack web applications for the past {">"}4 years. Previously worked as a freelance Graphics Designer. I have a lot of experience working with Adobe Photoshop as well as scripting / automation using it.</Text> */}
        {/* <Text>In my spare time I consider myself a stock market and finance enthusiast. I also take interest in new emergin technologies and am interested in science and space related topics.</Text> */}
        <Text color="black" data-aos="fade-up" data-aos-duration="500">Working at Swedbank as a Software Engineer seems to be a fitting location for me at the moment.</Text>

        {/* <Text>Currently, in my spare time, I'm expanding my interests into generative simulations.</Text> */}
      </Box>
    </Container>
  )
}

export default About;