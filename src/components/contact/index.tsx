import React from "react";
import {
  useBoolean,
  Container,
  Box,
  Flex,
  Tooltip,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { CopyIcon } from '@chakra-ui/icons'
import { SectionHeader } from "@components";

export const Contact: React.FC = () => {
  const { colorMode } = useColorMode();
  const [copied, setCopied] = useBoolean();
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();

  const copyToClipboard = () => {
    setCopied.on();
    navigator.clipboard.writeText("berzkalns.andris@gmail.com")
  }

  React.useEffect(() => {
    if(timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      setCopied.off()
    }, 1500);
  }, [copied]);

  return (
    <Container minW="100%" centerContent mt={4} id="contact" pt={40} mb={80}>
      <SectionHeader>Contact me</SectionHeader>
      {/* <Text>Feel free to contact me at</Text> */}
      <Box mb="20px" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
        <Tooltip hasArrow label={ copied ? "Copied" : "Copy to clipboard!"} aria-label="A tooltip" loseOnClick={false}>
          <Flex
            bgColor="gray.100"
            outline={copied ? "solid 1px black" : "dotted 1px black"}
            onClick={() => copyToClipboard()}
            mt={8}
            _hover={{
              bgColor: 'gray.300',
              cursor: 'pointer'
            }}
          >
            <Text
              p={2}
              pl={3}
              pr={3}
              m={'auto'}
              fontWeight="semibold"
              color="black"
            >
              berzkalns.andris@gmail.com
            </Text>

            <Box
              p={2}
              pl={3}
              bgGradient={ copied ? "linear(to-tr, #5C258D, #4389A2)" : "linear(to-tr, #314755, #314755)" }
            >
              <CopyIcon w={5} h={5} color="gray.100" />
            </Box>
          </Flex>
        </Tooltip>
      </Box>
    </Container>
  );
};
