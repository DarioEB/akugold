import React, { Fragment } from 'react';
import Filters from './productsComponents/Filters';
import ListProducts from './productsComponents/ListProducts';
import Information from './layout/Information';
import Whatsapp from './layout/Whatsapp'

const Products = () => {

    return (
        <Fragment>
            <Filters />
            <ListProducts />
            <Information />
            <Whatsapp />
        </Fragment>
    );
}

export default Products;