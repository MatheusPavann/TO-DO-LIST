import React, { useState } from 'react';

export default function PageIni() {
  const [tasks, setTasks] = useState([]); 
  const [taskName, setTaskName] = useState(''); 
  const [taskDate, setTaskDate] = useState(''); 

  const handleAddTask = () => {
    if (taskName && taskDate) {
      const newTask = { name: taskName, date: taskDate };
      setTasks([...tasks, newTask]); 
      setTaskName(''); 
      setTaskDate(''); 
    } else {
      alert('Não preencheu todos os campos!!.');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <img src="./assets/planoDeFundo.jpg" alt="" />
      <div id="divPrincipal1">
        <div className="h1">
          <h1>Lista de Tarefas</h1>
          <div className="inputs">
            <input
              type="text"
              placeholder="Adicione nome a tarefa"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
            <br />
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              required
            />
          </div>
          <button className='botaoSalvar' onClick={handleAddTask}>Salvar</button>
        </div>

        <div id="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <p><strong>Tarefa:</strong> {task.name}</p>
              <p><strong>Data:</strong> {task.date}</p>
              <button className='botaoTarefa' onClick={() => handleRemoveTask(index)}>Finalizada</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
