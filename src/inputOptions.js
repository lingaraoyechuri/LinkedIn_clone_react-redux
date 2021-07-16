import React from 'react'
import "./inputOptions.css" 

function inputOptions({Icon, name, color}) {
    
    return (
        <div className="inputOptions">
            <Icon style={{color: color}}/> 
            <h4>{name}</h4>
        </div>
    );
}

export default inputOptions
