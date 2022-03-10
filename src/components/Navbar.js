
import React, {useState} from 'react'
import logo from '../assests/cris_cat.jpeg'
import {Link} from 'react-router-dom'
import ReorderIcon from '@material-ui/icons/Reorder'
import '../styles/Navbar.css'

function Navbar() {

    const [openLinks, setOpenLinkes] = useState(false);

    const toggleNavbar = () => {
        setOpenLinkes(!openLinks);
    }
  return (
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            <img src={logo} />
            <div className='hiddenLinks'>
                <Link to="/"> Home </Link>
                <Link to="/portfolio"> Portfolio  </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/"> Home </Link>
            <Link to="/portfolio"> Portfolio  </Link>
            <Link to="/contact"> Contact </Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  );
}

export default Navbar