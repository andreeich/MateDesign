import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function FaqSection() {
  return (
    <Box py={{ base: "16" }}>
      <Container>
        <Stack gap={{ base: "12" }}>
          <Stack>
            <Stack>
              <Text
                fontSize={{ base: "text.sm" }}
                lineHeight={{ base: "text.sm" }}
                color="brand.700"
              >
                Support
              </Text>
              <Heading
                fontSize={{ base: "display.md" }}
                lineHeight={{ base: "display.md" }}
                fontWeight="semibold"
                letterSpacing="tight"
                color="gray.900"
              >
                FAQs
              </Heading>
            </Stack>
            <Text
              fontSize={{ base: "text.lg" }}
              lineHeight={{ base: "text.lg" }}
              color="gray.600"
            >
              Didn't find the answer? <br />
              Shoot us an email{" "}
              <Link size="2xl" variant="underline">
                hello@matedesign.co
              </Link>
              .
            </Text>
          </Stack>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
}

export default FaqSection;
