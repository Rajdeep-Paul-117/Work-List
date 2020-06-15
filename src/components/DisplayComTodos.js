import React, { Component } from 'react'
export class DisplayComTodos extends Component {
    myStyle=()=>{
        return{
            fontSize:"25px",
            color:"green",
            padding:"10px",
            borderBottom:"1px grey dotted",
            overflow:"hidden",
            textOverflow:"ellipsis"
            }
        }
        bStyle=()=>{
            return{
            color:"red",
            float:"right",
            fontSize:"18px",
            marginRight:"8px"
            }
        }
        dStyle=()=>{
            return{
                float:"right",
                backgroundColor:"red",
                fontSize:"18px",
            }
        }
    render() {
        var c=1
        return this.props.todos.map((item)=>(
            <div  key={item.id}>
                {item.completed==='true'?
                <p style={this.myStyle()}>
                    <span style={{color:"black"}}>{c++}{'. '}</span>
                    {item.title} 
                    <button type="button" style={this.dStyle()} onClick={this.props.del.bind(this,item.id)}>Delete</button>         
                    <button type="button" style={this.bStyle()} onClick={this.props.doagain.bind(this,item.id)} >Do Again</button>
                </p>
                :null}      
            </div>
            ))
    }
}

export default DisplayComTodos

