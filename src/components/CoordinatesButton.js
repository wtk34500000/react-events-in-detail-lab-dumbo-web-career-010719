// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{

    handleClick=(event)=>{
        const x=event.clientX
        const y=event.clientY
        const array=[x, y]
        this.props.onReceiveCoordinates(array)
    }
    render(){
        return <button onClick={this.handleClick}>CoordinatesButton</button>;
    }
}

export default CoordinatesButton;
