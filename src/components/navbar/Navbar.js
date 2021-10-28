import React from 'react'
import Switcher from './Switcher'

const Navbar = () => {
    return (
        <div>
            <nav className="centered">
                <h2>jobFinder</h2>
                <Switcher />
            </nav>
        </div>
    )
}

export default Navbar;
