import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Image,
  Grid,
  Icon,
  Flex,
  GridItem,
  Hide,
  Show,
} from "@chakra-ui/react";
import avatar from "../assets/avatar.png";
import { CameraOff, Atom02 } from "./Icons";

function IconBox({ icon, ...props }) {
  return (
    <Flex
      w={["3rem"]}
      h={["3rem"]}
      bg="brand.600"
      color="gray.950"
      align="center"
      justify="center"
      borderRadius="lg"
      {...props}
    >
      <Icon as={icon} />
    </Flex>
  );
}

function TeamCard({ icon, heading, text }) {
  return (
    <VStack gap="6" p={{ base: "5", md: "6" }} bg="gray.50" h="full">
      <IconBox icon={icon} />
      <VStack gap={{ base: "1", md: "1" }} textAlign="center">
        <Heading
          as="h5"
          fontSize={{ base: "text.xl", md: "display.sm" }}
          lineHeight={{ base: "text.xl", md: "display.sm" }}
          fontWeight="semibold"
          color="gray.900"
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "text.lg" }}
          lineHeight={{ base: "text.lg" }}
          color="gray.600"
          whiteSpace={{ base: "normal", lg: "pre-line" }}
        >
          {text}
        </Text>
      </VStack>
    </VStack>
  );
}

const teams = [
  {
    id: 1,
    icon: CameraOff,
    heading: "Totally async",
    text: "Don't like meerings?\nWe don't either, so that we've\noutlawed them completely.",
  },
  {
    id: 2,
    icon: Atom02,
    heading: "All in ActiveCollab",
    text: "Manage your design board using\nActiveCollab, View activem queuedand\ncompleted tasks with ease.",
  },
];

function TeamSection() {
  return (
    <VStack
      as="section"
      py={{ base: "16", md: "24" }}
      gap={{ base: "12", md: "16" }}
    >
      <Container>
        <VStack gap="5" maxW="container.md">
          <Heading
            fontSize={{ base: "display.lg", md: "display.xl" }}
            lineHeight={{ base: "display.lg", md: "display.xl" }}
            fontWeight="semibold"
            letterSpacing="tight"
            color="gray.900"
            alignSelf="start"
          >
            Design{" "}
            <Hide above="md" display="inline">
              <Image display="inline" w="60px" src={avatar} />
            </Hide>
            dreamteam
            <br />– comes true{" "}
            <Show above="md" display="inline">
              <Image display="inline" w="60px" src={avatar} />
            </Show>
          </Heading>
          <Text
            fontSize={{ base: "text.lg", md: "text.xl" }}
            lineHeight={{ base: "text.lg", md: "text.xl" }}
            color="gray.600"
            textAlign="center"
            alignSelf="center"
          >
            MateDesign this is not about frelance or agency.{" "}
            <br className="hidden md:block" /> We are for product speed and
            quality of work.
          </Text>
        </VStack>
      </Container>
      <Container>
        <Grid
          gap="6"
          templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
          maxW="container.lg"
        >
          {teams.map((team) => (
            <GridItem key={team.id}>
              <TeamCard
                icon={team.icon}
                heading={team.heading}
                text={team.text}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </VStack>
  );
}

export default TeamSection;
