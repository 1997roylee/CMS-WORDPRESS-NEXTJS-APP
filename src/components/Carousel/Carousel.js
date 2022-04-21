/* eslint-disable react/prop-types */
import { Button, Flex } from '@chakra-ui/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { cloneElement, findChildrenByType } from '../../utils/children';
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

const Carousel = (props) => {
    const { children } = props;
    console.log(children);
    const slides = findChildrenByType('CarouselSlide', children);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideTo = useCallback(
        (index) => {
            // console.log(index);
            if (index < 0) {
                setCurrentIndex(slides.length - 1);
            } else if (index > slides.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(index);
            }
        },
        [slides.length]
    );

    useEffect(() => {
        const handler = setInterval(() => {
            slideTo(currentIndex + 1);
        }, 3000);
        return () => {
            clearInterval(handler);
        };
    }, [currentIndex, slideTo, slides.length]);

    const translateX = useMemo(
        () => `${25 - currentIndex * 50}%`,
        [currentIndex]
    );

    // const Slides = () =>
    //     slides.map((slide, index) =>
    //         cloneElement(slide, {
    //             key: `Slide_${index}`,
    //             isActive: index === currentIndex,
    //         })
    //     );

    const handleSlideToPrev = () => {
        slideTo(currentIndex - 1);
    };

    const handleSlideToNext = () => {
        slideTo(currentIndex + 1);
    };

    return (
        <Flex
            w="100%"
            flexWrap={'nowrap'}
            position="relative"
            style={{
                marginLeft: '-24px',
                marginRight: '-24px',
            }}
        >
            <Flex
                w="100%"
                flexWrap={'nowrap'}
                style={{
                    // marginLeft: '-24px',
                    // marginRight: '-24px',
                    transform: `translateX(${translateX})`,
                    transition: 'transform .4s ease',
                }}
            >
                {
                    slides.map((slide, index) =>
                        cloneElement(slide, {
                            key: `Slide_${index}`,
                            isActive: index === currentIndex,
                        })
                    )
                }
            </Flex>
            <Flex
                px={4}
                w="58%"
                position="absolute"
                top={'50%'}
                left="50%"
                transform={'translate(-50%, -50%)'}
                justify="space-between"
            >
                <Button
                    bg="#fff"
                    borderRadius="50%"
                    w={16}
                    h={16}
                    onClick={handleSlideToPrev}
                    boxShadow={
                        '0 2.75px 2.21px rgb(0 0 0 / 7%), 0 6.65px 5.32px rgb(0 0 0 / 4%), 0 12.5px 10px rgb(0 0 0 / 3%), 0 22px 18px rgb(0 0 0 / 3%), 0 42px 33.4px rgb(0 0 0 / 2%), 0 100px 80px rgb(0 0 0 / 2%) !important'
                    }
                >
                    <IoArrowBackSharp />
                </Button>
                <Button
                    bg="#fff"
                    borderRadius="50%"
                    w={16}
                    h={16}
                    onClick={handleSlideToNext}
                    boxShadow={
                        '0 2.75px 2.21px rgb(0 0 0 / 7%), 0 6.65px 5.32px rgb(0 0 0 / 4%), 0 12.5px 10px rgb(0 0 0 / 3%), 0 22px 18px rgb(0 0 0 / 3%), 0 42px 33.4px rgb(0 0 0 / 2%), 0 100px 80px rgb(0 0 0 / 2%) !important'
                    }
                >
                    <IoArrowForwardSharp />
                </Button>
            </Flex>
        </Flex>
    );
};

export default Carousel;
