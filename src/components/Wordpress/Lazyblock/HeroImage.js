import { Box, Container, Image } from '@chakra-ui/react';
import decodeImage from '../../../utils/decodeImage';

const HeroImage = (props) => {
    const image = decodeImage(props['hero-image']);
    return (
        <Container mx='auto'>
            <Image alt={image.alt} src={image.url} />
        </Container>
    );
};

export default HeroImage;
