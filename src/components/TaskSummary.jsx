import React from 'react'

function TaskSummary({ atvs = []}) {
    const totalAtv = atvs.length;
    const concluida = atvs.filter((t) => t.concluida).length;
    const pendentes = totalAtv - concluida
  return (
    <div>
        <h3>Resumo</h3>
            <p>Total tarefas: {totalAtv}</p>
            <p>Concluidas: {concluida}</p>
            <p>Pendentes: {pendentes}</p>
    </div>
  )
}

export default TaskSummary