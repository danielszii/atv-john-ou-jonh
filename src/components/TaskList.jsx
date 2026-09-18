import React from 'react'
import TaskItem from './TaskItem'

function TaskList({ atvs, onToggle, onDelete }) {
    return (
        <div>
            <ul>
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