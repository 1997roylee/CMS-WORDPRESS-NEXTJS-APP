import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    fonts: {
        heading: 'Helvetica Neue, Inter, Open Sans, sans-serif',
        body: 'Helvetica Neue, Inter, Open Sans, sans-serif',
    },
    components: {
        Container: {
            sizes: {
                md: {
                    maxW: '4xl',
                },
            },
            defaultProps: {
              size: 'md',
            }
        },
    },
});

export default theme;
