import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import AOS from "aos";
import { Contact, Experience, Footer, Header, Main, Projects, Skills } from "@components";
import Head from "next/head";
import ReactGA from "react-ga4";

import "aos/dist/aos.css";

const Home: React.FC = () => {
	useEffect(() => {
		ReactGA.initialize([{
			trackingId: "G-68LC5V0NGV",
		}]);

		ReactGA.send({ hitType: "pageview" });

		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<>
			<Head>
				<title>Software Engineer - Andris Bērzkalns</title>
				<link rel="shortcut icon" href="/favicon.png" />
				<meta name="description" content="Full stack web developer that will make the website that you desire! Check out my portfolio and let's get in contact!" />
				<meta name="keywords" content="Web development, Portfolio" />
				<meta name="author" content="Andris Bērzkalns" />
				<meta name="theme-color" content="#282c34" />
			</Head>
			<Flex direction="column" minH="100vh">
				<Header />
				<Main />
				<Projects />
				{/* <About /> */}
				{/* <Offers /> */}
				<Skills />

				{/* <SpacerImage /> */}
				<Experience />
				<Contact />
				<Footer />
			</Flex>
		</>
	);
};

export default Home;
