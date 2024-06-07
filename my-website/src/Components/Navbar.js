import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav class="navBar">
                <Link to='/'>
                    <div className='logo'>
                        <h1>Milton's Website</h1>
                    </div>
                </Link>
                <ul className='navbar-menu'>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>About me</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar