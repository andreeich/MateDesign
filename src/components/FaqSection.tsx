import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import { Minus, Plus } from "./Icons";
import { motion } from "framer-motion";

type FaqAccordionItem = {
  id?: number;
  heading: string;
  text: string;
};

const faqs: FaqAccordionItem[] = [
  {
    id: 1,
    heading: "How do i request designs?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
  {
    id: 2,
    heading: "Why wouldn't i just hire a full-time designer?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
  {
    id: 3,
    heading: "Is there a limit to how many requests I can have?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
  {
    id: 4,
    heading: "How fast will i receive my designs?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
  {
    id: 5,
    heading: "What if I don't like the design?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
  {
    id: 6,
    heading: "What if I only have a single request?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
  {
    id: 7,
    heading: "Do I have to sign a contract with you?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
  {
    id: 8,
    heading: "Are there any refunds if I don't like the service?",
    text: "If you are a new customer, you need to submit an application on our website, after which we will contact you and prepare everything to get you started.\n\nIf you are already our client, MateDesign offers a lot of flexibility in how you request a design. You can email us at hello@matedesign.co, or put the task in the backlog in ActiveCollab. Some common ways clients request designs is directly via ActiveCollab, sharing Google Docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in email or ActiveCollab, it's fair game.",
  },
];

function FaqAccordionItem({ heading, text }: FaqAccordionItem) {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span">{heading}</Box>
              {isExpanded ? (
                <Box
                  color="violet.400"
                  as={motion.div}
                  key="minus"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                >
                  <Minus />
                </Box>
              ) : (
                <Box
                  color="violet.400"
                  as={motion.div}
                  key="plus"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                >
                  <Plus />
                </Box>
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel whiteSpace="pre-line">{text}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

function FaqSection() {
  return (
    <Box py={{ base: "16", md: "24" }}>
      <Container>
        <Grid
          gap={{ base: "12", md: "16" }}
          templateColumns={{ base: "1fr", lg: "repeat(2, minmax(0, 1fr))" }}
        >
          <GridItem>
            <Stack gap={{ base: "4", md: "5" }}>
              <Stack gap={{ base: "3" }}>
                <Text
                  fontSize={{ base: "text.sm", md: "text.md" }}
                  lineHeight={{ base: "text.sm", md: "text.md" }}
                  fontWeight="semibold"
                  variant="brandSecondary"
                >
                  Support
                </Text>
                <Heading
                  fontSize={{ base: "display.md", md: "display.xl" }}
                  lineHeight={{ base: "display.md", md: "display.xl" }}
                  fontWeight="semibold"
                  letterSpacing="tight"
                  variant="primary"
                >
                  FAQs
                </Heading>
              </Stack>
              <Text
                fontSize={{ base: "text.lg" }}
                lineHeight={{ base: "text.lg" }}
                variant="tertiary"
              >
                Didn't find the answer? <br />
                Shoot us an email{" "}
                <Link as="button" size="2xl" variant="underline">
                  hello@matedesign.co
                </Link>
                .
              </Text>
            </Stack>
          </GridItem>
          <GridItem>
            <Accordion allowToggle={true} defaultIndex={0}>
              {faqs.map((faq) => (
                <FaqAccordionItem
                  key={faq.id}
                  heading={faq.heading}
                  text={faq.text}
                />
              ))}
            </Accordion>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default FaqSection;
