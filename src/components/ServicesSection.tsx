import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

const lists = [
  {
    id: 1,
    list: [
      { id: 1, text: "Websites" },
      { id: 2, text: "Landing page" },
      { id: 3, text: "Mobile apps" },
      { id: 4, text: "Design systems" },
      { id: 5, text: "Wireframes" },
      { id: 6, text: "SAAS" },
    ],
  },
  {
    id: 2,
    list: [
      { id: 1, text: "Logos & branding" },
      { id: 2, text: "Identity" },
      { id: 3, text: "Packaging" },
      { id: 4, text: "Business cards" },
      { id: 5, text: "Brochures" },
      { id: 6, text: "Guidelines" },
    ],
  },
  {
    id: 3,
    list: [
      { id: 1, text: "Digital ads" },
      { id: 2, text: "Icons" },
      { id: 3, text: "Social graphics" },
      { id: 4, text: "Email graphics" },
      { id: 5, text: "Banners" },
      { id: 6, text: "Creatives" },
    ],
  },
  {
    id: 4,
    list: [
      { id: 1, text: "Resumes" },
      { id: 2, text: "Blog graphics" },
      { id: 3, text: "Pitch decks" },
      { id: 4, text: "Side decks" },
      { id: 5, text: "Infographics" },
      { id: 6, text: "& more, more" },
    ],
  },
];

function ServicesSection() {
  return (
    <VStack
      as="section"
      py={{ base: "16", md: "24" }}
      gap={{ base: "12", md: "16" }}
    >
      <Container>
        <Heading
          fontSize={{ base: "display.lg", md: "display.xl" }}
          lineHeight={{ base: "display.lg", md: "display.xl" }}
          fontWeight="semibold"
          letterSpacing="tight"
          variant="primary"
        >
          Website, apps,
          <br /> branding & more...
        </Heading>
      </Container>
      <Container>
        <Grid
          templateColumns={{
            base: "repeat(2, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
          }}
          gap={{ base: "6", md: "normal" }}
          w={{ base: "fit-content", md: "full" }}
        >
          {lists.map((list) => (
            <GridItem key={list.id}>
              <Box as="ul">
                {list.list.map((item) => (
                  <Text
                    key={item.id}
                    as="li"
                    fontSize="text.lg"
                    lineHeight="text.lg"
                    variant="tertiary"
                  >
                    {item.text}
                  </Text>
                ))}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </VStack>
  );
}

export default ServicesSection;
