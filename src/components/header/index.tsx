import React, { ReactNode } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  Stack,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useWindowScroll, useWindowSize } from 'react-use';
import { Link as ScrollLink } from "react-scroll";

const Links = [
  // {label: 'Home', link: "home"}, 
  // {label: 'About me', link: "about"},
  {label: 'Skills', link: "skills"}, 
  {label: 'Experience', link: "experience"}, 
  {label: 'Projects', link: "projects"}, 
  // {label: 'Offers', link: "offers"}, 
  {label: 'Contact', link: "contact"}, 
];

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => {
  const { colorMode } = useColorMode();
  
  return (
    <ScrollLink
      activeClass="active"
      to={link}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      href={link}
      _hover={{
        textDecoration: 'none',
      }}
      style={{
        userSelect: "none"
      }}
    >
      <Button
        bg={"none"}
        style={{
          fontWeight: "normal",
        }}
        _hover={{
          color: (colorMode == 'light' ? "gray.300" : "gray.400"),
          backgroundColor: 'rgba(256,256,256,0.2)',
        }}
      >
        {children}
      </Button>
    </ScrollLink>
  )
};

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {y} = useWindowScroll();
  const {height} = useWindowSize();
  // const theme = useTheme()
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={y >= (height - 100) ? (colorMode == 'light' ? "main.100" : "black") : "rgba(0,0,0,0)"}
        px={4}
        position="fixed"
        w="100%"
        zIndex="100"
        style={{transition: "0.4s"}}
        color={y >= (height - 100) ? "white" : "white"}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            colorScheme={colorMode == 'light' ? "black" : "gray"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon w={'60%'} h={'60%'} />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            {/* <Box>Andris Bērzkalns</Box> */}
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.link} link={link.link}>{link.label}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <Button
                size="md"
                height="48px"
                width="48px"
                bg={"none"}
                aria-label={`Switch to ${colorMode == 'light' ? 'dark' : 'light'} mode`}
                _hover={{backgroundColor: 'rgba(256,256,256,0.2)'}}
                onClick={toggleColorMode}
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  {colorMode == 'light'
                    ? <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                    : <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
                  }
                </svg>
              </Button>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.link} link={link.link}>{link.label}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}