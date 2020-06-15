import React, { Component } from 'react'

export class ComWork extends Component {
    
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
        if(item.completed==='true')
        p++
    return p

    })
        return (
            <div>
                <p style={this.pStyle()}>Work Done = {p}</p>
            </div>
        )
    }
}

export default ComWork
