import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const Layout = () => {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout