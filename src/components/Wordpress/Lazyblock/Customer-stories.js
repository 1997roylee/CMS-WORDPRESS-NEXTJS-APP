import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Heading, Stack } from "@chakra-ui/react"
import 'swiper/css';
import { findOneChildByType } from "../../../utils/children";

const CustomerStories = (props) => {
    const { headline, children } = props;


    const columns = findOneChildByType("Core/Columns", children)
    const columnList = React.Children.toArray(columns.props.children)


    return <Stack>
        <Heading>
            {headline}
        </Heading>
        <Box>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {columnList.map((column, index) => <SwiperSlide key={`Slide_${index}`}>{column}</SwiperSlide>)}
            </Swiper>

        </Box>
    </Stack>
}

export default CustomerStories