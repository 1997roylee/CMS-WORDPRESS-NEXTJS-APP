import { Text } from "@chakra-ui/react";

const Paragraph = ({ content, ...rest }) => {
  return <Text {...rest}>{content}</Text>;
};

export default Paragraph;
