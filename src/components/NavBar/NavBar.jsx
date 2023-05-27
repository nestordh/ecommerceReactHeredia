import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navegador">
            
            <Link to ='/'>  <h3> ND Serv </h3> </Link>
            <div className="Categories">
                <NavLink to={`/category/Heladeras`} className= {({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Heladeras </NavLink>
                <NavLink to={`/category/Lavarropas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Lavarropas </NavLink>
                <NavLink to={`/category/Aire Acond`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Aire Acondicionado </NavLink>
                <NavLink to={`/category/Smart Phone`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> Smart Phone </NavLink>
                <NavLink to={`/category/TV Led`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> TV Led </NavLink>
                
            </div>
            <CartWidget />
        </nav>
   );
}
export default NavBar;

