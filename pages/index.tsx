import React, { useEffect } from "react";
import { Spacer, Flex } from "@chakra-ui/react";
import AOS from 'aos';
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Main,
  Projects,
  Skills
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
        {/* <link rel="shortcut icon" href="icons/github-con.svg" /> */}
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Flex direction="column" minH="100vh" >
        <Header />
        <Main />

        <About />
        
        <Projects />
        {/* <Offers /> */}

        <Skills />
        <Experience />
        <Contact />

        <Footer />
      </Flex>
    </>
  );
};

export default Home;
