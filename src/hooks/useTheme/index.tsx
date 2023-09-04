import {useState} from "react";
import themes from "../../../public/THEMES.json"

function useThemes() {
    const [theme, setTheme] = useState(themes[0]);

    return {theme, setTheme, themes, changeTheme: setTheme};
}

export default useThemes;