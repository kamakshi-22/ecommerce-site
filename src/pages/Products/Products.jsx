import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card/Card'
import './Products.scss'

export const Products = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Title 1',
            price: 1000,
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Title 1',
            price: 1000,
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Title 1',
            price: 1000,
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Title 1',
            price: 1000,
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxMHx8dHJvbGwlMjBmYWNlfGVufDB8fHx8MTY3NTQzMTU2Ng&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Title 1',
            price: 1000,
        },

    ]

    return (

        <div className='products'>
            <h1>Get the best desi fits</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fuga id consequatur enim sequi saepe!</p>
            <div className='card-container'>

                {data.map(item =>
                    (<Card key={item.id} item={item} />)
                )}
            </div>
        </div>
    )
}
