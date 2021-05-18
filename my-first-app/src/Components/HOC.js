import React, { Component } from 'react'

const  HOC = (SomeComponent) => {

class UpdateComponent extends Component{
    render(){
        return (
            <SomeComponent hocDetail="YOBABES"></SomeComponent>
        )
    }
}


 return UpdateComponent;   
}

export default HOC;
