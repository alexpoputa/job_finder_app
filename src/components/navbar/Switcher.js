import React from 'react'

const Switcher = () => {
    return (
        <div className="switcher d-flex">
            <a href="#"><i className="far fa-sun"></i></a>
            <input type="checkbox" />
            <a href="#"><i className="far fa-moon"></i></a>
        </div>
    )
}

export default Switcher;
