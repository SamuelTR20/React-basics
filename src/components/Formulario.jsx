import React, {useState} from 'react'

const Formulario = () => {
const [nombre, setNombre] = useState('')
const [edad, setEdad] = useState('')

const Validar = (event) => {
event.preventDefault()
if(!nombre.trim()){
    console.log('nombre vacio joputa')
    return
}
if(!edad.trim()){
    console.log('edad vacio joputa')
    return
}
}


    return (
        <div className="container">
            <form className="form" onSubmit={Validar}>
                <input type='text' className="form-control mb-3" placeholder='introduce el nombre' onChange={(e) => setNombre(e.target.value)}/>
                <input type='text' className="form-control mb-3" placeholder='introduce la edad' onChange={(e) => setEdad(e.target.value)}/>
                <input type="submit" className="form-control mb-3 btn btn-info"/>

            </form>
            
        </div>
    )
}

export default Formulario
