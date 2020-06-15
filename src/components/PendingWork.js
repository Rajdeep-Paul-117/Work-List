import React, { Component } from 'react'

export class PendingWork extends Component {
    
    pStyle=()=>{
        return{
            textAlign:"center",
            color:"black",
            fontSize:"30px"
        }
    }
    render() {
        var p=0;
        this.props.todos.map((item)=>{
        if(item.completed==='false')
        p++
    return p

    })
        return (
            <div>
                <p style={this.pStyle()}>{p} Works Pending</p>
            </div>
        )
    }
}

export default PendingWork
