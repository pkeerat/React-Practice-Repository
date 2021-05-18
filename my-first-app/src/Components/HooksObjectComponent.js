import React, { useState } from 'react'

export default function HooksObjectComponent() {

    const [data, dataChange] = useState({ firstName: '', lastName: '' });

    const myChangeHandler = (event) => {

        event.persist();
        dataChange({ ...data, [event.target.name]: event.target.value });

    }

    return (
        <div>
            {data.firstName}
            {data.lastName}
            <form>
                <input type='text' name='firstName' onChange={myChangeHandler}></input>
                <input type='text' name='lastName' onChange={myChangeHandler} ></input>
            </form>
            
        </div>
    )
}
