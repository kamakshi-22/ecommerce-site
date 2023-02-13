import React from 'react'
import './Cart.scss'

export const Cart = () => {
    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Title 1',
            price: 1000,
        }
    ]
    return (
        <div className='cart'>
            <h1 className='cart-title'>your products</h1>
            {data.map((item) => (
                <div className='cart-item' key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div className='cart-deatils'>
                        <h2>{item.title}</h2>
                        <p>1 x ₹ {item.price}</p>
                    </div>
                    <ion-icon name="trash-outline"></ion-icon>
                </div>
            ))}

            <div className='cart-total'>
                <h2>Total</h2>
                <p className='cart-total-price'>₹ 1000</p>
            </div>
            <button className='cart-btn'>
                Checkout
            </button>
            <span className="reset-cart">
                Reset cart
            </span>
        </div>
    )
}
