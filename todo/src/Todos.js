

const Todos = ({todos,handleDelete})=>{
    const todoList =todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick ={()=>{handleDelete(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ):(<p className='center'>You don't have enough list</p>);
    
  return (
    
      <div className="todos collection">
        {todoList}
      </div>
    
  )
}

export default Todos
