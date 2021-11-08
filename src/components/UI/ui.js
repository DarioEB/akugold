import styled from '@emotion/styled';

export const Container = styled.div`
    width: 98%;
    max-width: 1100px;
    margin: 0 auto;
`
export const SlideSectionContainer = styled.section`
    min-height: 50vh;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


export const ContentSlideProducts = styled.section`
    display: block;

`

export const Title = styled.div`
    font-family: var(--font_logo);
    text-align: center;
    margin-bottom: 4rem;
    h2 {
        font-size: 4.2rem;
        margin-bottom: 0;
        @media (min-width: 768px) {
            font-size: 4.8rem;
        }
    }

    span {
        font-size: 1.4rem;
        display: block;
        /* display: none; */
        font-family: var(--font_main) !important;
        margin-top: 4rem;
        font-weight: 600;
        @media (min-width: 768px) {
            font-size: 2.2rem;
        }
    }
`

export const ProductArticle = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    @media (min-width: 768px) {
        width: 100%;
    }

    .product-description {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        p {
            font-size: 1.6rem;
            text-transform: uppercase;
            font-weight: 400;
            @media (min-width: 768px) {
                font-size: 1.6rem;
            }
            padding: 0;margin: 0;
        }

    }
`

export const ProductArticleImage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .film {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: -100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        transition: all .2s linear;
        .film-button {
            padding: 1.5rem;
            width: 75%;
            @media (min-width: 768px) {
                padding: 1.75rem;
            }
            text-align: center;
            margin-bottom: 2rem;
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            color: #000;
            text-transform: uppercase;
            font-size: 1.4rem;
            font-weight: 400;
            background: var(--gradient);
            cursor: pointer;
        }
    }
    &:hover {
        .film {
            opacity: 1;
            /* width: 100%; */
            top: 0%;
        }
    }
`