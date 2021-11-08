import React from 'react';
import styled from '@emotion/styled';
import logo from '../../images/logo_aku.png';
import { Link } from 'react-router-dom';

const MenuContent = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    @media (min-width: 768px) {
        padding-top: 5rem;
        gap: 2rem;
    }
`

const MenuContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-menu_header-logo {
        width: 15rem;
        margin: 0 auto;
    }
`

const MenuContentLink = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    .content-menu_box-link {
        padding: 1.25rem 0;
        gap: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        cursor: pointer;
        letter-spacing: 1px;
        font-size: 1.6rem;
        transition: all .15s linear;
        text-transform: uppercase;
        .link {
            color: #fff;
        }

        @media (min-width: 768px) {
             font-size: 1.8rem;
        }
        &:hover {
            color: var(--colorSecundary);
            &:hover {
                background: var(--gradient);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        i {
            font-size: 1.6rem; 
        }
    }
`

const MenuContentSocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem;
    .content-menu_box-social-link {
        padding: 1rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 1.6rem;font-weight: 600;
        transition: all .15s linear;
        border-radius: 2rem;
        letter-spacing: 1px;
        background: var(--gradient);
        color: #000;
        width: 20rem;
        
        text-transform: uppercase;
        @media (min-width: 768px) {
            font-size: 1.8rem;
            background: transparent;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .fab {
            width: 3rem;
            height: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background: transparent;
            color: var(--gradient);
            
        }
        &:hover {
            color: #000;
            background: var(--gradient);
            -webkit-background-clip: none;
            -webkit-text-fill-color: #000;
        }
    }
`

const Menu = ({ menu }) => {

    return (
        <section className={`menu ${menu ? 'show-menu' : 'hidden-menu'}`}>
            <MenuContent>
                <MenuContentHeader>
                    <div className="content-menu_header-logo">
                        <img
                            src={logo}
                            alt="Logo Aku&Gold"
                        />
                    </div>
                </MenuContentHeader>
                <MenuContentLink>
                    <div className="content-menu_box-link">
                        <Link
                            to={"/products"}
                            className="link">Categorías</Link>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div
                        className="content-menu_box-link">
                        <Link
                            to={"/products"} 
                            className="link">Urbano</Link>
                    </div>
                    <div className="content-menu_box-link">
                        <Link
                            to={"/products"} 
                            className="link">Deportivo</Link>
                    </div>
                    <div className="content-menu_box-link">
                        <Link
                            to={"/products"} 
                            className="link">Contacto</Link>
                    </div>
                    <div className="content-menu_box-link">
                        <Link
                            to={"/products"} 
                            className="link">Sobre Aku&Gold</Link>
                    </div>
                </MenuContentLink>
                <MenuContentSocialMedia>
                    <a
                        href="https://www.instagram.com/akugold_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="content-menu_box-social-link"
                    >
                        <span className="fab fa-instagram"></span>
                        <span className="social-link">Instagram</span>
                    </a>
                    <a
                        href="https://www.facebook.com/Aku-gold-111353306910173"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="content-menu_box-social-link"
                    >
                        <span className="fab fa-facebook-f"></span>
                        <span className="social-link">Facebook</span>
                    </a>
                </MenuContentSocialMedia>
            </MenuContent>
        </section>
    )
}

export default Menu;