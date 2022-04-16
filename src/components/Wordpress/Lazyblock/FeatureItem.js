import { Heading, Image, Stack, Text } from '@chakra-ui/react';
import decodeImage from '../../../utils/decodeImage';

const FeatureItem = (props) => {
    const { title, description } = props;
    const image = decodeImage(props['logo']);
  
    return (
        <Stack>
            <Image src={image.url} alt={image.alt} />
            <Heading>{title}</Heading>
            <Text>{description}</Text>
        </Stack>
    );
};

export default FeatureItem;
