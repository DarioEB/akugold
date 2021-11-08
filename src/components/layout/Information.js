import React from 'react';
import styled from '@emotion/styled';
import {
    Container
} from '../UI/ui';

const InformationContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction:  column;
    justify-content: center;
    min-height: 25vh;
    background: #000;
`

const InformationContent = styled.div`
    display: grid;
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

`

const Info = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column;
    gap: 1rem;
    padding: 2rem 0;
    @media (min-width: 768px) {
        padding: 4rem 0;
    }
    i {
        font-size: 1.8rem;
    }
    p {
        font-size: 1.6rem;
        margin: 0;padding: 0;
        font-weight: 300;
        text-transform: uppercase;
    }
    span {
        color: #474747;
        font-size: 1.4rem;
        font-weight: 300;
    }
    @media (min-width: 768px) {
        i { font-size: 2rem;}
        p {font-size: 1.8rem;}
        span { font-size: 1.6rem;}
    }
    
    &.bm {
        position: relative;
        &::before {
            position: absolute;
            content: '';
            width: .1rem;
            height: 50%;
            top: 25%;
            left: 0%;
            background-color: #000;
        }
        &::after {
            position: absolute;
            content: '';
            width: .1rem;
            height: 50%;
            top: 25%;
            left: 100%;
            background-color: #000;
        }
    }
`

const Information = () => {

    const information = [
        {title: 'Envíos a todo el país', icon: 'fas fa-truck', span: 'Gratis con compras mayor a $10000'},
        {title: 'Medios de pago', icon: 'fas fa-credit-card', span: 'Todos las tarjetas de crédito y débito'},
        {title: 'Atención Personalizada', icon: 'fab fa-whatsapp', span: 'Atención al cliente disponible 24/7'}
    ];

    return (
        <InformationContainer>
            <Container>
                <InformationContent>
                    {information.map((info, i) => (
                        <Info
                            key={i}
                            className={i === 1 ? 'bm' : ''}
                        >
                            <i className={`text-gradient ${info.icon}`}></i>
                            <p className="text-gradient">{info.title}</p>
                            <span className="text-gradient">{info.span}</span>
                        </Info>
                    ))}
                </InformationContent>
            </Container>
        </InformationContainer>
    );
}

export default Information;