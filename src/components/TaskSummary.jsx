import React from 'react'

function TaskSummary({ atvs = [] }) {
    const totalAtv = atvs.length
    const concluida = atvs.filter((t) => t.concluida).length
    const pendentes = totalAtv - concluida

    return (
        <div style={{
            maxWidth: "700px",
            margin: "20px auto",
            padding: "20px",
            backgroundColor: "#f5f5f5",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}>
            <h3 style={{
                marginTop: 0,
                color: "#333"
            }}>
                Resumo
            </h3>

            <p>Total tarefas: <strong>{totalAtv}</strong></p>
            <p>Concluídas: <strong>{concluida}</strong></p>
            <p>Pendentes: <strong>{pendentes}</strong></p>
        </div>
    )
}

export default TaskSummary