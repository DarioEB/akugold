import React from 'react';
import styled from '@emotion/styled';

const WhatsappContainer = styled.div`
    position: fixed;
    left: .5rem;
    bottom: .5rem;
    display: flex;
    flex-direction: column;
    z-index: 15;
    @media (min-width: 768px) {
        left: 1rem; 
        bottom: 1rem;
    }
    a {
        display: flex;
        gap: .75rem;
        align-items: center;
        background: #000; 
        padding: 1rem 2rem;
        font-size: 1.4rem;
        border-radius: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        i {
            font-size: 1.6rem;
        }
        @media (min-width: 768px) {
            font-size: 1.6rem;
            i { 
                font-size: 1.8rem;
            }
        }
    }
`

const Whatsapp = () => {


    return (
        <WhatsappContainer>
            <a
                href={`https://api.whatsapp.com/send/?phone=543755653705&text&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp text-gradient"></i>
                <span className="text-gradient">Consultas</span>
            </a>
        </WhatsappContainer>
    );
}

export default Whatsapp;