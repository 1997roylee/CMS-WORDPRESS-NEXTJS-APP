import { Box } from '@chakra-ui/react';

const CarouselSlide = (props) => {
    const { children, isActive } = props;
    return (
        <Box
            position='relative'
            px={6}
            w={{ base: '50%' }}
            flexShrink={0}
            cursor="pointer"
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
            <Box position="relative"
                w="100%"
                bg="#fff"
                overflow="hidden"
                borderRadius={6} boxShadow={isActive ? '0 2px 2px rgb(0 0 0 / 3%), 0 4px 4px rgb(0 0 0 / 4%), 0 10px 8px rgb(0 0 0 / 5%), 0 15px 15px rgb(0 0 0 / 6%), 0 30px 30px rgb(0 0 0 / 7%), 0 70px 65px rgb(0 0 0 / 9%);' : '0 2.75px 2.21px rgb(0 0 0 / 7%), 0 6.65px 5.32px rgb(0 0 0 / 4%), 0 12.5px 10px rgb(0 0 0 / 3%), 0 22px 18px rgb(0 0 0 / 3%), 0 42px 33.4px rgb(0 0 0 / 2%), 0 100px 80px rgb(0 0 0 / 2%)'}>
                {children}
            </Box>

        </Box>
    );
};

export default CarouselSlide;
