import React from 'react';
import {
    Container,
    SlideSectionContainer,
    ContentSlideProducts,
    Title,
    ProductArticle,
    ProductArticleImage
} from '../UI/ui'
import image1 from '../../images/urban/1.jpg';
import image2 from '../../images/urban/2.jpg';
import image3 from '../../images/urban/3.jpg';
import image4 from '../../images/urban/4.jpg';
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



const Urban = () => {

    const products = [
        {name: 'Producto Urban Aku&Gold', image: image1, price: 1234},
        {name: 'Producto Urban Aku&Gold', image: image2, price: 1234},
        {name: 'Producto Urban Aku&Gold', image: image3, price: 1234},
        {name: 'Producto Urban Aku&Gold', image: image4, price: 1234}
    ];
    
    return (
        <SlideSectionContainer>
            <Container>
                <ContentSlideProducts>
                    <Title>
                        <h2>Aku&Gold</h2>
                        <span>
                            Urban
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
                        {products.map( (product, i) => (
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
                                                to={"/product"}
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
                        ) )}
                    </Swiper>
                </ContentSlideProducts>
            </Container>
        </SlideSectionContainer>
    );
}

export default Urban;