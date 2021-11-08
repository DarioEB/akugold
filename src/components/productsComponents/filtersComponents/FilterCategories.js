import React from 'react';
import styled from '@emotion/styled'

const FilterCategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const FilterCategoriesSelect = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 75%;
    }
    display: flex;
    flex-direction: column;

    select {
        padding: 1.25rem ;
        text-align: center;
        font-size: 1.6rem;
        outline: none;
        border: .1rem solid #000;
        
        border-radius: .25rem;
        @media (min-width: 768px) {
            font-size: 1.8rem;
        }
    }
`

const FilterCategoriesItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem 0;
    gap: .5rem;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: .5rem;
        padding: .5rem .5rem;
        border-radius: .5rem;
        background-color: #000;
        span, i {
            font-size: 1.2rem;
            @media (min-width: 768px) {
                font-size: 1.4rem; 
            }

        }
        button {
            border-radius: 50%;
            cursor: pointer;
            width: 2.75rem;
            heighT: 2.75rem;
            border: .1rem solid var(--colorSecundary);
        }
    }
`

const FilterCategories = () => {

    return (
        <FilterCategoriesContainer>
            <FilterCategoriesSelect>
                <select>
                    <option>-- Todas --</option>
                </select>
            </FilterCategoriesSelect>
            <FilterCategoriesItems>
                <div>
                    <span className="text-gradient">Remeras</span>
                    <button><i className="fas fa-times text-gradient"></i></button>
                </div>
                <div>
                    <span className="text-gradient">Musculosas</span>
                    <button><i className="fas fa-times text-gradient"></i></button>
                </div>
            </FilterCategoriesItems>
        </FilterCategoriesContainer>
    )
}

export default FilterCategories;