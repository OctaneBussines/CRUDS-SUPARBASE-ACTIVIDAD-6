import { useParams, useNavigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useUsers } from '../hooks/useUsers'
import UserForm from '../components/UserForm'
const EditUserPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user, loading: userLoading, error } = useUser(id)
    const { updateUser } = useUsers()
    const handleUpdateUser = async (userData) => {
        const result = await updateUser(id, userData)
        if (result.success) {
            alert('Usuario actualizado exitosamente')
            navigate('/users')
        } else {
            alert(`Error al actualizar usuario: ${result.error}`)
        }
    }
    if (userLoading) {
        return <div className="loading">Cargando usuario...</div>
    }
    if (error) {
        return (
            <div className="error-page">
                <h2>Error</h2>
                <p>No se pudo cargar el usuario: {error}</p>
                <button onClick={() => navigate('/users')}>
                    Volver a la lista
                </button>
            </div>
        )
    }
    if (!user) {
        return (
            <div className="error-page">
                <h2>Usuario no encontrado</h2>
                <p>El usuario que buscas no existe.</p>
                <button onClick={() => navigate('/users')}>
                    Volver a la lista
                </button>
            </div>
        )
    }
    return (
        <div className="page-container">
            <UserForm
                onSubmit={handleUpdateUser}
                editingUser={user}
                isEditing={true}
            />
        </div>
    )
}
export default EditUserPage