import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ atvs, onToggle, onDelete }) {
    return (
        <div style={{
            maxWidth: "700px",
            margin: "20px auto",
            padding: "20px"
        }}>
            <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
            }}>
                {atvs.map((atv) => (
                    <TaskItem 
                        key={atv.id}
                        id={atv.id}
                        titulo={atv.titulo}
                        descricao={atv.descricao}
                        concluida={atv.concluida}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TaskList