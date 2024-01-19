import {
  Container,
  Heading,
  VStack,
  Text,
  Grid,
  Flex,
  Icon,
  GridItem,
  As,
  useColorModeValue,
} from "@chakra-ui/react";
import { AlertCircle } from "./Icons";

function IconBox({ icon, ...props }: { icon: As }) {
  const bg = useColorModeValue("brand.600", "brand.500");
  return (
    <Flex
      w={["2.5rem", "2.5rem", "3rem"]}
      h={["2.5rem", "2.5rem", "3rem"]}
      // bg="brand.600"
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

function FeatureCard({
  icon,
  heading,
  text,
}: {
  icon: As;
  heading: string;
  text: string;
}) {
  return (
    <VStack align="start" gap={["4", "4", "5"]}>
      <IconBox icon={icon} />
      <VStack gap={["1", "1", "2"]} align="start">
        <Heading
          as="h5"
          fontSize={{ base: "text.lg", md: "text.xl" }}
          lineHeight={{ base: "text.lg", md: "text.xl" }}
          variant="primary"
          fontWeight="semibold"
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "text.md" }}
          lineHeight={{ base: "text.md" }}
          variant="tertiary"
          whiteSpace={{ base: "normal", md: "pre-line" }}
        >
          {text}
        </Text>
      </VStack>
    </VStack>
  );
}

const features = [
  {
    id: 1,
    icon: AlertCircle,
    heading: "Unlimited tasks",
    text: "Request as many\ndesigns as you'd like.",
  },
  {
    id: 2,
    icon: AlertCircle,
    heading: "Planning",
    text: "We evaluate tasks in hours\nand meet deadlines.",
  },
  {
    id: 3,
    icon: AlertCircle,
    heading: "Quality",
    text: "Each project has its own art-director.\nWe'll revise the designs until you're 100%\nsatisfied.",
  },
  {
    id: 4,
    icon: AlertCircle,
    heading: "Full control",
    text: "Our work is transparent, you can\nwatch the work in figma and task tracker.",
  },
];

function FeaturesSection() {
  return (
    <VStack
      as="section"
      gap={["12", "12", "16"]}
      align="start"
      py={["16", "16", "9xl"]}
    >
      <Container>
        <VStack gap={["4", "4", "5"]} align="start" maxW="container.md">
          <VStack gap="3" align="start">
            <Text
              fontSize={{ base: "text.md" }}
              lineHeight={{ base: "text.md" }}
              variant="brandSecondary"
              fontWeight="semibold"
            >
              Features
            </Text>
            <Heading
              as="h2"
              fontSize={{ base: "display.lg", md: "display.xl" }}
              lineHeight={{ base: "display.lg", md: "display.xl" }}
              variant="primary"
              fontWeight="semibold"
              letterSpacing="tight"
            >
              We are here to assist your business
            </Heading>
          </VStack>
          <Text
            fontSize={{ base: "text.lg", md: "text.xl" }}
            lineHeight={{ base: "text.lg", md: "text.xl" }}
            variant="tertiary"
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Text>
        </VStack>
      </Container>
      <Container>
        <Grid
          ml={{ base: "0", lg: "auto" }}
          w={{ base: "full", lg: "720px" }}
          gap={["10", "10", "8"]}
          templateColumns={["1fr", "1fr", "repeat(2, minmax(0, 1fr))"]}
        >
          {features.map((feature) => (
            <GridItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </VStack>
  );
}

export default FeaturesSection;
