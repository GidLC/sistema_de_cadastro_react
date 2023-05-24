import React from "react"

function Input(tipo, onChange) {
    return (
        <input type={tipo} onChange={onChange}/>
    )
}


export default Input