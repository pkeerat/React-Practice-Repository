import React, { Component } from 'react';
import { myContext } from './ContextComponent-1';
import { myContext1 } from './ContextComponent-1';

class ContextComponent3 extends Component {
    render() {
        return (
            <div>
                <h1>ContextComponent3</h1>
                <myContext.Consumer>{(data1) => (
                    <myContext1.Consumer>
                        {(data2) => (
                            <div>
                                <h4>{data1}</h4>
                                <h4>{data2}</h4>
                            </div>
                        )}
                    </myContext1.Consumer>
                )}</myContext.Consumer>
            </div>
        )
    }
}

export default ContextComponent3;
