import React from 'react'

function Header() {
    return (
        <div style={{
            backgroundColor: "#1f1e1e",
            color: "white",
            padding: "25px",
            textAlign: "center",
            borderRadius: "0 0 10px 10px"
        }}>
            <h1 style={{
                margin: "0 0 10px 0"
            }}>
                Organizador de Tarefas
            </h1>

            <p style={{
                margin: 0,
                color: "#ccc"
            }}>
                Esse é um organizador de tarefas que vai te ajudar a se organizar.
            </p>
        </div>
    )
}

export default Header