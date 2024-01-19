import { Box, Container, Heading, VStack, Text, Img } from "@chakra-ui/react";
// import underline from "../assets/underline.svg";
import macbookMockup from "../assets/macbook-pro-mockup.png";
import iphoneMockup from "../assets/iphone-mockup.png";
import Button from "./Button";
import { Variants, motion } from "framer-motion";
import { MotionImg } from "./MotionElement";

const upderlineVariants: Variants = {
  offscreen: {
    pathLength: 0,
  },
  onscreen: {
    pathLength: 1,
    transition: {
      // type: "spring",
      ease: "easeInOut",
      duration: 1.5,
      delay: 0.1,
    },
  },
};

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
                variant="primary"
                fontSize={["display.md", "display.md", "display.2xl"]}
                lineHeight={["display.md", "display.md", "display.2xl"]}
              >
                We are you <br /> MateDesigners
              </Heading>
              {/* <Img
                as={motion.img}
                src={underline}
                position="absolute"
                w="full"
                bottom={{ base: "-7px", md: "-15px", lg: "-20px" }}
              /> */}
              <Img
                as={motion.svg}
                initial="offscreen"
                whileInView="onscreen"
                // viewport={{ once: true, amount: 0.8 }}
                viewBox="0 0 267 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                position="absolute"
                w="full"
                bottom={{ base: "-7px", md: "-15px", lg: "-20px" }}
              >
                <motion.path
                  variants={upderlineVariants}
                  d="M1 16.455C25.8722 22.0089 164.228 -4.27911 130.622 3.42629C101.21 10.17 5.85458 27.385 63.8517 16.455C125.819 4.77684 289.471 -5.69341 261.898 14.1023"
                  stroke="#B3FF2D"
                  strokeWidth="4"
                />
              </Img>
            </Box>
            <Text
              fontSize={["text.md", "text.md", "text.lg"]}
              lineHeight={["text.md", "text.md", "text.lg"]}
              variant="tertiary"
            >
              Design subsriptions to scale your business
            </Text>
          </VStack>
          <Button variant="primary">See plans</Button>
          <Box position="relative">
            <MotionImg
              initial={{ x: "-5vw" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              // @ts-expect-error prop forwarding
              transition={{ delay: 0.1 }}
              src={macbookMockup}
              maxH={["220px", "220px", "350px", "600px"]}
            />
            <MotionImg
              initial={{ x: "5vw" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              // @ts-expect-error prop forwarding
              transition={{ delay: 0.1 }}
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
