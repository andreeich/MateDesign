import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Img,
  Button,
} from "@chakra-ui/react";
import underline from "../assets/underline.svg";
import macbookMockup from "../assets/macbook-pro-mockup.png";
import iphoneMockup from "../assets/iphone-mockup.png";

function HeaderSection() {
  return (
    <Box as="section" py={["9xl"]}>
      <Container>
        <VStack gap={["4xl", "4xl", "6xl"]}>
          <VStack
            gap="3xl"
            textAlign="center"
            maxW={{ base: "xxs", md: "container.md" }}
          >
            <Box position="relative">
              <Heading
                as="h1"
                fontSize={["display.md", "display.md", "display.2xl"]}
                lineHeight={["display.md", "display.md", "display.2xl"]}
                color="gray.900"
              >
                We are you <br /> MateDesigners
              </Heading>
              <Img src={underline} position="absolute" bottom="-7px" />
            </Box>
            <Text
              fontSize={["text.md", "text.md", "text.lg"]}
              lineHeight={["text.md", "text.md", "text.lg"]}
              color="gray.600"
            >
              Design subsriptions to scale your business
            </Text>
          </VStack>
          <Button variant="primary">See plans</Button>
          <Box position="relative">
            <Img
              src={macbookMockup}
              maxH={["220px", "220px", "350px", "600px"]}
            />
            <Img
              src={iphoneMockup}
              maxW="26%"
              position="absolute"
              top="-30px"
              right="10px"
            />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default HeaderSection;
