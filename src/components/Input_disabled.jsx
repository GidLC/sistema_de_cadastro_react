import React from "react"

function Input_disabled(tipo, disabled) {
    return (
        <input type={tipo}
            disabled={disabled} />
    )
}


export default Input_disabled