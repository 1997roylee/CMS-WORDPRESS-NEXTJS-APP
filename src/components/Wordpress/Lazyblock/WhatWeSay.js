import React from 'react'
import { Container, Box, Flex, Heading, Stack, Button, Image } from '@chakra-ui/react'
const WhatWeSay = (props) => {
    const { headline } = props;

    return <Box py={{ md: 20, base: 10 }} mb={{ md: 10, base: 5 }} w='full'><Box bg='#F1F1F1' w='full' pt={20} pb={{md: 20, base: 0}} position='relative'>
        <Container size='lg' mx='auto' >
            <Flex justify='space-between' flexWrap={'wrap'}>
                <Stack spacing={4}>
                    <Heading>
                        {headline}
                    </Heading>
                    <Box>
                        <Button size='lg' bg='#fff'>
                            Get started
                        </Button>
                    </Box>

                </Stack>
                <Box w={443} >
                    <Image position={{ md: 'absolute', base: 'relative' }} w='443' bottom={0} src='/assets/images/coffee.png' alt='' />
                </Box>
            </Flex>
        </Container>
    </Box>
    </Box>
}

export default WhatWeSay;