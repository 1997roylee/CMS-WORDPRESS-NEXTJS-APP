import { Container, Heading, VStack } from "@chakra-ui/react";

const Features = (props) => {
    const { headline, children } = props;
    return <Container size='lg' mx='auto' pb={{ md: 20, base: 10 }} mb={{ md: 10, base: 5 }}>
        <VStack spacing={8}>
            <Heading align='center' whiteSpace={'pre-line'}>
                {headline}
            </Heading>
            {children}
        </VStack>
    </Container>
}

export default Features;
