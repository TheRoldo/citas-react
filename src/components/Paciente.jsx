const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas Eliminar este paciente ?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-lg">
                
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Mascota: {''} <span className="font-normal normal-case">{nombre}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Propietario: {''} <span className="font-normal normal-case">{propietario}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''} <span className="font-normal normal-case">{email}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''} <span className="font-normal normal-case">{fecha}</span></p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''} <span className="font-normal normal-case">{sintomas}</span></p>

            <div className="mt-8">
              <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-3xl mr-2" onClick={() => setPaciente(paciente)}>Editar</button>
              <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-3xl ml-2" onClick={handleEliminar}>Eliminar</button>
            </div>
            
        </div>
  )
}

export default Paciente
