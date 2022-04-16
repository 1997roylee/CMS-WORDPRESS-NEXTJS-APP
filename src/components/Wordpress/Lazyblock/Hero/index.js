import { Heading, Stack, Text, VStack } from '@chakra-ui/react';

export default function Hero(props) {
    const { title, description, children } = props;
    console.log(props);
    return (
        <Stack spacing={8}>
            <Heading align="center">{title}</Heading>
            <Text align="center">{description}</Text>
            <VStack>{children}</VStack>
        </Stack>
    );
}
