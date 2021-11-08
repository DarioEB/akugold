import React from 'react';
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

const SlideHome = () => {

    return (
        <section
            className="content-slide-home"
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={true}
                loop={true}
            >   
                <SwiperSlide>
                    <div
                        className=" slide slide-urbano"
                    >
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="slide slide-deportivo"
                    >
                        
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default SlideHome;