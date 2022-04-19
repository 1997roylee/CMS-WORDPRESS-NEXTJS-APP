import React from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { findOneChildByType } from '../../../utils/children';
import { Carousel, CarouselSlide } from '../../Carousel';

const CustomerStories = (props) => {
    const { headline, children } = props;

    const columns = findOneChildByType('Core/Columns', children);
    const columnList = React.Children.toArray(columns.props.children);

    return (
        <Container size='lg'>
            <Stack spacing={8} pb={32}>
                <Heading align="center">{headline}</Heading>
                <Carousel>
                    {columnList.map((column, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <CarouselSlide key={`CarouselSlide_${index}`}>
                            {column}
                        </CarouselSlide>
                    ))}
                </Carousel>
            </Stack>
        </Container>
    );
};

export default CustomerStories;
