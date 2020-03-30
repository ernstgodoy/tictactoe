import React from 'react';
import './App.css';

class Squares extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = () => {
        const {index, counter, value, squareLocation, winningCombos} = this.props
        squareLocation(index)
        squareLocation(counter)
        winningCombos(value)
    }

    render(){
        return(
            <div>
            <button class = "Squares" onClick = {this.handleClick}> {this.props.value} </button>
            </div>
        )
    }
}


export default Squares;
