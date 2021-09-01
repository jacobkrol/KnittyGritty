import React, { useState } from 'react';
import {
    AppContainer,
    Header,
    BackArrow,
    BannerContainer,
    Banner,
    Button
} from './ProjectStyles';
import { 
    AiOutlinePlusCircle,
    AiOutlineMinusCircle
} from 'react-icons/ai';
import { FiSave } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import ResetIcon from './ResetIcon';

export default function Project({ data, project, navigateBack, setData }) {
    const [title, setTitle] = useState(project?.title ?? "");
    const [titleDisplay, setTitleDisplay] = useState(project?.titleDisplay ?? "");
    const [stitchCount, setStitchCount] = useState(project?.stitchCount ?? 0);
    const [rowCount, setRowCount] = useState(project?.rowCount ?? 0);
    const [notes, setNotes] = useState(project?.notes ?? "");
    const [saved, setSaved] = useState(true);

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

    const notesOnChange = (value) => {
        setSaved(false);
        setNotes(value);
    }

    const saveCounts = () => {
        const updatedProject = { ...project, stitchCount, rowCount, title, titleDisplay, notes };
        const otherProjects = [...data].filter(p => p.id !== project.id);
        setData(otherProjects.concat({...updatedProject}));
        setSaved(true);
    }

    return (
        <AppContainer>
            <BackArrow onClick={navigateBack}>
                <IoIosArrowBack />
            </BackArrow>
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
                    <Button size="medium" id="stitch-reset" onClick={verifyStitchReset}>
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
                    <Button size="small" id="row-reset" onClick={verifyRowReset}>
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
                <Banner button id="save-banner" side="right" onClick={saveCounts}>
                    <Button size="small" id="save" onClick={saveCounts}>
                        <FiSave />
                    </Button>
                    <p id="save-text">{saved ? "Saved" : "Save Progress"}</p>
                </Banner>
                <Banner id="notes-banner" side="right">
                    <div style={{width: '100%'}}>
                        <p id="notes-header">Project Notes:</p>
                        <textarea 
                            id="notes" 
                            value={notes} 
                            rows="2" 
                            onChange={(evt) => notesOnChange(evt.target.value)}
                            placeholder="Click to enter project notes"
                        />
                    </div>
                </Banner>
            </BannerContainer>
        </AppContainer>
    )
}