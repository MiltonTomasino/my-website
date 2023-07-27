import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="navBar">
                <div className='logo'>
                    <h1>Milton's Website</h1>
                </div>
                <ul className='navbar-menu'>
                    <li>Portfolio</li>
                    <li>About me</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar