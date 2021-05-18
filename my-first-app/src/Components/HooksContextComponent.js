import React from 'react'
import ThemedButton from './ThemedButton';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export const ThemeContext = React.createContext(themes.light);

function HooksContextComponent() {

    return (
        <div>
            <ThemeContext.Provider value={themes.dark}>
            <ThemedButton />
            </ThemeContext.Provider>
        </div>
    )
}

export default HooksContextComponent
