import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjThree, homeObjTwo} from './Data';
function Home() {
    return (
        <div>
             <HeroSection {...homeObjOne} />
             <HeroSection {...homeObjThree} />
             <HeroSection {...homeObjTwo} />
             
        </div>
    )
}

export default Home
