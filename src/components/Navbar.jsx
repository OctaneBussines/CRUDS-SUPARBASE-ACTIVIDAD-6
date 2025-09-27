import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation()
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <h1>CRUD Usuarios</h1>
                </Link>
            </div>
            <ul className="navbar-nav">
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Inicio</Link>
                </li>
                <li className={location.pathname === '/users' ? 'active' : ''}>
                    <Link to="/users">Usuarios</Link>
                </li>
                <li className={location.pathname === '/users/create' ? 'active' : ''}>
                    <Link to="/users/create">Crear Usuario</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar