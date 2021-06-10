import React from 'react'
import '../styles/components/Header.css'

function Header(props) {
    return (
        <div className="header">
            <h1 className="header__h1">{props.title}</h1>
        </div>
    )
}

export default Header
