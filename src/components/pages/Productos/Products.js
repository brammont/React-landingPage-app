import React from 'react'
import HeroSection from '../../HeroSection';
import { homeObjOne } from './Data';


function Products() {
    return (
        <div>
             <HeroSection {...homeObjOne} />
        </div>
    )
}

export default Products
