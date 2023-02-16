import React from 'react'
import './Product.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../reducer/cartReducer'


import {localData} from '../../assets/local/localData'

export const Product = () => {

    const id = useParams().id;// id of the product 
    console.log(id)
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
                                <button className='quantity-btn' onClick={() => { (quantity > 1) && setQuantity(quantity - 1) }}>-</button>
                                <span className='quantity'>{quantity}</span>
                                <button className='quantity-btn' onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <div className='product-size'>
                                <h3>Size</h3>
                                <div className='size'>
                                    <button className='size-btn'>S</button>
                                    <button className='size-btn'>M</button>
                                    <button className='size-btn'>L</button>
                                    <button className='size-btn'>XL</button>
                                </div>
                            </div>
                            <p className='product-description'>
                                {data?.attributes?.desc}
                            </p>
                            <button className='card-btn'
                                onClick={() => {
                                    alert("Product added successfully");
                                    dispatch(addToCart({
                                        id: data.id,
                                        title: data.attributes.title,
                                        price: data.attributes.price,
                                        img: process.env.REACT_APP_UPLOAD_URL + data.attributes?.img?.data?.attributes?.url,
                                        quantity,
                                    }))
                                }

                                }>
                                Add to Cart
                            </button>

                            <div className='share-btn'>
                                <span>Share:</span>
                                <ion-icon name="logo-facebook"></ion-icon>
                                <ion-icon name="logo-instagram"></ion-icon>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </div>
                        </div>
                    </>}
        </div>
    )
}
