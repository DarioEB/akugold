import React, { Fragment } from 'react';
import Information from './layout/Information';
import Whatsapp from './layout/Whatsapp';
import ProductContent from './productComponents/ProductContent';
import Recomendations from './productComponents/Recomendations';

const Product = () => {


    return (
        <Fragment>
            <ProductContent />
            <Recomendations />
            <Information />
            <Whatsapp />
        </Fragment>
    );
}

export default Product;