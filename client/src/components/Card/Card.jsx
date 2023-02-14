import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../reducer/cartReducer'
export const Card = ({ item }) => {

    const dispatch = useDispatch() // dispatch the action to add the product to cart
    const [quantity, setQuantity] = React.useState(1) // quantity of the product

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
            <button className='card-btn' 
                onClick={() => 
                    { alert("Product added successfully");
                    dispatch(addToCart({
                    id: item.id,
                    title: item.attributes.title,
                    price: item.attributes.price,
                    img: process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url,
                    quantity,
                }))
            }
            }
            >
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
