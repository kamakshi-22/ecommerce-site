import React from 'react'
import './Product.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../reducer/cartReducer'

export const Product = () => {

    const id = useParams().id; // id of the product 
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`) // fetch the product data
    const dispatch = useDispatch() // dispatch the action to add the product to cart
    const [quantity, setQuantity] = React.useState(1) // quantity of the product

    return (
        <div className='product'>
            {error
                ? "something went wrong"
                : loading
                    ? "loading..."
                    : <>
                        <div className='product-img'>
                            <img
                                src={process.env.REACT_APP_UPLOAD_URL + data.attributes?.img?.data?.attributes?.url}
                                alt="product" />
                        </div>
                        <div className='product-details'>
                            <h1 className='product-title'>
                                {data?.attributes?.title}
                            </h1>
                            <div className='product-price'>
                                <h2>₹ {data?.attributes?.price}</h2>
                            </div>
                            <div className='product-quantity'>
                                <button className='quantity-btn' onClick={() => { (quantity>0) && setQuantity(quantity - 1) }}>-</button>
                                <span className='quantity'>{quantity}</span>
                                <button className='quantity-btn' onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <p className='product-description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta adipisci omnis corrupti, aliquam beatae! Officiis aliquam optio sunt in.
                                <br /><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptate obcaecati recusandae harum eveniet sit ipsam fugit quis tenetur cupiditate!
                            </p>
                            <button className='card-btn'
                                onClick={() => dispatch(addToCart({
                                    id: data.id,
                                    title: data.attributes.title,
                                    price: data.attributes.price,
                                    img: process.env.REACT_APP_UPLOAD_URL + data.attributes?.img?.data?.attributes?.url,
                                    quantity,
                                }))}>
                                Add to Cart
                            </button>
                        </div>
                    </>}
        </div>
    )
}
