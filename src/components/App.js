import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import Project from './Project';
import ProjectMenu from './ProjectMenu';
import GlobalStyles from './global';
import { basicTheme } from './themes';
import { useLocalStorage } from './useLocalStorage';

export default function App() {
    const [selectedId, setSelectedId] = useState(null);
    const [savedData, setSavedData] = useState(null);
    const { getItem, setItem } = useLocalStorage();

    useEffect(() => {
        const data = getItem();
        setSavedData(data);
        // eslint-disable-next-line
    }, []);

    const navigateBack = useCallback(() => setSelectedId(null), [setSelectedId]);
    const selectProject = useCallback((id) => setSelectedId(id), [setSelectedId]);
    const setData = useCallback((newData) => {
        setSavedData(newData);
        setItem(newData);
    }, [setSavedData, setItem]);

    return (
        <ThemeProvider theme={basicTheme}>
            <GlobalStyles />
            {selectedId && savedData.find(p => p.id === selectedId)
                ? <Project data={savedData} project={savedData.find(p => p.id === selectedId)} navigateBack={navigateBack} setData={setData} />
                : <ProjectMenu data={savedData} setData={setData} selectProject={selectProject} />}
        </ThemeProvider>
    );
}
