import React, { Component } from 'react';
import { myContextMore } from './ContextComponent-1';

class ContextComponent4 extends Component {
    render() {
        return (
            <div>
                <h1>ContextComponent4</h1>

                <myContextMore.Consumer>{(data) => (
                    <div>
                        <button onClick={data.changePrice} >Click Me</button>
                        <p>{data.newPrice}</p>
                    </div>
                )}</myContextMore.Consumer>
            </div>
        )
    }
}

export default ContextComponent4;