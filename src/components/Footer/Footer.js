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
            <span className="listItemHeading">
              <b>Get to Know Us</b>
            </span>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </div>

          <div className="listDiv">
            <span className="listItemHeading">
              <b>Connect with Us</b>
            </span>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </div>

          <div className="listDiv">
            <span className="listItemHeading">
              <b>Make Money with Us</b>
            </span>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </div>

          <div className="listDiv">
            <span className="listItemHeading">
              <b>Let Us Help You</b>
            </span>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Amazon Assistant Download</li>
            <li>Help</li>
          </div>
        </div>

        <div className="list2">
          <img src={logo} alt="" className="logoFooter" />
          <div className="country">
          <li>Australia</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>China</li>
          <li>France</li>
          <li>Germany</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Netherlands</li>
          <li>Poland</li>
          <li>Singapore</li>
          <li>Spain</li>
          <li>Turkey</li>
          <li>United Arab Emirates</li>
          <li>United Kingdom</li>
          <li>United States</li>
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
