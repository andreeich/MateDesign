import {
  As,
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Show,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
// @ts-expect-error Splide Type Bug
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { CheckIcon, ArrowLeft, ArrowRight } from "./Icons";
// Default theme
import "@splidejs/react-splide/css/core";

type ListItem = {
  id: number;
  icon: As;
  text: string;
};

type Plan = {
  id?: number;
  heading: string;
  badge: string;
  text: string;
  price: number;
  list: ListItem[];
};

const plans: Plan[] = [
  {
    id: 1,
    heading: "Mounthly",
    badge: "",
    text: "No minimum commitment\nPause or cancel anytime",
    price: 4990,
    list: [
      {
        id: 1,
        icon: CheckIcon,
        text: "Unlimited requests",
      },
      {
        id: 2,
        icon: CheckIcon,
        text: "Unlimited brands",
      },
      {
        id: 3,
        icon: CheckIcon,
        text: "Unlimited revisions",
      },
      {
        id: 4,
        icon: CheckIcon,
        text: "Free stock assets",
      },
      {
        id: 5,
        icon: CheckIcon,
        text: "Native source files",
      },
    ],
  },
  {
    id: 2,
    heading: "Quarterly",
    badge: "Save $1,500",
    text: "No minimum commitment\nPause or cancel anytime",
    price: 4490,
    list: [
      {
        id: 1,
        icon: CheckIcon,
        text: "200+ integrations",
      },
      {
        id: 2,
        icon: CheckIcon,
        text: "Advanced reporting and analytics",
      },
      {
        id: 3,
        icon: CheckIcon,
        text: "Up to 20 individual users",
      },
      {
        id: 4,
        icon: CheckIcon,
        text: "40GB individual data each user",
      },
      {
        id: 5,
        icon: CheckIcon,
        text: "Priority chat and email support",
      },
    ],
  },
  {
    id: 3,
    heading: "Yearly",
    badge: "Save $12,000",
    text: "No minimum commitment\nPause or cancel anytime",
    price: 3990,
    list: [
      {
        id: 1,
        icon: CheckIcon,
        text: "Advanced custom fields",
      },
      {
        id: 2,
        icon: CheckIcon,
        text: "Audit log and data history",
      },
      {
        id: 3,
        icon: CheckIcon,
        text: "Unlimited individual users",
      },
      {
        id: 4,
        icon: CheckIcon,
        text: "Unlimited individual data",
      },
      {
        id: 5,
        icon: CheckIcon,
        text: "Personalized priority service",
      },
    ],
  },
];

function PlanCard({ heading, text, badge, price, list }: Plan) {
  return (
    <Stack bg="white" borderRadius="xl" w="full" h="full">
      <Stack gap="4" px="8" pb="8" pt="10" align="start">
        <Stack gap="2" align="start" w="full">
          <HStack justify="space-between" w="full">
            <Heading
              as="h5"
              fontSize="display.xs"
              lineHeight="display.xs"
              fontWeight="semibold"
              color="violet.800"
            >
              {heading}
            </Heading>
            {badge && (
              <Badge variant="brand" size="lg">
                {badge}
              </Badge>
            )}
          </HStack>
          <Text
            fontSize="text.md"
            lineHeight="text.md"
            color="gray.600"
            whiteSpace="pre-line"
          >
            {text}
          </Text>
        </Stack>
        <Stack direction="row" gap="0">
          <Text
            fontSize="display.md"
            lineHeight="display.md"
            fontWeight="semibold"
            color="gray.900"
            letterSpacing="tight"
          >
            {price.toLocaleString("en-US", {
              style: "currency",
              maximumFractionDigits: 0,
              currency: "USD",
            })}
          </Text>
          <Text
            fontSize="text.md"
            lineHeight="text.md"
            fontWeight="semibold"
            color="gray.900"
            pt="1"
          >
            /month
          </Text>
        </Stack>
      </Stack>
      <Divider />
      <Stack gap="8" px="8" pt="8" pb="10" h="full" justify="space-between">
        <Stack gap="4">
          {list.map((item) => (
            <HStack key={item.id} gap="3">
              <Icon as={item.icon} fill="none" />
              <Text fontSize="text.md" lineHeight="text.md" color="gray.600">
                {item.text}
              </Text>
            </HStack>
          ))}
        </Stack>
        <Button variant="secondary" size="xl" w="fit-content">
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
}

function HPlanCard({ heading, text, badge, price, list }: Plan) {
  return (
    <Stack bg="gray.950" borderRadius="xl" w="full" h="full">
      <Stack gap="4" px="8" pb="8" pt="10" align="start" direction="row">
        <Stack gap="2" align="start" w="full">
          <HStack justify="space-between" w="full">
            <Heading
              as="h5"
              fontSize="display.xs"
              lineHeight="display.xs"
              fontWeight="semibold"
              color="brand.500"
            >
              {heading}
            </Heading>
            {badge && (
              <Badge variant="brand" size="lg">
                {badge}
              </Badge>
            )}
          </HStack>
          <Text
            fontSize="text.md"
            lineHeight="text.md"
            color="gray.300"
            whiteSpace="pre-line"
          >
            {text}
          </Text>
        </Stack>
        <Stack direction="row" gap="0">
          <Text
            fontSize="display.lg"
            lineHeight="display.lg"
            fontWeight="semibold"
            color="gray.50"
            letterSpacing="tight"
          >
            {price.toLocaleString("en-US", {
              style: "currency",
              maximumFractionDigits: 0,
              currency: "USD",
            })}
          </Text>
          <Text
            fontSize="text.lg"
            lineHeight="text.lg"
            fontWeight="semibold"
            color="gray.50"
            pt="1"
          >
            /month
          </Text>
        </Stack>
      </Stack>
      <HStack gap="8" px="8" pb="8" h="full" justify="space-between">
        <HStack gap="6">
          {list.map((item) => (
            <HStack key={item.id} gap="3">
              <Icon as={item.icon} fill="none" />
              <Text fontSize="text.md" lineHeight="text.md" color="gray.300">
                {item.text}
              </Text>
            </HStack>
          ))}
        </HStack>
        <Button variant="tertiary" size="xl" w="fit-content">
          Get Started
        </Button>
      </HStack>
    </Stack>
  );
}

function PlansSection() {
  return (
    <Box as="section">
      <Box py={{ base: "16", md: "24" }}>
        <Stack gap="3">
          <Text
            fontSize={{ base: "text.sm" }}
            lineHeight={{ base: "text.sm" }}
            color="brand.200"
          >
            Pricing
          </Text>
          <Stack
            gap="4"
            direction={{ base: "column", md: "row" }}
            justify={{ base: "start", md: "space-between" }}
          >
            <Heading
              fontSize={{ base: "display.lg" }}
              lineHeight={{ base: "display.lg" }}
              fontWeight="semibold"
              color="gray.50"
              letterSpacing="tight"
            >
              Plans
            </Heading>
            <Text
              fontSize={{ base: "text.lg" }}
              lineHeight={{ base: "text.lg" }}
              color="gray.300"
              whiteSpace="pre-line"
              textAlign={{ base: "left", md: "right" }}
            >
              {"Choose a plan that's right for you.\nPause or cancel anytime."}
            </Text>
          </Stack>
        </Stack>
      </Box>
      <Box gap="2" pb={{ base: "16", md: "24" }}>
        <VStack
          as={Splide}
          aria-label="My Favorite Images"
          hasTrack={false}
          gap={{ base: "4", md: "8" }}
          pb={{ md: "8" }}
          options={{
            gap: "2rem",
            perPage: 3,
            drag: false,
            arrows: false,
            pagination: false,
            breakpoints: {
              768: {
                perPage: 1,
              },
              1280: {
                perPage: 2,
                drag: true,
                arrows: true,
              },
            },
          }}
        >
          <Box as={SplideTrack} w="full" borderRadius="xl">
            {plans.map((plan) => (
              <VStack as={SplideSlide} key={plan.id} w="full">
                <PlanCard
                  heading={plan.heading}
                  badge={plan.badge}
                  text={plan.text}
                  price={plan.price}
                  list={plan.list}
                />
              </VStack>
            ))}
          </Box>
          <HStack className="splide__arrows" gap="8">
            <Button
              className="splide__arrow splide__arrow--prev"
              variant="arrow"
            >
              <Icon as={ArrowLeft} />
            </Button>
            <Button
              className="splide__arrow splide__arrow--next"
              variant="arrow"
            >
              <Icon as={ArrowRight} />
            </Button>
          </HStack>
        </VStack>
        <Show above="md">
          <HPlanCard
            heading="Pure CMS"
            badge=""
            text="No-code development Without design."
            price={2000}
            list={[
              { id: 1, icon: CheckIcon, text: "Webflow" },
              { id: 2, icon: CheckIcon, text: "Readymag" },
              { id: 3, icon: CheckIcon, text: "Tilda" },
            ]}
          />
        </Show>
      </Box>
    </Box>
  );
}

export default PlansSection;
