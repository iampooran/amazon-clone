import React from "react";
import "./Footer.css";
import logo from "../../Images/Logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="backtotop">
         <a href="#topLink" className="BTT">Back to Top</a>
          </div>

        <div className="list1">
          <div className="listDiv">
            <li className="listItemHeading">
              <b>Get to Know Us</b>
            </li>
            <li className="listItem">About Us</li>
            <li className="listItem">Careers</li>
            <li className="listItem">Press Releases</li>
            <li className="listItem">Amazon Science</li>
          </div>

          <div className="listDiv">
            <li className="listItemHeading">
              <b>Connect with Us</b>
            </li>
            <li className="listItem">Facebook</li>
            <li className="listItem">Twitter</li>
            <li className="listItem">Instagram</li>
          </div>

          <div className="listDiv">
            <li className="listItemHeading">
              <b>Make Money with Us</b>
            </li>
            <li className="listItem">Sell on Amazon</li>
            <li className="listItem">Sell under Amazon Accelerator</li>
            <li className="listItem">Protect and Build Your Brand</li>
            <li className="listItem">Amazon Global Selling</li>
            <li className="listItem">Become an Affiliate</li>
            <li className="listItem">Fulfilment by Amazon</li>
            <li className="listItem">Advertise Your Products</li>
            <li className="listItem">Amazon Pay on Merchants</li>
          </div>

          <div className="listDiv">
            <li className="listItemHeading">
              <b>Let Us Help You</b>
            </li>
            <li className="listItem">COVID-19 and Amazon</li>
            <li className="listItem">Your Account</li>
            <li className="listItem">Returns Centre</li>
            <li className="listItem">100% Purchase Protection</li>
            <li className="listItem">Amazon App Download</li>
            <li className="listItem">Amazon Assistant Download</li>
            <li className="listItem">Help</li>
          </div>
        </div>

        <div className="list2">
          <img src={logo} alt="" className="logoFooter" />
          <div className="country">
          <li className="countryList">Australia</li>
          <li className="countryList">Brazil</li>
          <li className="countryList">Canada</li>
          <li className="countryList">China</li>
          <li className="countryList">France</li>
          <li className="countryList">Germany</li>
          <li className="countryList">Italy</li>
          <li className="countryList">Japan</li>
          <li className="countryList">Mexico</li>
          <li className="countryList">Netherlands</li>
          <li className="countryList">Poland</li>
          <li className="countryList">Singapore</li>
          <li className="countryList">Spain</li>
          <li className="countryList">Turkey</li>
          <li className="countryList">United Arab Emirates</li>
          <li className="countryList">United Kingdom</li>
          <li className="countryList">United States</li>
          </div>
        </div>

        <div className="list3">

        <span className="w">Conditions of Use & Sale</span>
        <span className="footerSpan1">Privacy Notice</span>
        <span className="footerSpan1">Interest-Based Ads</span>
        <span className="footerSpan2">© 1996-2023, Amazon.com, Inc. or its affiliates</span>


        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
