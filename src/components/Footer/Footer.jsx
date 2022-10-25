import React from 'react';
import './Footer.css';
import GitHub from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <section className='footer__container'>
      <div className="blur footer__blur"></div>
      <div className="footer">
          <div className="footer__socials">
            <a href="https://github.com/GabrielGhiaroni"><img src={GitHub} alt="github logo" /></a>
            <a href="https://www.linkedin.com/in/gabrielghiaroni/"><img src={Linkedin} alt="linkedin logo" /></a>
          </div>
          <div className="footer__logo">
            <a href="#home"><img src={Logo} alt="fitclub logo" /></a>
          </div>
      </div>
    </section>
  )
}

export default Footer;