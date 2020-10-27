import React from 'react';
const userInput = (props) =>

{
const inputStyle = {
    border: '3px solid springgreen',
    backgroundColor:'#d0d0d0',
    textAlign: 'center',
    fontStyle: 'normal',
    textAlign:'center',
    margin:'30px',
    width:'20%',
    height:'30px'
};



    return (
    
    
    <div>
    <label>Enter the name to Greet:</label>
    <input style = {inputStyle} type="text" onChange={props.changed} value={props.currentName}/>

    </div>
    );
    
}

export default userInput;