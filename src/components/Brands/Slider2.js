import React from 'react';
import './Slider2.css'; 
import Wine12 from '../Image/wine12.png'
import Wine13 from '../Image/wine13.png';
import Wine14 from '../Image/wine14.png';
import Wine15 from '../Image/wine15.png';
import SliderEnd from '../Image/sliderend.png'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from '@mui/material';
let slider = [
    {
      id: 1,
      title: "“Karas” red wine",
      alco: 55,
      litr: 0.75,
      img: Wine12,
      sale: 8.5 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>20%</div>,
      price: 3.95,
    },
    {
      id: 2,
      title: "“Zorah” white dry wine",
      alco: 55,
      litr: 1,
      img: Wine13,
      price: 6.7,
    },
    {
      id: 3,
      title: "“Tushpa” white wine",
      alco: 40,
      litr: 0.8,
      img: Wine14,
      sale: 8 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>10%</div>,
      price: 3.95,
    },
    {
      id: 4,
      title: "“Areni” Qoto red wine",
      alco: 50,
      litr: 0.75,
      img: Wine15,
      sale: 12 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>15%</div>,
      price: 5.5,
    },
    {
      id: 5,
      title: "“Karas” red wine",
      alco: 55,
      litr: 0.75,
      img: Wine12,
      sale: 8.5 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>20%</div>,
      price: 3.95,
    },
    {
      id: 6,
      title: "“Zorah” white dry wine",
      alco: 55,
      litr: 1,
      img: Wine13,
      price: 6.7,
    },
    {
      id: 7,
      title: "“Tushpa” white wine",
      alco: 40,
      litr: 0.8,
      img: Wine14,
      sale: 8 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>10%</div>,
      price: 3.95,
    },
    {
      id: 8,
      title: "“Areni” Qoto red wine",
      alco: 50,
      litr: 0.75,
      img: Wine15,
      sale: 12 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>15%</div>,
      price: 5.5,
    },
  ];
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
function Slider2({Click}) {
  return (
    <div>
        <div className="Slider2">
        <div className="Popular">
          <div className="line"></div>
          <p className="PopularWines">Customer favorites</p>
          <div className="line"></div>
        </div>

        <Slider {...settings}>
          {slider.map((item, index) => {
            return (
              <div key={index} className="slider2_item">
                <p className="slider2_title">{item.title}</p>
                <div className="slider2_alcolitr">
                  <p>{item.alco}%</p>
                  <p>{item.litr}L</p>
                </div>
                <div className='image'>
                  <img src={item.img} />
                </div>
                <div className="star_block">
                  <StarOutlineIcon className="star" />
                  <StarOutlineIcon className="star" />
                  <StarOutlineIcon className="star" />
                  <StarOutlineIcon className="star" />
                  <StarOutlineIcon className="star" />
                </div>
                <div className="starUnderline"></div>
                <div className="sale">
                  <p>{item.sale}</p>
                  <div className="salePercent">{item.sale1}</div>
                </div>
                <div className="priceShopping">
                  <h3 className="price">{item.price}$</h3>
                  <IconButton className="shoppingCard">
                    <ShoppingCartOutlinedIcon onClick={Click}/>
                  </IconButton>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className='sliderEnd' style={{background: `url(${SliderEnd})`, backgroundSize: 'cover'}}></div>
    <div style={{width: '300px', height: '300px', border: 'solid'}} className='box'></div>
    </div>
  )
}

export default Slider2