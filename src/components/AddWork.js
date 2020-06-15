import React, { Component } from 'react'

export class AddWork extends Component {
    state={
        title:""
    }
    changing=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    add=(e)=>{
        e.preventDefault()
        this.props.add(this.state.title)
        this.setState({title:""})
    }
    render() {
        return (
                <form onSubmit={this.add} style={{display:"flex",borderTop:"1px black dotted"}}>
                    <input style={{flex:"10",padding:"5px"}} type="text" name="title" placeholder="add work to be done"
                    value={this.state.title} onChange={this.changing} ></input>
                    <button type="submit" style={{background:"black",color:"white",flex:"1"}} >Submit</button>
                </form>
        )
    }
}

export default AddWork
