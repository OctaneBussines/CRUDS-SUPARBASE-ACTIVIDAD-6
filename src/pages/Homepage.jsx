import { Link } from 'react-router-dom'
import { useUsers } from '../hooks/useUsers'
const HomePage = () => {
    const { users, loading } = useUsers()
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Bienvenido al Sistema de Gestión de Usuarios</h1>
                <p>Gestiona usuarios de forma fácil y eficiente</p>
                <div className="hero-stats">
                    <div className="stat-card">
                        <h3>{loading ? '...' : users.length}</h3>
                        <p>Usuarios Registrados</p>
                    </div>
                </div>
                <div className="hero-actions">
                    <Link to="/users" className="primary-btn">
                        Ver Usuarios
                    </Link>
                    <Link to="/users/create" className="secondary-btn">
                        Crear Usuario
                    </Link>
                </div>
            </div>
            <div className="features-section">
                <h2>Funcionalidades</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>👥 Gestión de Usuarios</h3>
                        <p>Crea, edita y elimina usuarios fácilmente</p>
                    </div>
                    <div className="feature-card">
                        <h3>🔍 Búsqueda Rápida</h3>
                        <p>Encuentra usuarios por nombre, email o username</p>
                    </div>
                    <div className="feature-card">
                        <h3>📱 Responsive</h3>
                        <p>Accede desde cualquier dispositivo</p>
                    </div>
                    <div className="feature-card">
                        <h3>☁️ En la Nube</h3>
                        <p>Datos seguros con Supabase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage