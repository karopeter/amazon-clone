import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { useStateValue } from './components/StateProvider';

function Header() {
  const [{ basket }] = useStateValue();
  console.log(basket);

  return (
    <nav className="header">
     { /* logo on the left -> img */}
     <Link to="/home">
       <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
     </Link>

     {/*  Search box */}
     <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon" />
     </div>

     { /* 3 Links */}
     <div className="header__nav">
      {/* 1st Link */ }
      <Link to="/login" className="header__link">
      <div className="header__option">
         <span className="header__optionLineOne">Hello Qazi</span>
         <span className="header__optionLineTwo">Sign In</span>
      </div>
      </Link>

      {/* 2nd Link */ }
      <Link to="/" className="header__link">
      <div className="header__option">
         <span className="header__optionLineOne">Returns</span>
         <span className="header__optionLineTwo">& Orders</span>
      </div>
      </Link>

      {/* 3rd Link */ }
      <Link to="/" className="header__link">
      <div className="header__option">
         <span className="header__optionLineOne">Your</span>
         <span className="header__optionLineTwo">Prime</span>
      </div>
      </Link>

      {/* 4th Link */ }
      <Link to="/checkout" className="header__link">
       <div className="header__optionBasket">
         <ShoppingBasketIcon />
         <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
       </div>
      </Link>
     </div>

     { /* Basket icon with number */}
    </nav>
  );
};


export default Header;