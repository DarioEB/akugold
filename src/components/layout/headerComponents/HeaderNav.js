import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';


const HeaderContentNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    span {
        color: white;
        font-size: 1.8rem;
        font-weight: 200;
    }
    .btn {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        padding: 0;
        color: white;
        font-size: 2rem;
        span {
            font-size: 1.4rem;
            font-weight: 300;
        }
        @media (min-width: 768px) {
            font-size: 1.35rem;
        }
        &.btn-login {
            display: none;
            @media (min-width: 768px) {
                display: block;
            }
        }
        
        .link {
            color: white;
            font-size: 1.6rem;
            margin: 0;
            font-weight: 300;
        } 
    } 
    
`
const HeaderNav = () => {

    return (
        <HeaderContentNav>
            <button
                className="btn btn-login"
            >
                <Link
                    to={"/login"}
                    className="link"
                >
                    Iniciar sesión
                </Link>
            </button>
            <span className="_desk">|</span>
            <button
                className="btn"
            >
                <i className="fas fa-shopping-cart"></i>
                <span>( 0 )</span>
            </button>
        </HeaderContentNav>
    );
}

export default HeaderNav;