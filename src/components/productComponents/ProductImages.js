import React, { useState } from 'react';
import styled from '@emotion/styled'


const ProductImagesContent = styled.div`
    display: flex;
    flex-direction: column;
    
`

const ImageMain = styled.div`
    width: 80%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 65%;
    }
`

const ListImages = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;
`

const ProductImages = ({images}) => {

    const [imagemain, setImageMain] = useState(images[0].image);

    return (
        <ProductImagesContent>
            <ImageMain>
                <img 
                    src={imagemain}
                    alt="Imagen "
                />
            </ImageMain>
            <ListImages>
                {images.map((image, i) => (
                    <div
                        key={i}
                    >
                        <img 
                            onClick={() => setImageMain(image.image)}
                            src={image.image}
                            alt="Imagen "
                        />
                    </div>
                ))}
            </ListImages>
        </ProductImagesContent>
    );
}

export default ProductImages;