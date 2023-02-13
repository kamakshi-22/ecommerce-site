import React from 'react'
import { Featured } from '../../components/Featured/Featured'
import { Slider } from '../../components/Slider/Slider'

export const Home = () => {
    return (
        <div>
            <Slider />
            <Featured />
        </div>
    )
}

