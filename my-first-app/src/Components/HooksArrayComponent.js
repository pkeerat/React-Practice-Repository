import React, {useState} from 'react'

function HooksArrayComponent() {

const [state, setState] = useState([]);

const addItem = () => {
    setState([...state,{ value:Math.floor(Math.random()*10)}])
}

    return (
        <div>
            <button onClick={addItem}> Add Random Number</button>
            <ul>
                {state.map(item => <li>{item.value}</li>)}
            </ul>
        </div>
    )
}

export default HooksArrayComponent
