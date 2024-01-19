import { Button as Btn } from "@chakra-ui/react";
import { motion } from "framer-motion";

// @ts-expect-error forward any props
function Button(props) {
  return <Btn as={motion.button} whileTap={{ scale: 0.97 }} {...props} />;
}

export default Button;
