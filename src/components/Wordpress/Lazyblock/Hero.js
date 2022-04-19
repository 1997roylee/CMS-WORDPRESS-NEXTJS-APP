import React from 'react'
import { Heading, Text, VStack, Container, Button, Box } from '@chakra-ui/react';
import Editor from './Editor';

const Hero = (props) => {
    const { headline, body, button } = props;

    return <Container size='lg' mx='auto' pt={24} pb={{ md: 20, base: 10 }} mb={{ md: 10, base: 5 }}>
        <VStack spacing={6}>
            <Heading align='center' whiteSpace={'pre-line'} fontSize={{ lg: '5rem', base: '2rem' }}>{headline}</Heading>
            <Text whiteSpace={'pre-line'} align='center'>{body}</Text>
            <VStack>
                <Box position='relative'>
                    <Box filter="blur(16px)" position='absolute' top={0} left={0} right={0} bottom={0} backgroundImage={"linear-gradient(to right, #FF44EC, #44BCFF, #FF675E)"}>
                    </Box>
                    <Button size='lg' bg='#111' color='#fff'>
                        {button}
                    </Button>
                </Box>
            </VStack>
        </VStack>
        <VStack pt={8} mt={8} display={{ base: 'none', md: 'flex' }}>
            <Editor />
        </VStack>
    </Container>
}

export default Hero;