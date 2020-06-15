import React, { Component } from 'react'

export class header extends Component {
    hStyle=()=>{
        return{
            background:"black",
            color:"white",
            height:"50px",
            textAlign:"center",

        }
    }
    render() {
        return (
            <div style={this.hStyle()}>
                <h1>WORK LIST</h1>
            </div>
        )
    }
}

export default header