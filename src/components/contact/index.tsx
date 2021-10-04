import React, { useRef } from "react";
import {
  Button,
  Container,
  Box,
  useColorMode,
  Input,
  FormControl,
  FormLabel,
  Text,
  Textarea
} from "@chakra-ui/react";
import { SectionHeader } from "@components";
import { useForm, ValidationError } from '@formspree/react';

export const Contact: React.FC = () => {
  const { colorMode } = useColorMode();
  const ref = useRef(null);

  const [state, handleSubmit] = useForm("xknqlwyr");

  return (
      <>
        <Box 
          // bg="main.100"
          h="100vh"
          minH={'1000px'}
          w="100%"
          color="white"
          textAlign="center" 
          ref={ref}
          id="home"
          style={{
            position: "relative",
            backgroundColor: "rgba(0,0,0,1)"
          }}
          bgImage="url('/images/main-img.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          bgSize="cover"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)"
            }}
          ></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: "0",
              width: "100%",
              height: "100px",
            }}
          >
            <polygon fill={colorMode == 'light' ? "white" : "rgb(26,32,44)" } points="0,0 50,100 100,0"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              height: "100px"
            }}>
            <polygon fill={colorMode == 'light' ? "#20232a" : "black" } points="0,100 0,0 50,100 100,0 100,100"/>
          </svg>
          <div style={{
            width: '100%',
            position: 'absolute',
            top: '25%'
          }}>
          <Container minW="100%" centerContent id="contact" style={{position: 'absolute', zIndex: 10}} pt={16}>
            <SectionHeader isLight={true}>Contact me</SectionHeader>
            <Box w={{base: '80%', sm: 400}} my={10} data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
              {
                state.succeeded && <Text color={'white'}>Message sent!</Text>
              }
              <form onSubmit={handleSubmit}>
                <FormControl id="email" mb={2}>
                  <FormLabel
                    style={{
                      userSelect: "none"
                    }}
                  >Your email address</FormLabel>
                  <Input bg={'white'} color={'black'} type="email" name="email"/>
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                  />
                </FormControl>
                <FormControl id="message">
                  <FormLabel
                    style={{
                      userSelect: "none"
                    }}
                  >Message</FormLabel>
                  <Textarea bg={'white'} color={'black'} type="text" name="message" maxH={64} />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
                </FormControl>
                <Button bg={'purple'} _hover={{background: "white", color: "black"}} variant="solid" style={{boxShadow: "0px 5px 10px #000"}} type="submit" mt={4} align={'left'} w={{base: '100%', sm: 40}} disabled={state.submitting}>
                  Send
                </Button>
              </form>
            </Box>
          </Container>
        </div>
      </Box>
    </>
  );
};



