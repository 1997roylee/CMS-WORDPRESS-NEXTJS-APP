import { Text, Heading, VStack, Image } from '@chakra-ui/react';

const FeatureItem = (props) => {
    const { title, body, icon } = props;
    return (
        <VStack>
            <Image src="" alt="" />
            <Heading>{title}</Heading>
            <Text>{body}</Text>
        </VStack>
    );
};

export default FeatureItem;
