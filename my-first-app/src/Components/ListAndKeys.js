import React from 'react'

function ListAndKeys() {

    const data = [2, 3,5, 7,8];
const list1 = data.map(item =>  <li key={item}>{item}</li>);
/* data.map(item =>  (<li key={item}>{item}</li>));
data.map(item =>  {return <li key={item}>{item}</li>}); */    //These writing ways will also Work

const list2 = <ul>{ data.map(item => {return <li key={item}>{item}</li>})}</ul>


    return (
        <div>
            <ul>{list1}</ul>
            {list2}
        </div>
    )
}

export default ListAndKeys
