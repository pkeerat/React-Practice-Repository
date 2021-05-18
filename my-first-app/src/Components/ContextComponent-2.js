import React, { Component } from 'react';

import  {myContext} from './ContextComponent-1';

 class ContextComponent2 extends Component {
    render() {
        return (
            <div>
            <h1>ContextComponent2</h1>
                <myContext.Consumer>{(data) => data}</myContext.Consumer> 
            </div>
        )
    }
}

export default ContextComponent2;
