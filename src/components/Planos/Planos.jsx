import React from 'react';
import './Planos.css';
import {plansData} from '../../data/plansData';
import bulletPointBranco from '../../assets/whiteTick.png'

const Planos = () => {
  return (
    <section className="planos__container" id='planos'>
        <div className="blur planos__blur-1"></div>
        <div className="blur planos__blur-2"></div>
        <div className="programas__header">
            <span className="stroke-text">Comece</span>
            <span>Sua jornada</span>
            <span className="stroke-text">Conosco</span>
        </div>

        <div className="planos__cards">
            {plansData.map((plano, index) => (
                <div className="plano" key={index}>
                    {plano.icon}
                    <span>{plano.name}</span>
                    <span>R${plano.price}</span>

                    <div className="features">
                        {plano.features.map((feature, index) => (
                            <div className="feature">
                                <img src={bulletPointBranco} alt="bullet point" />
                                <span key={index}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <span>Veja mais benefícios</span>
                    </div>
                    <button className='btn'>Inscreva-se</button>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Planos;