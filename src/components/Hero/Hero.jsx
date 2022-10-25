import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = {
        type: 'spring',
        duration: 2
    };

    const mobile = window.innerWidth <= 480 ? true : false;

  return (
    <section className="hero" id='home'>
        <div className="blur hero__blur"></div>
       <div className="hero__left">
           <Header />
           <div className="hero__the-best-ad">
               <motion.div
               initial={{left: mobile ? "200px" : "258px"}}
               whileInView={{left: '8px'}}
               transition={{...transition, type:'tween'}}
               ></motion.div>
               <span>a melhor academia do RIO DE JANEIRO</span>
           </div>

           <div className="hero__text">
               <div>
                   <span className='stroke-text'>Transforme </span>
                </div>
                <div>
                    <span>O seu corpo</span>
                </div>
                <div>
                    <span>Construa hoje a sua melhor versão e tenha mais qualidade de vida.</span>
                </div>
           </div>

           <div className="hero__bullet-points">
               <div>
                   <span>+125</span>
                   <span>professores</span>
                </div>
               <div>
                   <span>+950</span>
                   <span>alunos</span>
                </div>
               <div>
                   <span>+70</span>
                   <span>programas</span>
                </div>
           </div>

           <div className="hero__buttons">
               <a href="#programas">COMECE HOJE</a>
               <a href="#inscrevaSe">SAIBA MAIS</a>
           </div>
       </div>
       <div className="hero__right">
           <motion.div
           initial={{right: "-1rem"}}
           whileInView={{right: "4rem"}} 
           transition={transition}
           className="hero__right__batimentos-cardiacos">
                <img src={Heart} alt="coracao"/>
                <span>Batimentos</span>
                <span>116 bpm</span>
           </motion.div>

           <img src={HeroImage} alt="imagem homem" className='hero__right__hero-imagem' />
           <motion.img
           initial={{right: '11rem'}}
           whileInView={{right: '20rem'}}
           transition={transition}
           img src={HeroImageBack} alt="background imagem homem"
           className='hero__right__hero-imagem-background'
           />

            <motion.div 
            initial={{right: "32rem"}}
            whileInView={{right: "28rem"}}
            transition={transition}
            className="hero__right__calories">
                <img src={Calories} alt="calorias" />
                <div>
                    <span>Calorias queimadas</span>
                    <span>443kcal</span>
                </div>
            </motion.div >
       </div>
    </section>
  )
}

export default Hero;