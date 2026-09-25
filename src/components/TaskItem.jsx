import React from 'react'

function TaskItem({ id, titulo, descricao, concluida, onToggle, onDelete }) {
    return (
        <li style={{
            marginBottom: "15px",
            padding: "15px",
            border: "1px solid #333",
            borderRadius: "8px"
        }}>
            <h3>{titulo}</h3>

            <p>{descricao}</p>

            <p>
                Situação:{" "}
                <strong style={{
                    color: concluida ? "green" : "orange"
                }}>
                    {concluida ? "Concluída" : "Pendente"}
                </strong>
            </p>

            <button
                onClick={() => onToggle(id)}
                style={{
                    backgroundColor: "blueviolet",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    marginRight: "8px",
                    borderRadius: "5px"
                }}
            >
                {concluida ? "Reabrir tarefa" : "Concluir tarefa"}
            </button>

            <button
                onClick={() => onDelete(id)}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px"
                }}
            >
                Excluir tarefa
            </button>
        </li>
    )
}

export default TaskItem