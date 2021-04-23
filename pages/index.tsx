import React, { useEffect } from "react";
import { Spacer, Flex } from "@chakra-ui/react";
import AOS from 'aos';
import {
  Contact,
  Experience,
  Footer,
  Header,
  Main,
  Skills,
  Projects
} from "@components";
import Head from "next/head";

import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <>
      <Head>
        <title>Andris Bērzkalns</title>
        <link rel="shortcut icon" href="icons/github-con.svg" />
      </Head>
      <Flex direction="column" minH="100vh" >
        <Header />
        {/* TODO - Create cool landing page type graphic */}
        <Main />
        {/* <Cards /> */}
        <Spacer />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </Flex>
    </>
  );
};

export default Home;
