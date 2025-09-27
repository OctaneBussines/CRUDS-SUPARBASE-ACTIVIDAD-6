import { Link } from 'react-router-dom'
import UserItem from './UserItem'
const UserList = ({ users, onDelete, loading }) => {
    if (loading) {
        return <div className="loading">Cargando usuarios...</div>
    }
    return (
        <div className="users-page">
            <div className="page-header">
                <h2>Lista de Usuarios ({users.length})</h2>
                <Link to="/users/create" className="create-btn">
                    Crear Nuevo Usuario
                </Link>
            </div>
            {users.length === 0 ? (
                <div className="no-users">
                    <p>No hay usuarios registrados</p>
                    <Link to="/users/create" className="create-btn">
                        Crear el primer usuario
                    </Link>
                </div>
            ) : (
                <div className="user-list">
                    {users.map(user => (
                        <UserItem
                            key={user.id}
                            user={user}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default UserList