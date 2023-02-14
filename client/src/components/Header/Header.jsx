import React, {useState} from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { Cart } from '../Cart/Cart';
import { useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../../reducer/cartReducer'
import { useSelector } from 'react-redux'

export const Header = () => {
    const [cart, setCart] = useState(false);

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    return (
        <header>
            <Link to='/' className='header__logo'>Nayika</Link>
            <div className='header__menu'>
                <Link to='/' className='header__menu-item'>Home</Link>
                <Link to='/products' className='header__menu-item'>Shop</Link>
                <Link to='/contact' className='header__menu-item'>Contact</Link>
            </div>
            <div className='header__cart' onClick={() => setCart(!cart)}>
                <ion-icon name="cart"></ion-icon> 
                <span>{products.length}</span>
            </div>
            {cart && <Cart />}
        </header>
    )
}
