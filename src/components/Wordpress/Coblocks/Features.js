import { Container, HStack } from "@chakra-ui/react";

const Features = (props) => {
    const { children } = props;
    // console.log(props);
    return <Container maxW="6xl">
        <HStack>
            {children}
        </HStack>
    </Container>
}

export default Features;