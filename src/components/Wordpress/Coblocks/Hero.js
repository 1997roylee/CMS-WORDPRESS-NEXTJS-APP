import React from 'react';
import { Stack } from "@chakra-ui/react";
import { cloneElement, getChildByType } from "../../../utils/children";

const Hero = ({ contentAlign, height, children }) => {
  const Title = cloneElement(getChildByType("Core/Heading", children), {
    align: contentAlign,
  });
  const Description = cloneElement(getChildByType("Core/Paragraph", children), {
    align: contentAlign,
  });
  const Buttons = cloneElement(getChildByType("Core/Buttons", children), {
    align: contentAlign,
  })
  return <Stack justify='center' align='center' h={height} px={4}>{Title}{Description}{Buttons}</Stack>;
};

export default Hero;