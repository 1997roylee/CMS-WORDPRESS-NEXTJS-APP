import { Box } from '@chakra-ui/react';

const CarouselSlide = (props) => {
    const { children, isActive } = props;
    return (
        <Box
            position='relative'
            px={6}
            w={'50%'}
            flexShrink={0}
            style={{
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
            }}
        >
            <Box
                position='absolute'
                left={0}
                right={0}
                mx={6}
                zIndex={10}
                bottom={0}
                borderRadius={6}
                top={0}
                style={{
                    background: isActive
                        ? 'linear-gradient(180deg, #000 -5%, rgba(0, 0, 0, 0) 50%)'
                        : '',
                }}
            ></Box>
            {children}
        </Box>
    );
};

export default CarouselSlide;
