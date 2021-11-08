import React from 'react';
import {
    Container,
    SlideSectionContainer,
    ContentSlideProducts,
    Title,
    ProductArticle,
    ProductArticleImage
} from '../UI/ui'
import image1 from '../../images/sport/1.jpg';
import image2 from '../../images/sport/2.jpg';
import image3 from '../../images/sport/3.jpg';
import image4 from '../../images/sport/4.jpg';
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
import { Link } from 'react-router-dom';

SwiperCore.use([Pagination, Autoplay, Navigation]);

const Recomendations = () => {

    const products = [
        {name: 'Producto Recomedación Aku&Gold', image: image1, price: 1562},
        {name: 'Producto Recomedación Aku&Gold', image: image2, price: 1234},
        {name: 'Producto Recomedación Aku&Gold', image: image3, price: 1234},
        {name: 'Producto Recomedación Aku&Gold', image: image4, price: 1234}
    ];

    return (<SlideSectionContainer>
        <Container>
            <ContentSlideProducts>
                <Title>
                    <h2>Aku&Gold Recomendaciones</h2>
                    <span>
                        Otros productos que te podrías interesar
                    </span>
                </Title>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        "768": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        },

                    }}
                >
                    {products.map((product, i) => (
                        <SwiperSlide
                            key={i}
                        >
                            <ProductArticle>
                                <ProductArticleImage>
                                    <img
                                        src={product.image}
                                        alt={`Imagen de producto ${product.name}`}
                                    />
                                    <div className="film">
                                        <Link
                                            to={"/"}
                                            className="film-button"
                                        >
                                            Ver Producto
                                        </Link>
                                    </div>
                                </ProductArticleImage>
                                <div className="product-description">
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                </div>
                            </ProductArticle>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContentSlideProducts>
        </Container>
    </SlideSectionContainer>)
}

export default Recomendations;