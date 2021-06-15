import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './global';
import { basicTheme } from './themes';
import { 
    AiOutlinePlusCircle,
    AiOutlineMinusCircle
} from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import ResetIcon from './ResetIcon';

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    padding: 0;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: linear-gradient(90deg, #f88a71, #ff6271);
    width: 100%;
    padding: 1.5rem 0 7rem;

    #title {
        color: ${({ theme }) => theme.white};
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
        color: ${({ theme }) => theme.white};
        font-size: 5rem;
        margin: 0.5rem 0;
        line-height: 1;
    }
`

const BannerContainer = styled.div`
    position: relative;
    top: -7rem;
    width: 100%;
`

const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1.5rem 0;
    padding: 1rem;
    width: calc(100% - 2rem);
    border: 1px solid darkgray;
    border-radius: ${props => props.side === "left" ? "0 15px 15px 0" : "15px 0 0 15px"};
    margin-left: ${props => props.side === "left" ? 0 : "2rem"};
    background-color: #FCFCFC;

    & > * {
        margin: 0 0.75rem;
    }
    p {
        line-height: 1;
        font-size: 2.5rem;
        color: ${({ theme }) => theme.darkGray};
    }
    #save-text {
        font-size: 1.5rem;
    }
    svg {
        color: ${({ theme }) => theme.darkGray};
    }
    #stitch-plus {
        margin-left: 0.25rem;
        color: ${({ theme }) => theme.themeLight} !important;
    }
`
const Button = styled.div`
    cursor: pointer;
    & > svg {
        height: ${props => props.size === "small" ? "3rem" : props.size === "medium" ? "4rem" : "7rem"};
        width: auto;
    }
`

export default function App() {
    const [title, setTitle] = useState("Project 1");
    const [titleDisplay, setTitleDisplay] = useState(title);
    const [stitchCount, setStitchCount] = useState(0);
    const [rowCount, setRowCount] = useState(0);
    const [saved, setSaved] = useState(true);

    useEffect(() => {
        const savedData = window.localStorage.getItem("knittyGritty");
        if(savedData && typeof(JSON.parse(savedData)) === "object") {
            const data = JSON.parse(savedData);
            setStitchCount(data.stitchCount ?? 0);
            setRowCount(data.rowCount ?? 0);
            setTitle(data.title ?? "Project 1");
            setTitleDisplay(data.titleDisplay ?? data.title);
        }
    }, []);

    const verifyStitchReset = () => {
        if(window.confirm("Are you sure you want to reset the stitch count?")) {
            setStitchCount(0);
            setSaved(false);
        }
    };
    const verifyRowReset = () => {
        if(window.confirm("Are you sure you want to reset the row count?")) {
            setRowCount(0);
            setSaved(false);
        }
    }

    const titleOnBlur = (value) => {
        if(value.length === 0) {
            setTitle("");
            setTitleDisplay("...");
        } else if(value.length > 21) {
            setTitle(value);
            setTitleDisplay(value.substr(0,21) + "...");
        }
    }
    const titleOnChange = (value) => {
        setSaved(false);
        setTitle(value);
        setTitleDisplay(value);
    }
    const titleOnFocus = () => {
        setTitleDisplay(title);
    }

    const saveCounts = () => {
        const state = {
            "stitchCount": stitchCount,
            "rowCount": rowCount,
            "title": title,
            "titleDisplay": titleDisplay
        };
        window.localStorage.setItem("knittyGritty", JSON.stringify(state));
        setSaved(true);
    }

    return (
        <ThemeProvider theme={basicTheme}>
            <AppContainer>
                <GlobalStyles />
                <Header>
                    <input 
                        id="title"
                        type="text"
                        value={titleDisplay}
                        onFocus={() => titleOnFocus()}
                        onChange={(evt) => titleOnChange(evt.target.value)}
                        onBlur={(evt) => titleOnBlur(evt.target.value)}
                    />
                    <p id="stitches">{stitchCount}</p>
                </Header>
                <BannerContainer>
                    <Banner id="stitch-banner" side="left">
                        <Button size="medium" id="stitch-reset" onClick={() => verifyStitchReset()}>
                            <ResetIcon />
                        </Button>
                        <Button size="medium" id="stitch-minus" 
                            onClick={() => { 
                                setSaved(false);
                                setStitchCount(stitchCount > 0 ? stitchCount - 1 : 0);
                            }}>
                            <AiOutlineMinusCircle />
                        </Button>
                        <Button size="large" id="stitch-plus" 
                            onClick={() => {
                                setSaved(false);
                                setStitchCount(stitchCount + 1);
                            }}>
                            <AiOutlinePlusCircle />
                        </Button>
                    </Banner>
                    <Banner id="row-banner" side="right">
                        <Button size="small" id="row-reset" onClick={() => verifyRowReset()}>
                            <ResetIcon />
                        </Button>
                        <Button size="small" id="row-minus" 
                            onClick={() => {
                                setSaved(false);
                                setRowCount(rowCount > 0 ? rowCount - 1 : 0);
                            }}>
                            <AiOutlineMinusCircle />
                        </Button>
                        <Button size="small" id="row-plus"
                            onClick={() => {
                                setSaved(false);
                                setRowCount(rowCount + 1);
                            }}>
                            <AiOutlinePlusCircle />
                        </Button>
                        <p id="rows">{rowCount}</p>
                    </Banner>
                    <Banner id="save-banner" side="right" onClick={() => saveCounts()}>
                        <Button size="small" id="save" onClick={() => saveCounts()}>
                            <FiSave />
                        </Button>
                        <p id="save-text">{saved ? "Saved" : "Save Progress"}</p>
                    </Banner>
                </BannerContainer>
            </AppContainer>
        </ThemeProvider>
    );
}
