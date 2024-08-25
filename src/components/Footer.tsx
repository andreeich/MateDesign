import {
  Container,
  Stack,
  Image,
  Grid,
  GridItem,
  Text,
  Flex,
  HStack,
  Link,
  DarkMode,
} from "@chakra-ui/react";
import logo from "../assets/logo-full-white-xl.svg";
import { ArrowCircleUp } from "./Icons";
import Button from "./Button";

function Footer() {
  return (
    <DarkMode>
      <Stack
        bg="gray.950"
        pt={{ base: "12", md: "16" }}
        pb={{ base: "12", md: "16", lg: "12" }}
        gap={{ base: "12", md: "16" }}
      >
        <Container>
          <Stack
            gap={{ base: "8" }}
            direction={{ base: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
          >
            <Image src={logo} w="194px" alt="MateDesign" />
            <Grid
              templateColumns={{
                base: "repeat(2, minmax(0, 1fr))",
                md: "repeat(2, minmax(0, auto))",
              }}
              gap="5"
              w={{ md: "fit-content" }}
            >
              <GridItem
                as={Stack}
                gap={{ base: "3", md: "5" }}
                direction={{ base: "column", md: "row" }}
                alignItems={{ md: "center" }}
              >
                <Link as="button" variant="gray" size="2xl" textAlign="left">
                  Why we
                </Link>
                <Link as="button" variant="gray" size="2xl" textAlign="left">
                  Process
                </Link>
                <Link as="button" variant="gray" size="2xl" textAlign="left">
                  Services
                </Link>
              </GridItem>
              <GridItem
                as={Stack}
                gap={{ base: "3", md: "5" }}
                direction={{ base: "column", md: "row" }}
                alignItems={{ md: "center" }}
              >
                <Link as="button" variant="gray" size="2xl" textAlign="left">
                  Compare
                </Link>
                <Link as="button" variant="gray" size="2xl" textAlign="left">
                  Plans
                </Link>
              </GridItem>
            </Grid>
          </Stack>
        </Container>
        <Container>
          <Stack
            gap={{ base: "8" }}
            pt={{ base: "3", md: "5" }}
            direction={{ base: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
          >
            <Stack
              gap={{ base: "2", md: "5" }}
              direction={{ base: "column", lg: "row" }}
            >
              <Text
                fontSize={{ base: "text.sm" }}
                lineHeight={{ base: "text.sm" }}
                color="gray.300"
              >
                © 2022 MateDesign. All rights reserved.
              </Text>
              <Flex rowGap="2" columnGap="4" flexWrap="wrap">
                <Link as="button" variant="light">
                  Privacy Policy
                </Link>
                <Link as="button" variant="light">
                  Terms of Use
                </Link>
                <Link as="button" variant="light">
                  hello@matedesign.co
                </Link>
              </Flex>
            </Stack>
            <HStack alignSelf={{ base: "end", md: "center" }} gap="3.5">
              <Button variant="tertiary" size="sm">
                Get Started
              </Button>
              <Button variant="clear" aria-label="arrow circle up">
                <ArrowCircleUp w="5" h="5" />
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Stack>
    </DarkMode>
  );
}

export default Footer;
