/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Container, Divider, Flex, HStack, Stack } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Container size="lg" mx="auto">
            <Stack>
                <Divider />
                <Flex>
                    <HStack>T-Rex</HStack>
                    <HStack>
                        <Box>Copyright © 2022 Trex Technology Limited</Box>
                    </HStack>
                </Flex>
            </Stack>
        </Container>
    );
};

export default Footer;
