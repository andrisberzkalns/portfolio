import React, { useState } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import data from "@public/meta.json";
import { SectionHeader } from "@components";

const About: React.FC = () => {
  return (
    <Container maxW="container.sm" centerContent id="about" mt={20} mb={20}>
      <SectionHeader>About me</SectionHeader>
      <Box mt={4} boxShadow="2xl" data-aos="fade-up" data-aos-duration="500" p={8}>
        <Text>I am a Software Engineer working full time at Swedbank Latvia.</Text>
        <Text>Although most of my current profesional work is done in ServiceNow. I've been developing full-stack web applications for the past {">"}4 years. Previously worked as a freelance Graphics Designer. I have a lot of experience working with Adobe Photoshop and also scripting / automation for this wonderful piece of software.</Text>
        <Text>In my spare time I consider myself a stock market and finance enthusiast. I also take interest in new emergin technologies and am interested in science and space related topics. For my bachlor's degree chose to develop a machine learning model.</Text>
        <Text>I am interested in web based software development and I am interested in collaboration on new projects. I'm most experienced with React, NextJS, Express frameworks.</Text>
        {/* <Text>Feel free to contact me at <b>berzkalns.andris@gmail.com</b></Text> */}
      </Box>
    </Container>
  )
}

export default About;