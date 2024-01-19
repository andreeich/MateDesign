import { extendTheme, defineStyleConfig } from "@chakra-ui/react";
import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// utils
const colors = {
  base: {
    white: "#FFFFFF",
    black: "#000000",
  },
  gray: {
    25: "#FCFCFD",
    50: "#F9FAFB",
    100: "#F2F4F7",
    200: "#EAECF0",
    300: "#D0D5DD",
    400: "#98A2B3",
    500: "#667085",
    600: "#475467",
    700: "#344054",
    800: "#182230",
    900: "#101828",
    950: "#0C111D",
  },
  brand: {
    25: "#FCFFF6",
    50: "#F8FFEB",
    100: "#F0FFD6",
    200: "#E1FFAD",
    300: "#D0FF80",
    400: "#C1FF57",
    500: "#B3FF2D",
    600: "#98F000",
    700: "#71B300",
    800: "#4E7A00",
    900: "#273D00",
    950: "#131F00",
  },
  error: {
    25: "#FFFBFA",
    50: "#FEF3F2",
    100: "#FEE4E2",
    200: "#FECDCA",
    300: "#FDA29B",
    400: "#F97066",
    500: "#F04438",
    600: "#D92D20",
    700: "#B42318",
    800: "#912018",
    900: "#7A271A",
    950: "#55160C",
  },
  warning: {
    25: "#FFFCF5",
    50: "#FFFAEB",
    100: "#FEF0C7",
    200: "#FEDF89",
    300: "#FEC84B",
    400: "#FDB022",
    500: "#F79009",
    600: "#DC6803",
    700: "#B54708",
    800: "#93370D",
    900: "#7A2E0E",
    950: "#4E1D09",
  },
  success: {
    25: "#F6FEF9",
    50: "#ECFDF3",
    100: "#DCFAE6",
    200: "#ABEFC6",
    300: "#75E0A7",
    400: "#47CD89",
    500: "#17B26A",
    600: "#079455",
    700: "#067647",
    800: "#085D3A",
    900: "#074D31",
    950: "#053321",
  },
  violet: {
    25: "#FAF7FF",
    50: "#F3ECFD",
    100: "#E9DEFC",
    200: "#D3BEF9",
    300: "#BE9DF6",
    400: "#A87CF3",
    500: "#925CF0",
    600: "#7C3BED",
    700: "#661AEA",
    800: "#5813CD",
    900: "#2C0A67",
    950: "#160533",
  },
};
const fonts = {
  body: "Inter, sans-serif",
  heading: "Inter, sans-serif",
};
const fontSizes = {
  display: {
    "2xl": "4.5rem",
    xl: "3.75rem",
    lg: "3rem",
    md: "2.25rem",
    sm: "1.875rem",
    xs: "1.5rem",
  },
  text: {
    xl: "1.25rem",
    lg: "1.125rem",
    md: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },
};
const lineHeights = {
  display: {
    "2xl": "5.625rem",
    xl: "4.5rem",
    lg: "3.75rem",
    md: "2.75rem",
    sm: "2.375rem",
    xs: "2rem",
  },
  text: {
    xl: "1.875rem",
    lg: "1.75rem",
    md: "1.5rem",
    sm: "1.25rem",
    xs: "1.125rem",
  },
};
const radii = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.25rem",
  "4xl": "1.5rem",
  full: "9999px",
};
const space = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  4.5: "1.125rem",
  5: "1.25rem",
  5.5: "1.375rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
  120: "30rem",
  140: "35rem",
  160: "40rem",
  180: "45rem",
  192: "48rem",
  256: "64rem",
  320: "80rem",
  360: "90rem",
  400: "100rem",
  480: "120rem",

  none: "0rem",
  xxs: "0.125rem",
  xs: "0.25rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.5rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "5rem",
  "9xl": "6rem",
  "10xl": "8rem",
  "11xl": "10rem",
};
const sizes = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  xxs: "20rem",
  xs: "24rem",
  sm: "30rem",
  md: "35rem",
  lg: "40rem",
  xl: "48rem",
  "2xl": "64rem",
  "3xl": "80rem",
  "4xl": "90rem",
  "5xl": "100rem",
  "6xl": "120rem",
  container: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    xl: "80rem",
  },
};
const shadows = {
  xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
  md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
  lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
  xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
  "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
  "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",

  "ring-brand": "0px 0px 0px 4px rgba(179, 255, 45, 0.24)",
  "ring-brand-xs":
    "0px 0px 0px 4px rgba(179, 255, 45, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  "ring-brand-sm":
    "0px 0px 0px 4px rgba(179, 255, 45, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",

  "ring-gray": "0px 0px 0px 4px rgba(152, 162, 179, 0.14)",
  "ring-gray-xs":
    "0px 0px 0px 4px rgba(152, 162, 179, 0.14), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  "ring-gray-sm":
    "0px 0px 0px 4px rgba(152, 162, 179, 0.14), 0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",

  "ring-gray-secondary": "0px 0px 0px 4px rgba(152, 162, 179, 0.20)",

  "ring-error": "0px 0px 0px 4px rgba(240, 68, 56, 0.24)",
  "ring-error-xs":
    "0px 0px 0px 4px rgba(240, 68, 56, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
};

// components
const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: "semibold",
    borderRadius: "full",
  },
  sizes: {
    sm: {
      fontSize: "text.sm",
      lineHeight: "text.sm",
      px: "3",
      py: "2",
    },
    md: {
      fontSize: "text.sm",
      lineHeight: "text.sm",
      px: "3",
      py: "2.5",
    },
    lg: {
      fontSize: "text.md",
      lineHeight: "text.md",
      px: "4",
      py: "2.5",
    },
    xl: {
      fontSize: "text.md",
      lineHeight: "text.md",
      px: "4.5",
      py: "3",
    },
    "2xl": {
      fontSize: "text.lg",
      lineHeight: "text.lg",
      px: "5.5",
      py: "4",
    },
    // for IconButton
    ism: {
      w: "2.25rem",
      h: "2.25rem",
      borderRadius: "lg",
    },
    imd: {
      w: "2.5rem",
      h: "2.5rem",
      borderRadius: "lg",
    },
    ilg: {
      w: "2.75rem",
      h: "2.75rem",
      borderRadius: "lg",
    },
    ixl: {
      w: "3rem",
      h: "3rem",
      borderRadius: "lg",
    },
    i2xl: {
      w: "3.25rem",
      h: "3.25rem",
      borderRadius: "lg",
    },
    // arrow: {
    //   w: "3.5rem",
    //   h: "3.5rem",
    //   borderRadius: "full",
    // },
  },
  variants: {
    primary: {
      color: "gray.950",
      border: "1px solid",
      borderColor: "brand.600",
      bg: "brand.600",
      shadow: "xs",
      _hover: {
        borderColor: "brand.700",
        bg: "brand.700",
      },
      _focus: {
        shadow: "ring-brand-xs",
      },
      _disabled: {
        color: "gray.400",
        bg: "gray.100",
        borderColor: "gray.200",
      },
    },
    secondary: {
      color: "gray.100",
      border: "1px solid",
      borderColor: "gray.300",
      bg: "gray.950",
      shadow: "xs",
      // _hover: {
      //   borderColor: "brand.700",
      //   bg: "brand.700",
      // },
      _focus: {
        shadow: "ring-gray-xs",
      },
      _disabled: {
        color: "gray.400",
        bg: "gray.100",
        borderColor: "gray.200",
      },
    },
    tertiary: {
      color: "gray.800",
      border: "1px solid",
      borderColor: "gray.800",
      bg: "gray.50",
      shadow: "xs",
      _hover: {
        color: "gray.700",
      },
      _focus: {
        shadow: "ring-gray-xs",
      },
      _disabled: {
        color: "gray.400",
      },
    },
    xclose: {
      p: "md",
      color: "gray.700",
      borderRadius: "lg",
      _hover: {
        color: "gray.800",
        bg: "gray.50",
      },
      _focus: {
        bg: "gray.50",
        shadow: "ring-gray",
      },
    },
    arrow: {
      w: "3.5rem",
      h: "3.5rem",
      color: "gray.300",
      border: "1px solid",
      borderColor: "gray.200",
      borderRadius: "full",
      bg: "transparent",
      opacity: 1,
      _hover: {
        color: "gray.600 ",
        bg: "gray.200",
      },
      _disabled: {
        borderColor: "gray.100",
        color: "gray.300 !important",
        opacity: 1,
        bg: "transparent",
      },
    },
    clearDark: {
      p: "0",
      color: "gray.300",
      _hover: {
        color: "gray.200",
      },
      _disabled: {
        color: "gray.600",
      },
    },
  },
  defaultProps: {
    size: "sm",
  },
});
const Link = defineStyleConfig({
  baseStyle: {},
  sizes: {
    sm: {
      fontSize: "text.sm",
      lineHeight: "text.sm",
    },
    md: {
      fontSize: "text.sm",
      lineHeight: "text.sm",
    },
    lg: {
      fontSize: "text.md",
      lineHeight: "text.md",
    },
    xl: {
      fontSize: "text.md",
      lineHeight: "text.md",
    },
    "2xl": {
      fontSize: "text.lg",
      lineHeight: "text.lg",
    },
  },
  variants: {
    gray: {
      fontWeight: "semibold",
      color: "gray.600",
      _hover: {
        color: "gray.700",
        textDecor: "none",
      },
      _disabled: {
        color: "gray.400",
      },
    },
    grayDark: {
      fontWeight: "semibold",
      color: "gray.300",
      _hover: {
        color: "gray.200",
        textDecor: "none",
      },
      _disabled: {
        color: "gray.600",
      },
    },
    underline: {
      textDecor: "underline",
      color: "gray.600",
      _hover: {
        color: "gray.700",
      },
      _disabled: {
        color: "gray.400",
      },
    },
    lightDark: {
      fontWeight: "normal",
      textDecor: "none",
      color: "gray.400",
      _hover: {
        color: "gray.300",
      },
      _disabled: {
        color: "gray.700",
      },
    },
  },
  defaultProps: {
    size: "sm",
    variant: "gray",
  },
});
const Icon = defineStyleConfig({
  baseStyle: {
    w: "1.5rem",
    h: "1.5rem",
  },
});
const Container = defineStyleConfig({
  baseStyle: {
    maxW: "container.xl",
    px: {
      base: "1rem",
      md: "2rem",
    },
  },
});
const Divider = defineStyleConfig({
  baseStyle: {
    borderColor: "gray.200",
  },
});
const Badge = defineStyleConfig({
  baseStyle: {
    border: "1px solid",
    borderRadius: "2xl",
    fontWeight: "medium",
  },
  sizes: {
    sm: {
      px: "2",
      py: "0.5",
      fontSize: "text.xs",
      lineHeight: "text.xs",
    },
    md: {
      px: "2.5",
      py: "0.5",
      fontSize: "text.sm",
      lineHeight: "text.sm",
    },
    lg: {
      px: "3",
      py: "1",
      fontSize: "text.sm",
      lineHeight: "text.sm",
    },
  },
  variants: {
    gray: {
      bg: "gray.50",
      borderColor: "gray.200",
      color: "gray.700",
    },
    brand: {
      bg: "brand.50",
      borderColor: "brand.200",
      color: "brand.700",
    },
    error: {
      bg: "error.50",
      borderColor: "error.200",
      color: "error.700",
    },
    warning: {
      bg: "warning.50",
      borderColor: "warning.200",
      color: "warning.700",
    },
    success: {
      bg: "success.50",
      borderColor: "success.200",
      color: "success.700",
    },
  },
  defaultProps: {
    size: "sm",
    variant: "gray",
  },
});

const {
  definePartsStyle: definePartsStyleAccordion,
  defineMultiStyleConfig: defineMultiStyleConfigAccordion,
} = createMultiStyleConfigHelpers(accordionAnatomy.keys);
const baseStyle = definePartsStyleAccordion({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "8",
  },
  container: {
    border: "none",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2",
    textAlign: "left",
    p: "0",
    fontSize: { base: "text.lg", md: "text.xl" },
    lineHeight: { base: "text.lg", md: "text.xl" },
    fontWeight: "medium",
    color: "gray.900",
    bg: "transparent",

    _hover: {
      bg: "transparent",
    },
  },
  panel: {
    pt: "2",
    pb: "0",
    pl: "0",
    pr: { base: "8", md: "12" },
    fontSize: "text.md",
    lineHeight: "text.md",
    color: "gray.600",
  },
  icon: {
    color: "violet.400",
  },
});
export const Accordion = defineMultiStyleConfigAccordion({ baseStyle });

const theme = extendTheme({
  // utils
  colors,
  fonts,
  fontSizes,
  lineHeights,
  radii,
  space,
  sizes,
  shadows,

  // components
  components: {
    Button,
    Link,
    Icon,
    Container,
    Divider,
    Badge,
    Accordion,
  },
});

export default theme;
