import { IconButton } from '@mui/material';
import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import './index.css';
function Menu({count}) {
  return (
    <div className='header'>
        <nav>
        <ul>
          <li>
            <Link to="/page1">Brands</Link>
          </li>
          <li>
            <Link to="/page2">Products</Link>
          </li>
          <li>
            <Link to="/page3">About</Link>
          </li>
          <li>
            <Link to="/page4">Special Offers</Link>
          </li>
          <li>
            <Link to="/page5">B2B offers</Link>
          </li>
          <li>
            <Link to="/page6">Support</Link>
          </li>
          <li>
            <Link to="/page7">Contact us</Link>
          </li>
          <li>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
              <div className="count">{count}</div>
            </IconButton>
            
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu