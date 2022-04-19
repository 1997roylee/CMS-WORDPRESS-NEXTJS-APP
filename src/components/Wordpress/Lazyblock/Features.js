import { Container, Heading, VStack } from "@chakra-ui/react";

const Features = (props) => {
    const { headline, children } = props;
    return <Container maxW={'6xl'} mx='auto'>
        <VStack spacing={8}>
            <Heading align='center' whiteSpace={'pre-line'}>
                {headline}
            </Heading>
            {children}
        </VStack>
    </Container>
}

export default Features;
