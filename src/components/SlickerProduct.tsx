import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickesComponentProps } from './Slickes'
import { selectProducts } from '../redux/Slices/productsSlice'
import { useSelector } from 'react-redux'
import ProductBlock from './ProductBlock'


type SlickTeamBlockProps = {
    settings:SlickesComponentProps
}

const SlickerProduct:React.FC<SlickTeamBlockProps> = ({settings}) => {
    const { products } = useSelector(selectProducts)
    return (
    <Slider {...settings}>
        {products.map((product) => (
        <div  
            key={product.id}
            className="card"
        >
            <ProductBlock itemObj={product}/>
        </div>
        ))}
    </Slider> 
    )
}

export default SlickerProduct