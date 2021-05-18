import React from 'react'
import {useContext} from 'react';
import {ThemeContext} from './HooksContextComponent';

function ThemedButton() {

    const theme = useContext(ThemeContext);

    return (
        <div>
            <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
        </div>
    )
}

export default ThemedButton;



