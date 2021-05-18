import React, { useEffect, useState } from 'react'

function HooksComponent() {

    const [name, changeName] = useState('Keerat');
    const [counter, changeCounter] = useState(0);
    //const name = useState('Keerat');

    const changeNameState = () => {
        changeName('Manik');
        //name[1]('Manik');
    }

    const incrementCounterState = () => {
        changeCounter(counter + 1);
    }
    const decrementCounterState = () => {
        changeCounter(counter - 1);
    }

    const incrementCounterStateByTen = () => {
        for (let i = 0; i < 10; i++) {
            console.log(i)
            changeCounter(counter => counter+1);
        }

    }


    // useEffect(() => { console.log('hoooking', counter) }, [name, counter])  uncomment when observing in console.


    return (
        <div>

            <div>Example of hook: {name}</div>
            <div>Counter: {counter}</div>
            <button onClick={changeNameState}> Hook</button>
            <button onClick={incrementCounterState}> Increment</button>
            <button onClick={decrementCounterState}> Decrement</button>
            <button onClick={incrementCounterStateByTen}> Increment By 10</button>
        </div>
    )
}

export default HooksComponent
