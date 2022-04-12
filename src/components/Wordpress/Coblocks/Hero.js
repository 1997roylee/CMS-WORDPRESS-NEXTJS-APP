import React from 'react';
import { Stack } from "@chakra-ui/react";
import { getChildByType } from "../../../utils/children";

const Hero = ({ children }) => {
  const Title = React.cloneElement(getChildByType("Core/Heading", children), {
      align: "center",
  });
  const Description = React.cloneElement(getChildByType("Core/Paragraph", children), {
    align: "center",
});

  return <Stack px={4}>{Title}{Description}</Stack>;
};

export default Hero;