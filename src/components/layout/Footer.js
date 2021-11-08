import React from 'react';
import styled from '@emotion/styled';
import {
    Container
} from '../UI/ui';
import logoAku from '../../images/logo_aku.png';
import { Link } from 'react-router-dom';
const FooterContainer = styled.footer`
    min-height: 25vh;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem 0;
    background-color: #000;
`

const FooterContent = styled.div`
    display: grid;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
`

const FooterContentLogo = styled.div`
    div {
        width: 75%;
    }

`

const H6 = styled.h6`
        margin-top: 1rem;
        margin-bottom: 2rem;
        color : #fff;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 2.4rem;
        @media (min-width: 768px) {
            font-size: 2.6rem;
        }
`

const FooterContentNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .footer-nav-link {
        color: #fff;
        font-size: 1.4rem;
        font-weight: 300;
        @media (min-width: 768px) {
            font-size: 1.6rem;
        }
        &:hover {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`

const FooterContentNewsletter = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 2rem;
    }
    
`

const FieldNewsletter = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    label {
        font-size: 1.2rem;
        font-weight: 300;
        @media (min-width: 768px) {
            font-size: 1.4rem;
        }
    }
    input {
        background-color: #000;
        color: #fff;
        padding: 1.25rem;
        font-size: 1.4rem;
        border: none;
        border-radius:.15rem;
        border: .1rem solid var(--colorGray);
        transition: all .15s linear;
        &:focus {
            border: .1rem solid var(--colorSecundary);
        }
        @media (min-width: 768px) {
            font-size: 1.6rem;
        }
    }
`

const FooterContentSocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
    @media (min-width: 768px) {
        
        align-items: flex-end;
    }

    .footer-socialmedia-link {
        display: flex;
        align-items: center;
        gap: .75rem;
        font-size: 1.4rem;
        color: #fff;
        text-transform: uppercase;
        font-weight: 300;
        @media (min-width: 768px) {
            font-size: 1.6rem;
        }
        &:hover {
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

`


const Footer = () => {

    return (
        <FooterContainer>
            <Container>
                <FooterContent>
                    <FooterContentLogo>
                        <Link
                            to={"/"}
                        >
                            <div>
                                <img
                                    src={logoAku}
                                    alt="Logotipo Aku&Gold"
                                />
                            </div>
                        </Link>
                    </FooterContentLogo>
                    <FooterContentNav>
                        <H6>Mapa del sitio</H6>
                        <Link
                            to={"/contact"}
                            className="footer-nav-link"
                        >
                            Contacto
                        </Link>
                        <Link
                            to={"/about"}
                            className="footer-nav-link"
                        >
                            Sobre <span>Aku&Gold</span>
                        </Link>
                        <Link
                            to={"/"}
                            className="footer-nav-link"
                        >
                            Medios de pago
                        </Link>
                        <Link
                            to={"/"}
                            className="footer-nav-link"
                        >
                            Preguntas Frecuentes
                        </Link>
                    </FooterContentNav>
                    <FooterContentNewsletter>
                        <H6>Newsletter</H6>
                        <form>
                            <FieldNewsletter>
                                <label 
                                    htmlFor="email"
                                    className="text-gradient"    
                                >Suscribete</label>
                                <input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Tu Correo Eletrónico"
                                />
                            </FieldNewsletter>
                            <div className="btn-submit">
                                <input 
                                    type="submit"
                                    className="btn text-gradient"
                                    value="Suscribirme"
                                />
                            </div>
                        </form>
                    </FooterContentNewsletter>
                    <FooterContentSocialMedia>
                        <H6>Redes Sociales</H6>
                        <a
                            href="https://www.instagram.com/akugold_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-socialmedia-link"
                        >
                            <span className="fab fa-instagram"></span>
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/Aku-gold-111353306910173"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-socialmedia-link"
                        >
                            <span className="fab fa-facebook-f"></span>
                            <span>Facebook</span>
                        </a>
                    </FooterContentSocialMedia>
                </FooterContent>
            </Container>
        </FooterContainer>
    );
}

export default Footer;