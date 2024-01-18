import { Box, Container, Show } from "@chakra-ui/react";
import PlansSection from "./PlansSection";
import ProfitSection from "./ProfitSection";

function ProfitAndPlansSection() {
  return (
    <Box as="section" py={{ base: "16", md: "24" }}>
      <Container>
        <Box bg="violet.700" borderRadius="4xl" px={{ base: "8", lg: "12" }}>
          <Show above="md">
            <ProfitSection />
          </Show>
          <PlansSection />
        </Box>
      </Container>
    </Box>
  );
}

export default ProfitAndPlansSection;
