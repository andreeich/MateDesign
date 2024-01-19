import {
  Container,
  Stack,
  Image,
  Grid,
  GridItem,
  Link,
  Text,
  Flex,
  HStack,
  Button,
} from "@chakra-ui/react";
import logo from "../assets/logo-full-white-xl.svg";
import { ArrowCircleUp } from "./Icons";

function Footer() {
  return (
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
          <Image src={logo} w="194px" />
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
              <Link variant="grayDark" size="2xl">
                Why we
              </Link>
              <Link variant="grayDark" size="2xl">
                Process
              </Link>
              <Link variant="grayDark" size="2xl">
                Services
              </Link>
            </GridItem>
            <GridItem
              as={Stack}
              gap={{ base: "3", md: "5" }}
              direction={{ base: "column", md: "row" }}
              alignItems={{ md: "center" }}
            >
              <Link variant="grayDark" size="2xl">
                Compare
              </Link>
              <Link variant="grayDark" size="2xl">
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
              <Link variant="lightDark">Privacy Policy</Link>
              <Link variant="lightDark">Terms of Use</Link>
              <Link variant="lightDark">hello@matedesign.co</Link>
            </Flex>
          </Stack>
          <HStack alignSelf={{ base: "end", md: "center" }} gap="3.5">
            <Button variant="tertiary" size="sm">
              Get Started
            </Button>
            <Button variant="clearDark">
              <ArrowCircleUp w="5" h="5" />
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Footer;
