import React, { Fragment } from 'react';
// HomeComponents
import SlideHome from './homeComponents/SlideHome';
import Urban from './homeComponents/Urban';
import Sport from './homeComponents/Sport';
import Banners from './homeComponents/Banners';
import Information from './layout/Information';
import Hits from './homeComponents/Hits';
import Whatsapp from './layout/Whatsapp';
const Home = () => {

    return (
        <Fragment>
            <SlideHome />
            <Urban />
            <Information />
            <Sport />
            <Banners />
            <Hits />
            <Whatsapp />
        </Fragment>
    );
}

export default Home;