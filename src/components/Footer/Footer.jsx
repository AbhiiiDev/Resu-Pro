 import React from "react";
 import "./Footer.css"
 import fb from './facebook.png'
 import twitter from './twitter.png'
 import insta from './instagram.png'
 import linkedin from './linkdin1.png'
 const Footer=()=>{
  return (
    <div className="footer">
      <div className="sb_footer section__padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Jobs Seekers</h4>
            <a href="/freshers">
              <p>Create a resume</p>
            </a>
            <a href="/company">
              <p>Companies</p>
            </a>
            <a href="/skills">
              <p>Job Search</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Resources</h4>
            <a href="/freshers">
              <p>Resume help </p>
            </a>
            <a href="/company">
              <p>Job interview</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Developers</h4>
            <a href="/freshers">
              <p>ResoPro</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Support</h4>
            <a href="/about">
              <p>FAQ</p>
            </a>
            <a href="/company">
              <p>Contact us</p>
            </a>
            <a href="/fresher">
              <p>Terms of Service</p>
            </a>
            <a href="/contact">
              <p>Privacy</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Contact us</h4>
            <div className="socialmedia">
              <p><img src={fb} alt="" /></p>
              <p><img src={twitter} alt="" /></p>
              <p><img src={linkedin} alt="" /></p>
              <p><img src={insta} alt="" /></p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} Copyright. All right reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
 }
 export default Footer;