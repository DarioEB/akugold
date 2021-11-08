import React, {  useState } from 'react';
import styled from '@emotion/styled';

const InformationProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const TitleProduct = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h4 {
        font-size: 2.8rem;
        text-transform: uppercase;
        margin: 0;
        @media (min-width: 768px) {
            font-size: 3.4rem;
        }
        margin-bottom: .5rem;
    }

    p {
        padding: 0;margin: 0;
    }
    .category {
        font-size: 1.8rem;
        font-weight: 600;
        font-family: var(--font_logo);
        background: var(--gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .subcategory {
        font-size: 1.8rem;
    }
    .price {
        font-size: 1.8rem;
        font-weight: 600;
    }
    @media (min-width: 768px) {
        .category {
            font-size: 2rem;
        }
        .subcategory {
            font-size: 2rem;
        }
        .price {
            font-size: 2rem;
        }
    }

`

const WhatsappProduct = styled.div`
    display: flex;
    flex-direction: column;
    align-items: unset;
    @media (min-width: 768px) {
        align-items: flex-start;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: 1.25rem;
        font-size: 1.6rem;
        background-color: #000;
        border-radius: 2rem;
        text-transform: uppercase;
        @media (min-width: 768px) {
            font-size: 1.8rem;
        }
        i {
            font-size: 2rem;
        }
    }
`

const ContentWaists = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    gap: 1rem;

    .select-waists {
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
        label {
            font-size: 1.4rem;
            @media (min-width: 768px) {
                font-size: 1.6rem;
            }
        }
        select {
            width: 100%;
            border-radius: .25rem;
            border: .1rem solid #000;
            padding: 1.25rem .5rem;
            text-align: center;
            font-size: 1.4rem;
            outline: none;
            background-color: #000;
            color: var(--colorSecundary);
            @media (min-width: 768px) {
                font-size: 1.6rem;
            }
        }
    }

    .amount-content {
        display: flex;
        flex-direction: row;
        justify-content: center;

        .number {
            width: 5rem;
            height: 6.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: .25rem solid #000;
            p {
                font-size: 1.6rem;
                @media (min-width: 768px) {
                    font-size: 1.8rem;
                }
            }
        }
        .buttons {
            width: 2.5rem;
                background-color: #000;
            height: 6.5rem;
            span {
                width: 2.5rem;
                height: 3.25rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                border: .1rem solid #000;
                font-weight: 600; 
                cursor: pointer;
                &:last-of-type {
                    border-top: .1rem solid var(--colorSecundary);
                }
            }
        }
    }

    
`

const ContentAmountCart = styled.div`
    display: grid;
    padding: 2rem 0;
    border-bottom: .25rem solid #000;
    .add-cart-button {
        width: 100%;
        text-align: center;
        background-color: #000;
        border-radius: .25rem;
        button {
            padding: 1.5rem 0;
            width: 100%;
            font-size: 1.8rem;
            font-weight: 600;
            cursor: pointer;
            text-transform: uppercase;
            @media (min-width: 768px) {
                font-size: 2rem;
            }
        }
    }
    
`


const ContentWaist = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    div 
    {
        justify-content: flex-start;
        display: flex;
        gap: .5rem;
        
        p {
            font-weight: 600;
            font-size: 1.6rem;
            @media (min-width: 768px) {
                font-size: 1.8rem;
            }
        }
    }
    .button-add {
        width: 100%;
        text-align: center;
        button {
            width: 100%;
            padding: 1rem 1.5rem;
            font-size: 1.6rem;
            background: var(--colorPrimary);
            color: #fff;
            cursor: pointer;
            border-radius: 2rem;
            @media (min-width: 768px) {
                font-size: 1.8rem;
            }
        }
    }
`

const InformationProduct = () => {

    const [waists, setWaists] = useState([]);

    const [waist, setWaist] = useState({
        waist: null,
        amount: 1
    });

    const [amount, setAmount] = useState(1);

    const addWaist = () => {
        setWaists([
            ...waists,
            waist
        ]);
        setWaist({
            waist: null,
            amount: 1
        })
        setAmount(1)
    }

    console.log(waists);

    return (
        <InformationProductContainer>
            <TitleProduct>
                <h4>Nombre producto Aku&Gold</h4>
                <p className="category">Aku&Gold Sport</p>
                <p className="subcategory">Musculosa</p>
                <p className="price">$ 4526.23</p>
            </TitleProduct>
            <WhatsappProduct>
                <a
                     href={`https://api.whatsapp.com/send?phone=543755653705&text=${`Hola! Quiero consultar el producto Aku&Gold`}`.replace(' ', '%20')}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="text-gradient">Consultar Producto</span> <i className="fab fa-whatsapp text-gradient"></i>
                </a>
            </WhatsappProduct>
            <ContentWaists>
                <div className="select-waists">
                    <label>Talle</label>
                    <select
                        defaultValue=""
                        name="waist"
                        onChange={(e) => setWaist({ ...waist, [e.target.name]: e.target.value })}
                    >
                        <option disabled value="">-- Selecciona el talle --</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className="amount-content">
                    <div className="number">
                        <p>{amount}</p>
                    </div>
                    <div className="buttons">
                        <span
                            className="text-gradient"
                            onClick={() => {
                                setAmount(amount + 1)
                                setWaist({
                                    ...waist,
                                    amount: waist.amount + 1
                                });
                            }}
                        >+</span>
                        <span
                            className="text-gradient"
                            onClick={() => {
                                setAmount(amount - 1)
                                setWaist({
                                    ...waist,
                                    amount: waist.amount - 1
                                })
                            }}
                        >-</span>
                    </div>
                </div>
            </ContentWaists>

            {waist ?
                <ContentWaist>
                    <div>
                        {waist.waist ? <p>Talle: {waist.waist}</p> : null}
                        {waist.waist ? <p>x {waist.amount}</p> : null}
                    </div>
                    {waist.waist ?
                        <div className="button-add">
                            <button>Seleccionar</button>
                        </div> : null}
                </ContentWaist>
                : null
            }
            {waists.length > 0 ?
                <ContentWaist>
                    <div>
                        <p>Talle: {waist.waist}</p>
                        <p>x {waist.amount}</p>
                    </div>
                    <div className="button-discart">
                        <button>Descartar</button>
                    </div>
                </ContentWaist>
                : null
            }
            <ContentAmountCart>
                <div className="add-cart-button">
                    <button
                        type="button"
                        onClick={() => addWaist}
                        className="text-gradient"
                    >Agregar al carrito</button>
                </div>
            </ContentAmountCart>
        </InformationProductContainer>
    );
}

export default InformationProduct;