import React, {useState} from 'react'

export const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19)

    const Aumentar = () => setTemperatura(temperatura + 1)
    const Reducir = () => setTemperatura(temperatura - 1)
    
    return (
        <div className="container">
            <h2>La temperatura actual es de: {temperatura} C</h2>
            <p>
                {
                    temperatura > 21 ? 'chinga tu madre team calor' : 'chinga tu madre team frio'
                }
            </p>
            <button className="btn btn-danger" onClick={Aumentar}>Aumentar</button>
            <button className="btn btn-success" onClick={Reducir}>Reducir</button>
        </div>
    )
}

export default Temperatura