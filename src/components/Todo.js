import React from 'react';

function Todo() {
  function getStyleTodo(){
    return{
    color:'red',
    fontSize:'35px',
    textAlign:'center'
    }
  }
  return (
    <div style={getStyleTodo()}>
      To Be Done
    </div>
  );
}

export default Todo;