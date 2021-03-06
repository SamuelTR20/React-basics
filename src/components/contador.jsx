import React, {useState} from 'react'

export const Contador = () => {
    const [numero, setNumero] = useState(0)

    const Aumentar = () => setNumero(numero + 1)
    const Reducir = () => setNumero(numero - 1)
    
    return (
        <div>
            <h2>Cantidad del contador: {numero}</h2>
            <button onClick={Aumentar}>Aumentar</button>
            <button onClick={Reducir}>Reducir</button>
        </div>
    )
}
export default Contador