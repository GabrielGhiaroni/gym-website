import React from 'react';
import './InscrevaSe.css'

const InscrevaSe = () => {
  return (
    <section className='inscrevaSe' id='inscrevaSe'>
        <div className="inscrevaSe__left">
            <div>
                <span className='stroke-text before'>PRONTO PARA</span>
                <span>MUDAR</span>
            </div>
            <div>
                <span>SEU CORPO</span>
                <span className='stroke-text'>COM A GENTE?</span>
            </div>
        </div>
        <div className="inscrevaSe__right">
            <form action="" className='inscrevaSe__right__email-container'>
                <input type="email" name='nome' placeholder='Seu e-mail'/>
                <button className='btn btn-inscrevaSe'>Inscreva-se</button>
            </form>
        </div>
    </section>
  )
}

export default InscrevaSe;