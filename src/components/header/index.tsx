import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  Switch,
  Stack,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useWindowScroll, useWindowSize } from 'react-use';
import { Link as ScrollLink } from "react-scroll";

const Links = [
  {label: 'Home', link: "home"}, 
  {label: 'About me', link: "about"},
  {label: 'Projects', link: "projects"}, 
  {label: 'Offers', link: "offers"}, 
  {label: 'Skills', link: "skills"}, 
  {label: 'Experience', link: "experience"}, 
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
    >
      <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          color: (colorMode == 'light' ? "gray.300" : "gray.400")
        }}
        // href={link}
      >
        {children}
      </Link>
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
        bg={y >= (height - 100) ? (colorMode == 'light' ? "main.100" : "main.100") : "rgba(0,0,0,0)"}
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
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
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
              <Switch
                size="lg"
                cursor={'pointer'}
                onChange={toggleColorMode}
                >
              </Switch>
              {/* <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
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