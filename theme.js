import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'Plus Jakarta Sans, Open Sans, sans-serif',
        body: 'Plus Jakarta Sans, Open Sans, sans-serif',
    },
    components: {
        Container: {
            sizes: {
                md: {
                    maxW: '4xl',
                },
                lg: {
                    maxW: '6xl',
                },
            },
            defaultProps: {
                size: 'md',
            },
        },
    },
});

export default theme;
