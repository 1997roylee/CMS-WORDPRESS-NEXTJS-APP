import { Container, HStack, SimpleGrid } from '@chakra-ui/react';

const Features = (props) => {
    // console.log(props)
    const { children } = props;
    return (
        <Container mx='auto'>
            <SimpleGrid columns={children.length}>{children}</SimpleGrid>
        </Container>
    );
};

export default Features;
