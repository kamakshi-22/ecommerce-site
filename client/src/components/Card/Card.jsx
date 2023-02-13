import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

export const Card = ({ item }) => {
    return (

        <div className='card'>
            <div className='card-title'>
                <h3>{item.title}</h3>
            </div>
            <div className='card-image'>
                <img src={item.img} alt={item.title} />
            </div>
            <button className='card-btn'>
                Add to Cart
                <div className='card-price'>
                    <h3>₹ {item.price}</h3>
                </div>
            </button>
            <div className='card-link'>
                <Link to={`/product/${item.id}`}>
                    <button>View Product</button>
                </Link>
            </div>
        </div>
    )
}
