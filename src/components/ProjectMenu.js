import React from 'react';
import { MdDelete, MdCreate } from 'react-icons/md';
import ProjectData from './ProjectData';
import { 
    AppContainer, 
    Banner, 
    BannerContainer, 
    Button, 
    Header 
} from './ProjectStyles';

export default function ProjectMenu({ data, selectProject, setData }) {

    const deleteProject = (id) => {
        const project = data.find(p => p.id === id) ?? {title: "[Error]"};
        if(window.confirm(`Are you sure you want to delete this project?\nTitle: ${project.title}`)) {
            const newData = [...data].filter(p => p.id !== id);
            setData(newData);
        }
        return false;
    }

    const createProject = () => {
        let projectId;
        do {
            projectId = Math.floor(Math.random()*10000000);
            // eslint-disable-next-line
        } while(data.find(p => p.id === projectId));
        const newProject = new ProjectData(projectId);
        const newData = [...data, {...newProject}];
        setData(newData);
        selectProject(projectId);
    }

    return (
        <AppContainer>
            <Header size="small">
                <h1>Knitty Gritty</h1>
            </Header>
            <BannerContainer>
                <br /><br />
                <Banner side="left">
                    <p>Select a Project:</p>
                </Banner>
                {(data ?? []).map(({id, titleDisplay}) =>
                    <Banner key={id} button side="right" fontSize="small" justifyContent="space-between" onClick={() => selectProject(id)}>
                        <p>{titleDisplay}</p>
                        <Button size="xsmall" id={`delete-${id}`} onClick={() => deleteProject(id)}>
                            <MdDelete />
                        </Button>
                    </Banner>
                )}
                <Banner button side="right" fontSize="small" justifyContent="space-between" onClick={createProject}>
                    <p>Create New</p>
                    <Button size="xsmall" id="create-new-project">
                        <MdCreate />
                    </Button>
                </Banner>
            </BannerContainer>
        </AppContainer>
    )
}