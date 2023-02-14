import React from 'react'
import './Cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../../reducer/cartReducer'
import { loadStripe } from "@stripe/stripe-js";
import makeRequest  from "../../makeRequest";

export const Cart = () => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.price * item.quantity
        })
        return total.toFixed(2)
    }
    const stripePromise = loadStripe(
        "pk_test_51MbOkFSDRxvgzErfciAQM2bbMml2ec9BG6cEx0y218hn3vDvRPNcV6FxUUb8qd6qiva2W7lDHrwBQtUZdbda4Wqe008KcXhcoh"
    );
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='cart'>
            <h1 className='cart-title'>your products</h1>
            {products?.map((item) => (
                <div className='cart-item' key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div className='cart-deatils' >
                        <h2>{item.title}</h2>
                        <p>{item.quantity} x ₹ {item.price}</p>
                    </div>
                    <ion-icon name="trash-outline" onClick={() => dispatch(removeItem(item.id))}>
                    </ion-icon>
                </div>
            ))}

            <div className='cart-total'>
                <h2>Total</h2>
                <p className='cart-total-price'>₹ {totalPrice()}</p>
            </div>
            <button className='cart-btn' onClick={handlePayment}>
                Checkout
            </button>
            <span className="reset-cart" onClick={() => dispatch(resetCart())}>
                Reset cart
            </span>
        </div>
    )
}
