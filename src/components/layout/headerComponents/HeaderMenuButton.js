import React from 'react';
import styled from '@emotion/styled';

const HeaderContentMenuButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;  
`

const HeaderMenuButton = ({ setMenu, menu }) => {

    return (
        <HeaderContentMenuButton>
            <div
                className="menu-btn"
                onClick={() => setMenu(!menu)}
            >
                <div className="menu-btn_"></div>
            </div>
            <span className="_desk">Menú</span>
        </HeaderContentMenuButton>
    );
}

export default HeaderMenuButton;