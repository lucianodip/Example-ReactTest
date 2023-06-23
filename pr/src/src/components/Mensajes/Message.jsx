import React from 'react'


export default function Message({leyenda}) {
    
    return (
        <div className="container-message">
            <div className="message">
                <div className="tituloMessage">
                    <h2>{leyenda}</h2>
                </div>
            </div>
        </div> 
    )
}
