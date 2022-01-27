const TodoSection =  () => {

  return (
    <div className="todos-section">
      <div className="todos-container">
      <div className="todos-header">
        <h2>Hello User</h2>
        <p>What are your plans for the day?</p>
      </div>
      <div className="todos-body">
      <div className="todos-body-title">
        <h2>Tasks</h2>
          <span>Today</span>
          <span>Jan/23</span>
      </div>
        <hr />
      </div>
      </div>
    </div>
  )
}

export default TodoSection;