import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskSummary from './components/TaskSummary'

function App() {
  const [atvs, setAtvs] = useState([
    {
      id: 1,
      nome: "Atividade 1 - JavaScript",
      descricao: "Introdução ao JavaScript",
      concluida: false
    },
    {
      id: 2,
      nome: "Atividade 2 - Introduçaõ ao React",
      descricao: "React",
      concluida: false
    },
    {
      id: 3,
      nome: "Atividade 3 - useState",
      descricao: "Introdução useState",
      concluida: true
    },
    {
      id: 4,
      nome: "Atividade 4 - Hooks e Props",
      descricao: "Emplementação de Hooks e Props",
      concluida: true
    }
  ])

  const toggleConcluida = (id) => {
    setAtvs(prevAtvs => 
      prevAtvs.map((atv) => 
        atv.id === id ? { ...atv, concluida: !atv.concluida } : atv
      )
    );
  };

  const excluirTarefa = (id) => {
    setAtvs(prevAtvs => prevAtvs.filter((atv) => atv.id !== id));
  };

  return (
    <>
      <Header />
      <TaskList atvs={atvs} onToggle={toggleConcluida} onDelete={excluirTarefa} />
      <TaskSummary atvs={atvs} />
    </>
  )
}

export default App
