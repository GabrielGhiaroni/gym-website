import React from 'react';
import './Programas.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'
const Programas = () => {
  return (
    <section className="programas" id="programas">
        <div className="programas__header">
            <span className='stroke-text'>Nossos</span>
            <span>Programas</span>
            <span className='stroke-text'>Para você</span>
        </div>

        <a className="programas__categorias" href='#inscrevaSe'>
            {programsData.map((programa, index) =>
                    <div className="categoria" key={index}>
                        {programa.image}
                        <span>{programa.heading}</span>
                        <span>{programa.details}</span>
                        <div className="categoria__inscrevaSe">
                            <span>Inscreva-se</span>
                            <img src={RightArrow} alt="seta para a direita"/>
                        </div>
                    </div>
            )}
        </a>
    </section>
  )
}

export default Programas;