/* eslint-disable react/prop-types */
import React from 'react';
import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import NavItem from './NavItem';

const Header = () => {
    return (
        <Flex justify="space-between" px={4} maxW={'6xl'} mx="auto">
            <HStack spacing={8}>
                <Flex align="center">
                    <Image
                        w={24}
                        src="/assets/images/TREX_S_B_RGB.png"
                        alt="T-Rex Logo"
                    />
                    <Text fontWeight={'bold'}>Trex Technology</Text>
                </Flex>
            </HStack>
            <HStack spacing={8}>
                <NavItem href="sales">Tools</NavItem>
                <NavItem href="sales">Contact Sales</NavItem>
            </HStack>
        </Flex>
    );
};

export default Header;
