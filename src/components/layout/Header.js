import React, { useState } from 'react';
import styled from '@emotion/styled';
// Menu
import Menu from './Menu';
// Imagenes
import logo from '../../images/logo_text_2.png';
//UI
import { Container } from '../UI/ui';
import HeaderMenuButton from './headerComponents/HeaderMenuButton';
import HeaderNav from './headerComponents/HeaderNav';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    z-index: 10;
    left: 0%;
    top: 0%;
    height: 7rem;
    padding: 1rem 0;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HeaderContent = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    span {
        &._desk {
            display: none;
            @media (min-width: 768px) {
                display: block;
            }
        }
        color: white;
        font-size: 1.4rem;
        font-weight: 300;
        @media (min-width: 768px) {
            display: block;
        }
    }
`



const HeaderLogo = styled.div`
    width: 20rem;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 25rem;
    }
`


const Header = () => {

    const [menu, setMenu] = useState(false);

    return (
        <HeaderContainer>
            <Container>
                <HeaderContent>

                    <HeaderMenuButton
                        setMenu={setMenu}
                        menu={menu}
                    />
                    <Link
                        to={"/"}
                    >
                        <HeaderLogo>
                            <img
                                src={logo}
                                alt="Logotipo Aku&Gold"
                            />
                        </HeaderLogo></Link>
                    <HeaderNav />

                </HeaderContent>
            </Container>
            <Menu
                menu={menu}
            />
        </HeaderContainer>
    );
}

export default Header;