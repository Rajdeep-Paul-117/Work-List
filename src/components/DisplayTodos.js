import React, { Component } from 'react'
export class DisplayTodos extends Component {
    titleStyle=()=>{
        return{
        fontSize:"25px",
        color:"red",
        padding:"10px",
        borderBottom:"1px grey dotted",
        overflow:"hidden",
        textOverflow:"ellipsis"
        }       
    }
    bStyle=()=>{
        return{
        color:"green",
        float:"right",
        fontSize:"18px",
        marginRight:"8px"
        }
    }
    dStyle=()=>{
        return{
            float:"right",
            backgroundColor:"red",
            fontSize:"18px"
        }
    }
    render() {
        var c=1
        return this.props.todos.map((item)=>(
        <div>
            <div key={item.id}>
                {item.completed==='false'?
                <p style={this.titleStyle()}>
                    <span style={{color:"black"}}>{c++}{'. '}</span>
                    {item.title}
                    <button type="button" style={this.dStyle()} onClick={this.props.del.bind(this,item.id)}>Delete</button>             
                    <button type="button" style={this.bStyle()} onClick={this.props.done.bind(this,item.id)}>Done</button>    
                </p>
                :null}
            </div>
        </div>
        ))
    }
}
export default DisplayTodos
