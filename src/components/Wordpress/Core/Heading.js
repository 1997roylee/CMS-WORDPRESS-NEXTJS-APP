import { Text } from "@chakra-ui/react";

const Heading = (props) => {
  const { content, ...rest } = props;
  return (
    <Text as="h1" fontSize="6xl" {...rest}>
      {content}
    </Text>
  );
};

export default Heading;
