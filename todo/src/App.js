import Todos from './Todos'
import React, {Component} from 'react';
import AddForm from './AddForm'

class App extends Component {
   state ={
     todos:[
      {id:1,content:'buy coffee'},
      {id:2,content:'walking'}
     ]
   }
   handleDelete=(id)=>{
     const todos =this.state.todos.filter(todo =>{
      return todo.id!==id
     })
     this.setState({
      todos
     })}
     addTodo=(todo)=>{
      todo.id=Math.random();
      let todos=[...this.state.todos,todo];
      this.setState({todos})
     }
   render(){
  return (
    <div className="todo-App container">
      <h1 className="center blue-text">ToDo's</h1>
      <Todos todos={this.state.todos} handleDelete={this.handleDelete} />
      <AddForm addTodo={this.addTodo}/>
    </div>
  );
}
}

export default App;
