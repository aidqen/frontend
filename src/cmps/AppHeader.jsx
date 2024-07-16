import { NavLink } from 'react-router-dom'
export function AppHeader() {
     
    return <header>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/toys">Toys</NavLink></li>
            </ul>
        </nav>
    </header>
}