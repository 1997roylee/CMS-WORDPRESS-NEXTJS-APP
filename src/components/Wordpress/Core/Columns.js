/* eslint-disable react/prop-types */
import React from 'react';
import { Flex } from '@chakra-ui/react';

const Columns = (props) => {
    const { children } = props;
    return (
        <Flex flexDirection={{ base: 'column', md: 'row' }}>{children}</Flex>
    );
};

export default Columns;
