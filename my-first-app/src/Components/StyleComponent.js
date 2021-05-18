import React from 'react'

import '../style/Style.css'

function StyleComponent(props) {

    let className = props.value? 'demo': 'demo1';
const header ={
    color:'red',
    fontSize:'150px'
}
    return (
        <div>
            <h1 className={`${className} demo2 `}>THIS IS CSS</h1>
            <h1 style={header}>THIS IS Inline</h1>
        </div>
    )
}

export default StyleComponent
