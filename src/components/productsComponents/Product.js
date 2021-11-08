import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
    ProductArticle, ProductArticleImage
} from '../UI/ui';

const ProductContent = styled.div`
    display: block;
    margin: 0 auto;
`

const Product = ({ product }) => {
    return (
        <ProductContent>
            <ProductArticle
            >
                <ProductArticleImage>
                    <img
                        src={product.image}
                        alt={`Imagen Product ${product.name}`}
                    />
                    <div className="film">
                        <Link
                            to={"/product"}
                            className="film-button"
                        >Ver Producto</Link>
                    </div>
                </ProductArticleImage>
                <div className="product-description">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
            </ProductArticle>
        </ProductContent>
    )
}

export default Product;