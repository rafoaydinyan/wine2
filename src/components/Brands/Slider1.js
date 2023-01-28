import React from "react";
import "./Slider1.css";
import Wine11 from "../Image/wine11.png";
import Wine17 from "../Image/wine17.png";
import Wine8 from "../Image/wine8.png";
import Wine9 from "../Image/wine9.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
function Slider1({Click}) {
  let slider = [
    {
      id: 1,
      title: "“Armenia” white dry wine",
      alco: 55,
      litr: 0.75,
      img: Wine11,
      sale: 8.5 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>20%</div>,
      price: 3.95,
    },
    {
      id: 2,
      title: "“Armenia” rose sweet wine",
      alco: 55,
      litr: 1,
      img: Wine17,
      price: 6.7,
    },
    {
      id: 3,
      title: "“Koor” red sweet wine",
      alco: 40,
      litr: 0.8,
      img: Wine8,
      sale: 8 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>10%</div>,
      price: 3.95,
    },
    {
      id: 4,
      title: "“Armenia” pomegrante",
      alco: 50,
      litr: 0.75,
      img: Wine9,
      sale: 12 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>15%</div>,
      price: 5.5,
    },
    {
      id: 5,
      title: "“Armenia” white dry wine",
      alco: 55,
      litr: 0.75,
      img: Wine11,
      sale: 8.5 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>20%</div>,
      price: 3.95,
    },
    {
      id: 6,
      title: "“Armenia” rose sweet wine",
      alco: 55,
      litr: 1,
      img: Wine17,
      price: 6.7,
    },
    {
      id: 7,
      title: "“Koor” red sweet wine",
      alco: 40,
      litr: 0.8,
      img: Wine8,
      sale: 8 + "$",
      sale1: <div style={{ background: "#DA3D4E" }}>10%</div>,
      price: 3.95,
    },
    {
      id: 8,
      title: "“Armenia” pomegrante",
      alco: 50,
      litr: 0.75,
      img: Wine9,
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
  return (
    <div>
      <div className="Slider1">
        <div className="Popular">
          <div className="line"></div>
          <p className="PopularWines">Popular Wines</p>
          <div className="line"></div>
        </div>

        <Slider {...settings}>
          {slider.map((item, index) => {
            return (
              <div key={index} className="slider1_item">
                <p className="slider1_title">{item.title}</p>
                <div className="slider1_alcolitr">
                  <p>{item.alco}%</p>
                  <p>{item.litr}L</p>
                </div>
                <div className="image">
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
    </div>
  );
}

export default Slider1;
