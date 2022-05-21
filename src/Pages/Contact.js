import React from 'react';
import Header from './Header';
import foto from '../img/contato.jpg';
import Section from '../Components/Section';
import { HomeImage } from '../Components/Image';

const Contact = () => {
  return (
    <Section className='section'>
      <div style={{ width: '60vw' }} className='container is-max-desktop'>
        <Header />
        <div className='columns is-multiline'>
          <div className='column'>
            <HomeImage src={foto} alt='' />
          </div>
          <div className='column'>
            <h3 className='title is-3'>Entre em Contado</h3>
            <ul className='content' style={{ paddingLeft: '1rem' }}>
              <li>Leonardo C. Almeida</li>
              <li>(16) 99345-1699</li>
              <li>leonardocaetanoalmeida@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
