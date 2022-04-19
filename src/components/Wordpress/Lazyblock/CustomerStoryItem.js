import { Box, Image, Text } from '@chakra-ui/react';
import decodeImage from '../../../utils/decodeImage';

const CustomerStoryItem = (props) => {
    const companyName = props['company-name'];
    const image = decodeImage(props['image']);

    return (
        <Box
            position="relative"
            w="100%"
            cursor="pointer"
            bg="#fff"
            overflow="hidden"
            borderRadius={6}
            boxShadow="0 2px 2px rgb(0 0 0 / 3%), 0 4px 4px rgb(0 0 0 / 4%), 0 10px 8px rgb(0 0 0 / 5%), 0 15px 15px rgb(0 0 0 / 6%), 0 30px 30px rgb(0 0 0 / 7%), 0 70px 65px rgb(0 0 0 / 9%);"
        >
            <Box

                h={320}
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
        </Box>
    );
};

export default CustomerStoryItem;
