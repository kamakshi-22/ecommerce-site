import React from 'react'
import './Slider.scss'
import Image1 from '../../assets/images/1.png'
import Image2 from '../../assets/images/2.png'
import Image3 from '../../assets/images/3.png'

export const Slider = () => {

    const images = [Image1, Image2, Image3]
    const [current, setCurrent] = React.useState(0)
    const length = images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(images) || images.length <= 0) {
        return null
    }

    return (
        <div className='slider'>       
            <div className='wrapper'>
                <img src={images[current]} alt="banner" />
            </div>
            <div className='buttons'>
                <button onClick={prevSlide} className='left'>
                <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <button onClick={nextSlide} className='right'>
                    <ion-icon name="chevron-forward-outline"></ion-icon></button>
            </div>
        </div>
    )
}
