import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to='/' className='header__logo'>Nayika</Link>
            <div className='header__menu'>
                <Link to='/' className='header__menu-item'>Home</Link>
                <Link to='/products/:id' className='header__menu-item'>Shop</Link>
                <Link to='/contact' className='header__menu-item'>Contact</Link>
            </div>
            <div className='header__cart'>
                <ion-icon name="cart"></ion-icon> 
            </div>
        </header>
    )
}
