import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function BotaoPrincipal({ texto, cor, tipo }) {

        return (
                <button className="btn btn-dark" type={tipo} color={cor}>
                    {texto}
                </button>
        )

}

export default BotaoPrincipal