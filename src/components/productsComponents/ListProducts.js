import React from 'react';
import styled from '@emotion/styled'
import {
    Container
} from '../UI/ui';
import Product from './Product';
import image1 from '../../images/sport/1.jpg'
import image2 from '../../images/sport/2.jpg'
import image3 from '../../images/sport/3.jpg'
import image4 from '../../images/sport/4.jpg'
import image5 from '../../images/urban/1.jpg'
import image6 from '../../images/urban/2.jpg'
import image7 from '../../images/urban/3.jpg'
import image8 from '../../images/urban/4.jpg'

const ListProductsContainer = styled.section`
    margin: 2rem 0;
    width: 100%;
`
const ListProductsContent = styled.div`
    display: grid;
    gap: 4rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        row-gap: 4rem;
    }
`

const ListProducts = () => {

    const products = [
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image1},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image2},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image4},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image3},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image8},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image6},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image7},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image5},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image3},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image2},
        {name: 'Product Stock Aku&Gold', price: 4561.25, image: image6}
    ]

    return (
        <ListProductsContainer>
            <Container>
                <ListProductsContent>
                    {products.map( (product, i) => (
                        <Product 
                            key={i}
                            product={product}
                        />
                    ))}
                </ListProductsContent>
            </Container>
        </ListProductsContainer>
    );
}

export default ListProducts;