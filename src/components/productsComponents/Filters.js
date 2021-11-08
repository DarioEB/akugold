import React from 'react';
import styled from '@emotion/styled';
import {
    Container
} from '../UI/ui';
import FilterCategories from './filtersComponents/FilterCategories';
import Search from './filtersComponents/Search';
const FiltersContainer = styled.section`
    margin-top: 7rem;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
`

const FiltersContent = styled.div`
    display: grid;
    gap: 2rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`





const Filters = () => {

    return (
        <FiltersContainer>
            <Container>
                <FiltersContent>
                    <FilterCategories />
                    <Search />
                </FiltersContent>
            </Container>
        </FiltersContainer>
    );
}

export default Filters;