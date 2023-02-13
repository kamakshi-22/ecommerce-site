import React from 'react'
import './Product.scss'

export const Product = () => {

    const image = "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080";
    
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={image} alt="product" />
            </div>
            <div className='product-details'>
                <h1 className='product-title'>Product Name</h1>
                <div className='product-price'>
                    <h2>₹ 1000</h2>
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
        </div>
    )
}
