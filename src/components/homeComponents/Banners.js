import React from 'react';
import styled from '@emotion/styled';
import {
    Container, Title
} from '../UI/ui';

import bann1 from '../../images/banner/1.jpg';
import bann2 from '../../images/banner/2.jpg';
import { Link } from 'react-router-dom';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, {
    Pagination,
    Autoplay,
    Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Autoplay, Navigation]);
const BannersContainer = styled.section`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000;
    margin-bottom: 5rem;
`

const BannersContent = styled.div`
    /* display: grid;
    gap: 4rem;
    @media (min-width: 768px) {
        gap: 2rem;
        grid-template-columns: repeat(2, 1fr);
    } */
    padding-bottom: 4rem;
`

const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (min-width: 768px) {
            width: 75%;
        }
    }

    position: relative;
    .fill-categories {
        position: absolute;
        top: -100%;
        width: 80%;
        left: 10%;
        @media (min-width: 768px) {
            width: 75%;
            left: 12.5%;
        }
        height: 100%;
        background-color: rgba(0, 0, 0, 0.75);
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all .2s ease-in-out;
            font-family: var(--font_logo);
            text-align: center;
            color: #fff;
        line-height: 1.5;
        h4 {
            letter-spacing: 1px;
            font-size: 3.2rem;
            margin-bottom: 0;
            @media (min-width: 768px) {
                font-size: 3.8rem;
            }
        }
        .text {
            font-size: 1.2rem;
            font-family: var(--font_main);
            margin-top: 4rem;
            @media (min-width: 768px) {
                font-size: 1.4rem;
            }
        }
    }
    &:hover {
        .fill-categories {
            top: 0%;
            opacity: 1;
        }
    }
`

const Banners = () => {

    const banners = [
        { title: 'Aku&Gold Sport', image: bann1 },
        { title: 'Aku&Gold Urban', image: bann2 }
    ];

    return (

        <BannersContainer>
            <div className="banner-logo">
                <div className="back-logo">
                    <Container>
                        <Title>
                            <h2 className="t-w">Categorías</h2>
                            <span className="t-w">Visita nuestras secciones</span>
                        </Title>
                        <BannersContent>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={40}
                                autoplay={false}
                                loop={false}
                                breakpoints={{
                                    "768": {
                                        "slidesPerView": 2,
                                        "spaceBetween": 20
                                    },

                                }}
                            >
                                {banners.map((bann, i) => (
                                    <SwiperSlide
                                        key={i}
                                    >

                                        <BannerContent>
                                            <div>
                                                <img
                                                    src={bann.image}
                                                    alt={`Imagen Banner ${bann.title}`}
                                                />
                                            </div><Link
                                                to={"/"}
                                            >
                                                <div className="fill-categories">
                                                    <h4>
                                                        {bann.title}
                                                    </h4>
                                                    <span className="text">
                                                        Click para ir a <span className="text-gradient">{bann.title}</span>
                                                    </span>
                                                </div>
                                            </Link>
                                        </BannerContent>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </BannersContent>
                    </Container>
                </div>
            </div>
        </BannersContainer>
    );
}

export default Banners;