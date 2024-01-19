import FeaturesSection from "./components/FeaturesSection";
import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import { Box } from "@chakra-ui/react";
import TeamSection from "./components/TeamSection";
import ServicesSection from "./components/ServicesSection";
import ProfitAndPlansSection from "./components/ProfitAndPlansSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Box as="main" mt={{ base: "4.5rem", md: "5rem" }} overflow="hidden">
        <HeaderSection />
        <FeaturesSection />
        <TeamSection />
        <ServicesSection />
        <ProfitAndPlansSection />
        <FaqSection />
      </Box>
      <Footer />
    </>
  );
}

export default App;
