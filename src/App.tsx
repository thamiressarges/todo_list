import './App.css'

function App() {
  return (
    <div className='container-app'>
      <h1>Tarefas</h1>
      <input type="text" placeholder='Adicionar nova tarefa' />

      <ul className='content-tasks'>
        <li className='task-item'>Tarefa 1</li>
        <li className='task-item'>Tarefa 2</li>
        <li className='task-item'>Tarefa 3</li>
      </ul>
    
    </div>
  )
}

export default App
