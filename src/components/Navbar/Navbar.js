import React from "react";
import "./Navbar.css";
import logo from "../../Images/Logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  return (
    <React.Fragment>
    <div className="navbar">
      <div className="left">
        <Link to="/">
        <img src={logo} alt="" className="logo" />
        </Link>
        <LocationOnIcon sx={{ color: "white", marginLeft: "0.5rem", marginBottom:"0.6rem"}}/>
        <span className="delivery-address">Pune, 411033</span>
      </div>

      <div className="center">
        <input className="searchBar" placeholder="Search Amazon.in" />
        <SearchIcon
          fontSize="large"
          sx={{ position: "absolute", color: "white", marginTop: "0.6rem" ,cursor: "pointer"}}
        />
      </div>

      <div className="right">
        <span className="span1">Accounts & Lists</span>
        <span className="span2">Returns & Orders</span>
        <ShoppingCartIcon
          sx={{ color: "white", marginTop: "1rem", marginLeft: "17.5rem"  ,cursor: "pointer"}}
        />
      </div>
    </div>
    <SubNavbar/>
    </React.Fragment>
  );
};

export default Navbar;
