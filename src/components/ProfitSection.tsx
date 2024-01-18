import {
  Box,
  HStack,
  Heading,
  VStack,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import logo from "../assets/logo-full-white-xl.svg";

type PercentItem = {
  id?: number;
  heading: string;
  text: string;
  percent: number;
  orientation: string;
  type: string;
};

function PercentItem({
  heading,
  text,
  percent,
  orientation = "left",
  type = "middle",
}: PercentItem) {
  return (
    <HStack
      justify="space-between"
      w="full"
      minH={`${(100 / 15 / 16) * percent}em`}
      // minH={`${percent}%`}
      // h={type === "bottom" ? "100%" : "auto"}
      flexGrow={type === "bottom" ? "1" : "0"}
      align="stretch"
      gap="0"
      flexDirection={orientation === "left" ? "row" : "row-reverse"}
    >
      <Box
        pt="2"
        pb="3"
        pr={orientation === "left" ? "8" : "0"}
        pl={orientation === "left" ? "0" : "8"}
        borderBottom={type !== "bottom" ? "1px dashed" : "none"}
        borderColor={orientation === "left" ? "violet.500" : "violet.400"}
        flexGrow={1}
      >
        <Heading
          as="h6"
          fontSize="text.xl"
          lineHeight="text.xl"
          fontWeight="600"
          color={orientation === "left" ? "gray.50" : "violet.300"}
        >
          {heading}
        </Heading>
        <Text
          fontSize="text.lg"
          lineHeight="text.lg"
          color={orientation === "left" ? "violet.200" : "violet.400"}
        >
          {text}
        </Text>
      </Box>
      <Box
        py="4"
        bg={orientation === "left" ? "gray.200" : "violet.600"}
        borderBottom={type !== "bottom" ? "1px solid" : "none"}
        borderColor={orientation === "left" ? "violet.500" : "violet.400"}
        borderTopRadius={type === "top" ? "lg" : "0"}
        borderBottomRadius={type === "bottom" ? "lg" : "0"}
        w="80px"
        flexShrink={0}
      >
        <Text
          fontSize="text.xl"
          lineHeight="text.xl"
          fontWeight="600"
          textAlign="center"
          color={orientation === "left" ? "violet.800" : "violet.50"}
        >
          {percent}%
        </Text>
      </Box>
    </HStack>
  );
}

const percentBars = {
  left: [
    {
      id: 1,
      heading: "Manager",
      text: "Oversight of deadlines, statuses and support",
      percent: 15,
      orientation: "left",
      type: "top",
    },
    {
      id: 2,
      heading: "Art-director",
      text: "Designers with 8+ years of experience will control the quality of work before completion",
      percent: 15,
      orientation: "left",
      type: "middle",
    },
    {
      id: 3,
      heading: "Any designer",
      text: "Specialized Middle+ level designers, for any task from logo design, to service design",
      percent: 60,
      orientation: "left",
      type: "middle",
    },
    {
      id: 4,
      heading: "Additional Support",
      text: "Experts in related fields on request",
      percent: 10,
      orientation: "left",
      type: "bottom",
    },
  ],
  right: [
    {
      id: 1,
      heading: "Taxes and benefits",
      text: "Pay taxes for the designer and provide him with equipment, social security and bonuses",
      percent: 35,
      orientation: "right",
      type: "top",
    },
    {
      id: 2,
      heading: "Middle Designer",
      text: "Middle designer who is focused on only 1 specialty",
      percent: 65,
      orientation: "right",
      type: "bottom",
    },
  ],
};

function ProfitSection() {
  return (
    <VStack gap="16" as="section" py="24">
      <Heading
        fontSize="display.2xl"
        lineHeight="display.2xl"
        fontWeight="600"
        color="gray.50"
        textAlign="center"
        whiteSpace="pre-line"
      >
        {"Profit from working\nwith MateDesign"}
      </Heading>
      <VStack gap="8" w="full">
        <HStack w="full">
          <HStack w="full" justify="center">
            <Image src={logo} />
          </HStack>
          <Text
            fontSize="text.lg"
            lineHeight="text.lg"
            fontWeight="600"
            color="gray.300"
          >
            vs
          </Text>
          <HStack w="full" justify="center">
            <Text
              fontSize="display.xs"
              lineHeight="display.xs"
              fontWeight="600"
              color="gray.50"
            >
              Salaried employee
            </Text>
          </HStack>
        </HStack>
        <HStack gap="2" align="stretch">
          <Stack gap="0">
            {percentBars.left.map((percent) => (
              <PercentItem
                key={percent.id}
                heading={percent.heading}
                text={percent.text}
                percent={percent.percent}
                orientation={percent.orientation}
                type={percent.type}
              />
            ))}
          </Stack>
          <Stack gap="0">
            {percentBars.right.map((percent) => (
              <PercentItem
                key={percent.id}
                heading={percent.heading}
                text={percent.text}
                percent={percent.percent}
                orientation={percent.orientation}
                type={percent.type}
              />
            ))}
          </Stack>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default ProfitSection;
