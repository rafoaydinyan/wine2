import React from 'react'
import "./Section1.css";
import Grapes from "../Image/grapes.jpg";
import Bottle from '../Image/bottle.png';
function Section1() {
  return (
    <div>
        <div className="Section1">
        <div
          className="grape"
          style={{ background: `url(${Grapes})`, backgroundSize: "cover" }}
        >
          <div className="bottle" style={{background: `url(${Bottle})`, backgroundSize: 'contain'}}></div>
        </div>
        <div className="about">
          <h2>About this website</h2>
          <div className="about_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a venenatis ex. Praesent ut diam sit amet ipsum
              hendrerit lacinia nec ut turpis. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam
              laoreet, et elementum diam varius. Etiam eu placerat libero.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1