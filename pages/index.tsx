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
  Skills,
  SpacerImage
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
        <meta name="description" content="Web development portfolio page of Andris Bērzkalns" />
        <meta name="keywords" content="Web development, Portfolio" />
        <meta name="author" content="Andris Bērzkalns" />
      </Head>
      <Flex direction="column" minH="100vh" >
        <Header />
        <Main />
        <About />
        {/* <Offers /> */}
        <Skills />
        {/* <SpacerImage /> */}
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Flex>
    </>
  );
};

export default Home;
