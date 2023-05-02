import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="navegador">
            {/* <h3 className="marca">NDH Serv</h3>
            <div className="btns">
                <buttom className="btn"> Electronica </buttom>
                <buttom className="btn"> Aires Acond </buttom>
                <buttom className="btn"> Heladeras </buttom>
                <buttom className="btn"> Lavarropas </buttom>
            </div> */}
            <Link to = '/' > 
                <h3>Mi Ecommerce</h3>
            </Link>    
            <div className="Categories">
                <NavLink to={`/category/heladera`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'} > Heladeras </NavLink>
                <NavLink to={`/category/lavarropa`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lavarropas</NavLink>
                <NavLink to={`/category/Aire`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Aire Acondicionado</NavLink>
                <NavLink to={'/category/electronica'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Electronica</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;

