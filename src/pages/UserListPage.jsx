import { useUsers } from '../hooks/useUsers'
import UserList from '../components/UserList'
const UsersListPage = () => {
    const { users, loading, error, deleteUser } = useUsers()
    const handleDeleteUser = async (userId) => {
        const result = await deleteUser(userId)
        if (!result.success) {
            alert(`Error al eliminar usuario: ${result.error}`)
        }
    }
    return (
        <div className="page-container">
            {error && (
                <div className="error-message">
                    Error: {error}
                </div>
            )}
            <UserList
                users={users}
                onDelete={handleDeleteUser}
                loading={loading}
            />
        </div>
    )
}
export default UsersListPage