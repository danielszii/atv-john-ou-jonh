import React from 'react'

function TaskItem({ id, titulo, descricao, concluida, onToggle, onDelete }) {
    return (
        <li>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <p>Status: {concluida ? "Concluída" : "Pendente"}</p>
            
            <button onClick={() => onToggle(id)}>
                {concluida ? "Marcar Pendente" : "Concluir"}
            </button>
            <button onClick={() => onDelete(id)}>Excluir</button>
        </li>
    )
}

export default TaskItem