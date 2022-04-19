import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';

const Sales = (props) => {
    const { headline, description } = props;
    const buttonLabel = props['button-label'];

    return <Container mx='auto' size='lg' py={20}>
        <Box bg='#001933' w='full' p={8} borderRadius={'2rem'}>
            <VStack spacing={4} my={8}>
                <Heading color='#fff'>
                    {headline}
                </Heading>
                <Text color='#fff'>
                    {description}
                </Text>
                <Button size='lg'>
                    {buttonLabel}
                </Button>
            </VStack>
        </Box>
    </Container>
}

export default Sales;