import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

export const Card = ({ item }) => {
    return (

        <div className='card'>
            <div className='card-title'>
                <h3>{item?.attributes.title}</h3>
            </div>
            <div className='card-image'>
                <img
                    src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
                    alt={item?.attributes.title} />
            </div>
            <button className='card-btn'>
                Add to Cart
                <div className='card-price'>
                    <h3>₹ {item?.attributes.price}</h3>
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
