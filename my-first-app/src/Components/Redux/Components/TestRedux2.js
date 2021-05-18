import React, { Component } from 'react'
import {incrementAction,decrementAction} from '../Actions/action';
import { connect } from 'react-redux';


 function mapDispatchToProps(dispatch) {
    return {
      incrementCounter: () => dispatch(incrementAction()),
      decrementCounter: () => dispatch(decrementAction())
    };
  } 


function mapStateToProps(state){
    return {
      count: state.changeTheNumber,
    };
  }

  class TestRedux2 extends Component {

    render() {
        return (
            <div>
                 
                 <div>Redux Counter: {this.props.count}</div>
                 <button onClick={this.props.incrementCounter}> Redux Increment Counter</button>
                <button onClick={this.props.decrementCounter}> Redux Decrement Counter</button> 
            </div>
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TestRedux2);