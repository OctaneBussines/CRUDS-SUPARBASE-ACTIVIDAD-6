import { useNavigate } from 'react-router-dom'
import { useUsers } from '../hooks/useUsers'
import UserForm from '../components/UserForm'
const CreateUserPage = () => {
    const navigate = useNavigate()
    const { createUser } = useUsers()
    const handleCreateUser = async (userData) => {
        const result = await createUser(userData)
        if (result.success) {
            alert('Usuario creado exitosamente')
            navigate('/users')
        } else {
            alert(`Error al crear usuario: ${result.error}`)
        }
    }
    return (
        <div className="page-container">
            <UserForm
                onSubmit={handleCreateUser}
                isEditing={false}
            />
        </div>
    )
}
export default CreateUserPage