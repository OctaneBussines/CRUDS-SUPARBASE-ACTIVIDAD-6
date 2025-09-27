import { useParams, useNavigate, Link } from 'react-router-dom'
import { useUser } from '../hooks/useUser'
import { useUsers } from '../hooks/useUsers'
const UserDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { user, loading, error } = useUser(id)
    const { deleteUser } = useUsers()
    const handleDelete = async () => {
        if (window.confirm(`¿Estás seguro de eliminar al usuario "${user.nombre}"?`)) {
            const result = await deleteUser(id)
            if (result.success) {
                alert('Usuario eliminado exitosamente')
                navigate('/users')
            } else {
                alert(`Error al eliminar usuario: ${result.error}`)
            }
        }
    }
    if (loading) {
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
            <div className="user-detail">
                <div className="detail-header">
                    <h2>Detalle del Usuario</h2>
                    <div className="header-actions">
                        <Link to={`/users/edit/${user.id}`} className="edit-btn">
                            Editar Usuario
                        </Link>
                        <button onClick={handleDelete} className="delete-btn">
                            Eliminar Usuario
                        </button>
                    </div>
                </div>
                <div className="detail-content">
                    <div className="detail-card">
                        <div className="detail-row">
                            <label>ID:</label>
                            <span>{user.id}</span>
                        </div>
                        <div className="detail-row">
                            <label>Nombre:</label>
                            <span>{user.nombre}</span>
                        </div>
                        <div className="detail-row">
                            <label>Email:</label>
                            <span>{user.email}</span>
                        </div>
                        <div className="detail-row">
                            <label>Username:</label>
                            <span>{user.username}</span>
                        </div>
                        {user.edad && (
                            <div className="detail-row">
                                <label>Edad:</label>
                                <span>{user.edad} años</span>
                            </div>
                        )}
                        {user.created_at && (
                            <div className="detail-row">
                                <label>Fecha de Registro:</label>
                                <span>{new Date(user.created_at).toLocaleDateString('es-ES')}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="detail-footer">
                    <Link to="/users" className="back-btn">
                        ← Volver a la lista
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default UserDetailPage