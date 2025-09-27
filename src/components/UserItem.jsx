import { Link } from 'react-router-dom'
const UserItem = ({ user, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm(`¿Estás seguro de eliminar al usuario "${user.nombre}"?`)) {
            onDelete(user.id)
        }
    }
    return (
        <div className="user-item">
            <div className="user-info">
                <h4>{user.nombre}</h4>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
                {user.edad && <p><strong>Edad:</strong> {user.edad} años</p>}
                <p><strong>ID:</strong> {user.id}</p>
            </div>
            <div className="user-actions">
                <Link to={`/users/${user.id}`} className="view-btn">
                    Ver Detalle
                </Link>
                <Link to={`/users/edit/${user.id}`} className="edit-btn">
                    Editar
                </Link>
                <button onClick={handleDelete} className="delete-btn">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
export default UserItem