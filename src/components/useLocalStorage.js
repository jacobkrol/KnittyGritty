export const useLocalStorage = () => {

    const getItem = () => {
        const savedData = window.localStorage.getItem("knittyGritty-v2");
        if(savedData && typeof(JSON.parse(savedData)) === "object") {
            return JSON.parse(savedData);
        }
        return [];
    }
    const setItem = (newData) => {
        window.localStorage.setItem("knittyGritty-v2", JSON.stringify(newData));
    }

    return { getItem, setItem };
}