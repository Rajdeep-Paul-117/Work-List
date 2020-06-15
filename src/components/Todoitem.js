import React, { Component } from 'react'
import DisplayTodos from './DisplayTodos';
import DisplayComTodos from './DisplayComTodos';
import AddWork from './AddWork';
import Todo from './Todo';
import PendingWork from './PendingWork';
import ComWork from './ComWork';
var cid=0
export class Todoitem extends Component {
    state={
        todos:[
            /*{
                id:cid++,
                title:"asgafgsaaaaaaaaaaaaaaa",
                completed:'false'
            },
            {
                id:cid++,
                title:"asgafgs",
                completed:'true'
            },
            {
                id:cid++,
                title:"asgafgs",
                completed:'false'
            },*/
        ]
    }
    comStyle=()=>{
        return{
            background:"white",
            color:'green',
            fontSize:'35px',
            textAlign:'center'
            }
    }
    done=(id)=>{
        this.setState({todos:this.state.todos.map((item)=>{
            if(item.id===id){
                item.completed='true'
            }
            return item
        })})

    }
    doagain=(id)=>{
        this.setState({todos:this.state.todos.map((item)=>{
            if(item.id===id)
            {
                item.completed='false'
            }
            return item;
        })})
    }
    del=(id)=>{
        this.setState({todos:[...this.state.todos.filter((item)=>item.id!==id)]})//...means it copies everythingpresent in todos so no need to use loop for checking  
    }
    add=(title)=>{
        const newWork={
            id:cid++,
            title:title,
            completed:'false'
        }
        this.setState({todos:[...this.state.todos,newWork]})
    }
    render() {
        return (
            <div>
                <AddWork add={this.add}/>
                <Todo/>
                <PendingWork todos={this.state.todos}/>
                <div style={{background:"lightgrey"}}>
                <DisplayTodos todos={this.state.todos} done={this.done} del={this.del}/>
                <p style={this.comStyle()}>Completed</p>
                <div style={{background:"white"}}><ComWork todos={this.state.todos}/></div>
                <DisplayComTodos todos={this.state.todos} doagain={this.doagain} del={this.del}/>
                </div>
            </div>
        )
    }
}

export default Todoitem
