import { Box, Container, HStack } from "@chakra-ui/react";

const Features = (props) => {
    const { children } = props;
    // console.log(props);
    return <Box w='full'>
        <Container maxW="6xl" mx='auto'>
        <HStack>
            {children}
        </HStack>
    </Container>
    </Box>
}

export default Features;