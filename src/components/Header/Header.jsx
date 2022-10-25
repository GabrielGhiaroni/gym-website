import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import MenuHamburguer from '../../assets/bars.png';

const Header = () => {
  const mobile = window.innerWidth <= 480 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="header">
      <a href="#home"><img src={Logo} alt="logo-fitclub" className='logo'/></a>
      {menuOpened === false && mobile === true ? (
        <div>
          <img src={MenuHamburguer} alt="menu hamburguer" style={{width:'1.5rem', height: '1.5rem'}}
           onClick={() => { 
             setMenuOpened(true);
             }}/>
        </div>
      ) : (
          <ul className='header__menu'>
            <a href="#home" onClick={() => setMenuOpened(false)}><li>Home</li></a>
            <a href="#programas" onClick={() => setMenuOpened(false)}><li>Programas</li></a>
            <a href="#motivos" onClick={() => setMenuOpened(false)}><li>Por que nós?</li></a>
            <a href="#planos" onClick={() => setMenuOpened(false)}><li>Nossos planos</li></a>
            <a href="#depoimentos" onClick={() => setMenuOpened(false)}><li>Depoimentos</li></a>
            <a href="#inscrevaSe" onClick={() => setMenuOpened(false)}><li>Inscreva-se</li></a>
          </ul>
      )}
    </section>
  )
}

export default Header;