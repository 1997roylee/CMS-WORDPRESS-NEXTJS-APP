/* eslint-disable react/prop-types */
import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const NavItem = ({ children, href }) => {
    return (
        <Link href={href}>
            <Text cursor="pointer" fontWeight={'bold'}>
                {children}
            </Text>
        </Link>
    );
};

export default NavItem;
