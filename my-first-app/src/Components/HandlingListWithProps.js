import React from 'react'


function HandlingListWithProps(props) {
const dataGot = props.data;
const dataMade = dataGot.map((dataGot,index) => {
    return <li key={index}>{dataGot.name}</li>
});

    return (
        <div>
            <ul>{dataMade}</ul>
        </div>
    )
}

export default HandlingListWithProps;
