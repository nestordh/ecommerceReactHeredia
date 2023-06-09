import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom';

function NavBar() {

    return (
        <nav className="navegador">
            
            <Link className='logo' to ='/'>  <h3> ND Serv </h3> </Link>
            <div className="categories">
                <NavLink to={`/category/Heladeras`} className= {({ isActive }) => isActive ? 'btnActiv' : 'btn'}> Heladeras </NavLink>
                <NavLink to={`/category/Lavarropas`} className={({ isActive }) => isActive ? 'btnActiv' : 'btn'}> Lavarropas </NavLink>
                <NavLink to={`/category/Aire Acond`} className={({ isActive }) => isActive ? 'btnActiv' : 'btn'}> Aire Acondicionado </NavLink>
                <NavLink to={`/category/Smart Phone`} className={({ isActive }) => isActive ? 'btnActiv' : 'btn'}> Smart Phone </NavLink>
                <NavLink to={`/category/TV Led`} className={({ isActive }) => isActive ? 'btnActiv' : 'btn'}> TV Led </NavLink>
                <NavLink to={`/newProduct` } className={({ isActive }) => isActive ? 'btnActiv' : 'btnLg'}  > Usuarios </NavLink>
            </div>
            <CartWidget />
        </nav>
   );
}
export default NavBar;

