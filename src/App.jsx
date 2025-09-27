
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import CreateUserPage from './pages/CreateUserPage'
import EditUserPage from './pages/EditUserPage'
import UserDetailPage from './pages/UserDetailPage'
import './App.css'
function App() {
	return (
		<div>
			<h1>Prueba de renderizado: Si ves este texto, React funciona</h1>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="users" element={<UsersListPage />} />
						<Route path="users/create" element={<CreateUserPage />} />
						<Route path="users/edit/:id" element={<EditUserPage />} />
						<Route path="users/:id" element={<UserDetailPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
// Página 404
const NotFoundPage = () => {
return (
<div className="error-page">
<h1>404 - Página no encontrada</h1>
<p>La página que buscas no existe.</p>
<a href="/">Volver al inicio</a>
</div>
)
}
export default App;