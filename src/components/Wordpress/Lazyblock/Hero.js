import React from 'react'
import { Heading, Text, VStack, Container, Button, Box } from '@chakra-ui/react';
import Editor from './Editor';

const Hero = (props) => {
    const { headline, body, button } = props;

    return <Container maxW={'5xl'} mx='auto' pt={24}>
        <VStack spacing={6}>
            <Heading align='center' whiteSpace={'pre-line'} fontSize={'5rem'}>{headline}</Heading>
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
        <VStack pt={8} mt={8}>
            <Editor />
        </VStack>
    </Container>
}

export default Hero;