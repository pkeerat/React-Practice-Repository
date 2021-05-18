import React from 'react'

class HandlingListWithState extends React.Component {

    constructor(props)
    {
      super(props);
        this.state={
            dataGot:this.props.data
        }
    }  
    render() {
        const dataGot = this.state.dataGot;
        const dataMade = dataGot.map((dataGot, index)=>{
           return  <li key={index}>{dataGot.name}</li>
        });

        return (
            <div>
            <ul>{dataMade}</ul>
        </div>
        )
    }
}

export default HandlingListWithState;
