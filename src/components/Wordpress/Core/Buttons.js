/* eslint-disable react/prop-types */
import React from 'react';
import { HStack } from '@chakra-ui/react';

const Buttons = ({ children, ...rest }) => {
    // console.log("buttons", rest);
    return <HStack>{children}</HStack>;
};

export default Buttons;
