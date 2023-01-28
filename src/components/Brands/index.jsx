import React from 'react'
import Section1 from './Section1'
import Slider1 from './Slider1'
import Slider2 from './Slider2'

function Brands({Click}) {
  return (
    <div>
        <Section1 />
        <Slider1 Click={Click}/>
        <Slider2 Click={Click}/>
    </div>
  )
}

export default Brands