import {
  Container,
  HStack,
  Image,
  Show,
  Icon,
  useBoolean,
  VStack,
  Box,
  Divider,
  Hide,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { XClose, Menu01, ChevronUp } from "./Icons";
import { MotionDiv } from "./MotionElement";
import Button from "./Button";

import logoFull from "../assets/logo-full.svg";
import logoFullWhite from "../assets/logo-full-white.svg";

const menuVariants = {
  hidden: {
    translateY: "-104%",
    // transition: { ease: "circOut", duration: 0.5 },
    // transition: { type: "swing", duration: 0.5 },
    // transitionEnd: {
    //   visibility: "hidden",
    //   // display: "none",
    // },
  },
  visible: {
    translateY: "0%",
    // display: "block",
    // visibility: "visible",
    // transition: { ease: "circIn", duration: 1.2 },
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function Navbar() {
  const [isOpen, setIsOpen] = useBoolean(false);
  const bg = useColorModeValue("base.white", "gray.950");
  const logo = useColorModeValue(logoFull, logoFullWhite);
  const collapseIconColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box
      as="header"
      position="fixed"
      inset="0"
      // backgroundImage="radial-gradient(rgba(0, 0, 0, 0) 1px, white 1px)"
      backgroundImage="linear-gradient(180deg, rgba(255,255,255,1) 20%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0.2) 100%);"
      _dark={{
        backgroundImage:
          "linear-gradient(180deg, rgba(12,17,29,1) 20%, rgba(12,17,29,0.8) 60%, rgba(12,17,29,0.2) 100%);",
      }}
      // backgroundSize="4px 4px"
      backdropFilter="blur(4px)"
      h="fit-content"
      zIndex="100"
      // borderBottom="1px solid"
      shadow="xs"
      // borderColor="gray.200"
      // bg="base.white"
    >
      <Container
        position="relative"
        bg={isOpen ? bg : "transparent"}
        transition="0.2s background ease-in"
      >
        <HStack h={{ base: "4.5rem", md: "5rem" }} justify="space-between">
          <Link as="button">
            <Image src={logo} w="142px" alt="MateDesign" />
          </Link>
          <Show above="md">
            <HStack gap={{ base: "lg", lg: "4xl" }}>
              <Link as="button">Why us</Link>
              <Link as="button">Process</Link>
              <Link as="button">Services</Link>
              <Link as="button">Compare</Link>
              <Link as="button">Plans</Link>
            </HStack>
          </Show>
          <Show above="md">
            <Button variant="secondary" size="lg">
              Get Started
            </Button>
          </Show>
          <Hide above="md">
            <AnimatePresence initial={false}>
              <Button
                aria-label="burger menu icon"
                variant="xclose"
                size="imd"
                onClick={setIsOpen.toggle}
              >
                {isOpen ? (
                  <Box
                    key="close"
                    as={motion.div}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 360 }}
                  >
                    <XClose />
                  </Box>
                ) : (
                  <Box
                    key="menu"
                    as={motion.div}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -180 }}
                    exit={{ rotate: -360 }}
                  >
                    <Menu01 />
                  </Box>
                )}
              </Button>
            </AnimatePresence>
          </Hide>
        </HStack>
        <AnimatePresence>
          <MotionDiv
            key="menu"
            hideFrom="md"
            w="full"
            pt={{ base: "4.5rem", md: "5rem" }}
            position="absolute"
            top="0"
            left="0"
            shadow="lg"
            bg={bg}
            zIndex={-1}
            variants={menuVariants}
            initial={false}
            animate={isOpen ? "visible" : "hidden"}
            // @ts-expect-error FramerMotion transition property
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            drag="y"
            dragElastic={0.1}
            dragConstraints={{ top: 0, bottom: 0 }}
            // @ts-expect-error framer motion example
            onDragEnd={({ offset, velocity }) => {
              const swipe = swipePower(offset.y, velocity.y);
              if (swipe < -swipeConfidenceThreshold) {
                setIsOpen.off();
              }
            }}
          >
            <VStack py="3xl" gap="md" align="start">
              <Link as="button" size="lg" py="lg" px="xl">
                Why us
              </Link>
              <Link as="button" size="lg" py="lg" px="xl">
                Process
              </Link>
              <Link as="button" size="lg" py="lg" px="xl">
                Services
              </Link>
              <Link as="button" size="lg" py="lg" px="xl">
                Compare
              </Link>
              <Link as="button" size="lg" py="lg" px="xl">
                Plans
              </Link>
            </VStack>
            <Divider />
            <Box pt="3xl" px="xl">
              <Button variant="secondary" size="lg" w="full">
                Get Started
              </Button>
              <HStack h="2rem" justify="center">
                <Icon as={ChevronUp} color={collapseIconColor} />
              </HStack>
            </Box>
          </MotionDiv>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default Navbar;
