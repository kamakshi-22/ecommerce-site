import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../Card/Card'
import './Featured.scss'
import useFetch from '../../hooks/useFetch'

import { localData } from '../../assets/local/localData'

export const Featured = () => {

    const { data, loading, error } = useFetch("/products?populate=*&[filters][featured]=true")
    //map over data array and return a Card component for each item 
    console.log(data)
    return (
        <div className='featured'>
            <h1>Get the best desi fits</h1>
            <p>Lorem ipsum dolor sit amet. Amet fuga id consequatur enim sequi saepe!</p>
            <Link to={`/products/`}>
                <button className='allProductsBtn'>
                    All Products
                </button>
            </Link>

            <div className='card-container'>
                {error
                    ? "something went wrong"
                    : loading
                        ? "loading..."
                        : data.map((item) =>
                            <Card key={item.id} item={item} />
                        )}
            </div>
        </div>
    )
}


