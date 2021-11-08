import React from 'react';
import styled from '@emotion/styled';
import {
    Container
} from '../UI/ui';
import ProductImages from './ProductImages';
import InformationProduct from './InformationProduct';
import image1 from '../../images/product/1.jpg'
import image2 from '../../images/product/2.jpg'
import image3 from '../../images/product/3.jpg'
import image4 from '../../images/product/4.jpg'

const ProductContainer = styled.section`
    margin-top: 7rem;
    padding: 2rem 0;
`

const ProductContentContent = styled.div`
    display: grid;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const ProductContent = () =>{

    const images = [
        {image: image1},
        {image: image2},
        {image: image3},
        {image: image4}
    ];

    return (
        <ProductContainer>
            <Container>
                <ProductContentContent>
                    <ProductImages 
                        images={images}
                    />
                    <InformationProduct />
                </ProductContentContent>
            </Container>
        </ProductContainer>
    );
}

export default ProductContent;
