import React, {useState} from 'react'
import uniqid from 'uniqid'

const ListadoP = () => {

    const [nombre, setNombre] = useState('')
    const [listaNombres, setListaNombres] = useState([]) 
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')

    const addNombre  = (e) => {
        e.preventDefault()
        if(nombre.trim() !== ''){
        const nuevoNombre = {
            id:uniqid(),
            name: nombre
        }
            
            setListaNombres([...listaNombres, nuevoNombre])
            setNombre('')
        }
        }

    const deleteNombre = (id) => {
        const nuevoArray = listaNombres.filter(item => item.id !== id)
        setListaNombres(nuevoArray)
    }

    const editar = (item) =>{


        modoEdicion ? setNombre('') :  setNombre(item.name)
        setId(item.id)
        setModoEdicion(!modoEdicion)
    }

    const editarNombre = (e) => {
        e.preventDefault()
        const NuevoArray = listaNombres.map(item => item.id === id ? {id:id, name:nombre} : item)
        setListaNombres(NuevoArray)
        setModoEdicion(false)
        setNombre('')

        

    }

    return (
    <div>
            <h2>Crud basico </h2>
            <div className="row">
            <div className="col">
                <h2>Listado de nombres</h2>
                <ul className='list-group'>
                    {
                        listaNombres.map( item =>
                            <li key={item.id} className="list-group-item">{item.name}
                            <button onClick={() => {deleteNombre(item.id)}} className="btn btn-danger float-right">Borrrar

                            </button>
                            <button onClick={() => {editar(item)}} className="btn btn-info float-right ">Editar

                            </button>


                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="col">
                <h2>Formualrio para añadir</h2>
                <form className='form-group' onSubmit={modoEdicion ? editarNombre : addNombre}>
                    
                    <input onChange={(e) =>{setNombre(e.target.value)}} type="text" placeholder="Inserte el nombre" value={nombre} className="form-control mb-3"/>
                    
                    <input type="submit"  className="btn btn-info btn-block"
                    
                    value={modoEdicion ? 'Editar Nombre' : 'Registrar nombre'}/>
                </form>
            </div>
        </div>
    </div>
    )
}

export default ListadoP