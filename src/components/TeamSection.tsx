import {
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
  useColorModeValue,
  As,
} from "@chakra-ui/react";
import avatar from "../assets/avatar.png";
import { CameraOff, Atom02 } from "./Icons";
import { Variants, motion } from "framer-motion";

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

function IconBox({ icon, ...props }: { icon: As }) {
  const bg = useColorModeValue("brand.600", "brand.500");
  return (
    <Flex
      w={["3rem"]}
      h={["3rem"]}
      bg={bg}
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

function TeamCard({
  icon,
  heading,
  text,
}: {
  icon: As;
  heading: string;
  text: string;
}) {
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <VStack
      gap="6"
      p={{ base: "5", md: "6" }}
      bg={bg}
      h="full"
      borderRadius="md"
    >
      <IconBox icon={icon} />
      <VStack gap={{ base: "1", md: "1" }} textAlign="center">
        <Heading
          as="h5"
          fontSize={{ base: "text.xl", md: "display.sm" }}
          lineHeight={{ base: "text.xl", md: "display.sm" }}
          fontWeight="semibold"
          variant="primary"
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "text.lg" }}
          lineHeight={{ base: "text.lg" }}
          variant="tertiary"
          whiteSpace={{ base: "normal", lg: "pre-line" }}
        >
          {text}
        </Text>
      </VStack>
    </VStack>
  );
}

const avatarVariants: Variants = {
  offscreen: {
    x: 188,
    rotate: 360,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.5,
    },
  },
};

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
            variant="primary"
            alignSelf="start"
          >
            Design{" "}
            <Hide above="md">
              <Image
                as={motion.img}
                variants={avatarVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                display="inline"
                w="60px"
                borderRadius="full"
                src={avatar}
                alt="avatar"
              />
            </Hide>
            dreamteam
            <br />– comes true{" "}
            <Show above="md">
              <Image
                as={motion.img}
                variants={avatarVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                display="inline"
                w="60px"
                borderRadius="full"
                src={avatar}
                alt="avatar"
              />
            </Show>
          </Heading>
          <Text
            fontSize={{ base: "text.lg", md: "text.xl" }}
            lineHeight={{ base: "text.lg", md: "text.xl" }}
            variant="tertiary"
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
