import React from 'react';
import './Depoimentos.css'
import {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Depoimentos = () => {
    const transition = {
        type: 'spring',
        duration: 3
    };

    const [selected, setSelected] = useState(0);
    const depoimentosLength = testimonialsData.length;

  return (
    <section className="depoimentos" id='depoimentos'>
        <div className="depoimentos__left">
            <span>Depoimentos</span>
            <span className='stroke-text'>O que estão</span>
            <span>Falando sobre nós</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            >{testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{
                    color: 'var(--orange)'
                }}>
                    {testimonialsData[selected].name}
                </span>
                {" "} - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="depoimentos__right">
            <motion.div
            className='efeito-depoimento-1'
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.div
            className='efeito-depoimento-2'
                initial={{opacity: 0, x: 100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.img
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[selected].image} alt="foto alunos" />

            <div className="arrows">
                <img src={leftArrow} alt="seta esquerda" onClick={() => {
                    selected === 0 ? setSelected(depoimentosLength - 1) : setSelected((prev) => prev - 1)
                }}/>
                <img src={rightArrow} alt="seta direita" onClick={() => {
                    selected === depoimentosLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                }}/>
            </div>
        </div>
    </section>
  )
}

export default Depoimentos;