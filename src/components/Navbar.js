


import {Link} from 'react-router-dom'
import Button from './Button';
import '../styles/Navbar.css'
import {navItems} from "../components/NavItems";

function Navbar() {

    
  return (
    <>
        <nav className='navbar'>
            <Link to="/" className='navbar-logo'>
                Cristobal 
            </Link>
            <ul className='nav-items'>
                {navItems.map(item => {
                    return (
                    <li key={item.id} className={item.cName}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                    )
                })}
            </ul>
            <Button />
        </nav>
    </>
  );
}

export default Navbar