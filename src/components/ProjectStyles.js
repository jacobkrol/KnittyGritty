import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
    position: relative;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(90deg, #f88a71, #ff6271);
    width: 100%;
    /* padding: 1.5rem 0 7rem; */
    padding: ${props => props.size === "small" ? "1.5rem 0 4rem" : "1.5rem 0 7rem"};
    color: ${({ theme }) => theme.white};

    h1 {
        font-size: 3rem;
    }

    #title {
        color: inherit;
        font-size: 1.5rem;
        margin: 0.5rem 0;
        line-height: 1;
        padding: 0;
        background-color: transparent;
        text-align: center;
        font-family: inherit;
        border: 0;
    }
    #title:focus {
        outline: none;
        border-bottom: 2px solid white;
    }

    #stitches {
        font-size: 5rem;
        margin: 0.5rem 0;
        line-height: 1;
    }
`

export const BannerContainer = styled.div`
    position: relative;
    top: -7rem;
    width: 100%;
`

export const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-items: center;
    margin: 1.5rem 0;
    padding: 1rem;
    width: calc(100% - 2rem);
    border: 1px solid darkgray;
    border-radius: ${props => props.side === "left" ? "0 15px 15px 0" : "15px 0 0 15px"};
    margin-left: ${props => props.side === "left" ? 0 : "2rem"};
    background-color: #FCFCFC;
    cursor: ${props => props.button ? "pointer" : "auto"};

    & > * {
        margin: 0 0.75rem;
    }
    p {
        line-height: 1;
        font-size: ${props => props.fontSize === "small" ? "2rem" : "2.5rem"};
        color: ${({ theme }) => theme.darkGray};
    }
    #save-text {
        font-size: 1.5rem;
    }
    svg {
        color: ${({ theme }) => theme.darkGray};
    }
    #stitch-plus {
        margin: 0 0.25rem;
        color: ${({ theme }) => theme.themeLight} !important;
    }
    #notes-header {
        font-size: 1.5rem;
        margin: 0.5rem 0 1rem;
    }
    #notes {
        font-size: 1.5rem;
        font-family: inherit;
        border: 0;
        width: 100%;
        overflow-y: hidden;
    }
    #repeat-label {
        font-size: 1.25rem;
        margin: 0.25rem 0.5rem;
    }
`
export const Button = styled.div`
    cursor: pointer;
    & > svg {
        height: ${props => props.size === "xsmall" ? "2rem" : props.size === "small" ? "3rem" : props.size === "medium" ? "4rem" : "8rem"};
        width: auto;
    }
`

export const BackArrow = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
    cursor: pointer;

    & > svg {
        height: 3rem;
        width: auto;
        color: ${({ theme }) => theme.white};
    }
`

export const StitchCountGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 62% 33%;
    justify-items: center;
    align-items: center;
    gap: 0.4rem 0.75rem;
`

export const Select = styled.select`
    padding: 0.25rem;
    font-size: 1.15rem;
    border-radius: 0;
    border: 2px solid #FCFCFC;
    border-bottom: ${({ theme }) => `2px solid ${theme.darkGray}`};
`