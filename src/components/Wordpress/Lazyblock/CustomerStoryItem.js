import { Box, Image, Text } from '@chakra-ui/react';
import decodeImage from '../../../utils/decodeImage';

const CustomerStoryItem = (props) => {
    const companyName = props['company-name'];
    const image = decodeImage(props['image']);

    return (
        <Box
            h={{lg: 320, base: 160}}
        >
            <Box p={8} w="100%" h="100%">
                <Text>{companyName}</Text>
            </Box>
            <picture>
                <Image
                    src={image.url}
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    borderRadius={6}
                    bottom={0}
                    w={'100%'}
                    overflow='hidden'
                    h="100%"
                    objectFit={'cover'}
                    alt={image.alt}
                />
            </picture>
        </Box>
    );
};

export default CustomerStoryItem;
