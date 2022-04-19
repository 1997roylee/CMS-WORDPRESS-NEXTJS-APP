import React from 'react';
import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import { findOneChildByType } from '../../../utils/children';
import { Carousel, CarouselSlide } from '../../Carousel';

const CustomerStories = (props) => {
    const { headline, children } = props;

    const columns = findOneChildByType('Core/Columns', children);
    const columnList = React.Children.toArray(columns.props.children);

    return (
        <Container size='lg' pb={{ md: 20, base: 10 }} mb={{ md: 10, base: 5 }} overflow={{base: 'hidden', md: 'visible'}}>
            <Stack spacing={8}>
                <Heading pb={8} whiteSpace={'pre-line'} align="center">{headline}</Heading>
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
