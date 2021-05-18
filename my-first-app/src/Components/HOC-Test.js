import React, { Component } from 'react'

import highOrderComponent from './HOC';

export class HOCTest extends Component {
    render() {
        return (
            <div>
                {`HOCTest: ${this.props.hocDetail}`}
            </div>
        )
    }
}

HOCTest = highOrderComponent(HOCTest);

export default HOCTest;
