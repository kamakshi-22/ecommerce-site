import React from 'react'
import './Product.scss'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

export const Product = () => {

    // const image = "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080";

    const id = useParams().id; // id of the product 
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`)

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
                            <p className='product-description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta adipisci omnis corrupti, aliquam beatae! Officiis aliquam optio sunt in.
                                <br /><br />
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam voluptate obcaecati recusandae harum eveniet sit ipsam fugit quis tenetur cupiditate!
                            </p>
                            <button className='card-btn'>
                                Add to Cart
                            </button>
                        </div>
                    </>}
        </div>
    )
}
