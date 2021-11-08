import React from 'react';
import styled from '@emotion/styled'

const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
` 

const SearchField = styled.div`
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    gap: .25rem;
    button {
        flex: 0 0 4.5rem;
        height: 4.5rem;
        border: .1rem solid #000;
        font-size: 1.6rem;
    }
    input {
        flex: 1;
        padding: 1.25rem;
        font-size: 1.6rem;
        border: .1rem solid #000;
        border-radius: .25rem;
        @media (min-width: 768px) {
            font-size: 1.8rem;
        }
    }
`

const Search = () => {

    return (
        <SearchContainer>
            <SearchField>
                <input 
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Realiza tu busqueda por nombre"
                />
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </SearchField>
        </SearchContainer>
    );
}

export default Search;