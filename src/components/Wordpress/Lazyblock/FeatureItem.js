import { Text, Heading, VStack, Image } from '@chakra-ui/react';
import decodeImage from '../../../utils/decodeImage';

const FeatureItem = (props) => {
    const { title, body, icon } = props;

    const image = decodeImage(icon);
    return (
        <VStack mb={{ base: 8, md: 0 }}>
            <Image w={12} src={image.url} alt={image.alt} />
            <Heading align='center'>{title}</Heading>
            <Text align='center'>{body}</Text>
        </VStack>
    );
};

export default FeatureItem;
