import React from 'react';
import './Motivos.css';
import imagem1 from '../../assets/image1.png';
import imagem2 from '../../assets/image2.png';
import imagem3 from '../../assets/image3.png';
import imagem4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import bulletPoint from '../../assets/tick.png';

const Motivos = () => {
  return (
    <section className="motivos" id="motivos">
        <div className="motivos__left">
            <img src={imagem1} alt="imagem 1" />
            <img src={imagem2} alt="imagem 2" />
            <img src={imagem3} alt="imagem 3" />
            <img src={imagem4} alt="imagem 4" />
        </div>
        <div className="motivos__right">
            <span>motivos para nos escolher</span>
            <div>
                <span className='stroke-text'>Por que</span>
                <span> nós?</span>
            </div>

            <div className='motivos__right__detalhes'>
                <div>
                    <img src={bulletPoint} alt="bullet point" />
                    <span>+125 professores experientes</span>
                </div>
                <div>
                    <img src={bulletPoint} alt="bullet point" />
                    <span>Programas personalizados para o seu objetivo</span>
                </div>
                <div>
                    <img src={bulletPoint} alt="bullet point" />
                    <span>1 mês grátis para novos alunos</span>
                </div>
                <div>
                    <img src={bulletPoint} alt="bullet point" />
                    <span>Rede de parceiros com descontos exclusivos</span>
                </div>
            </div>
               
               <span style={{
                   color: 'var(--gray)',
                   fontWeight: 'normal'
               }}>NOSSOS PARCEIROS</span>

               <div className="motivos__right__parceiros">
                <img src={nb} alt="logo new balance" />
                <img src={adidas} alt="logo adidas" />
                <img src={nike} alt="logo nike" />
               </div>
        </div>
    </section>
  )
}

export default Motivos;