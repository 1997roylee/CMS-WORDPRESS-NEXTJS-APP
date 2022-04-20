/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from '@chakra-ui/react';

const Heading = (props) => {
    const { content, align, level, ...rest } = props;
    console.log(rest);

    const as = (level && `h${level}`) || 'h6';
    const fontSize = (level && `${6 - level}xl`) || 'xl';
    console.log(fontSize, content, level);

    return (
        <Text as={as} fontSize={fontSize} textAlign={align} {...rest}>
            {content}
        </Text>
    );
};

export default Heading;
