import React from 'react';
import { FooterBase } from './styles';
import Radiohead from '../../assets/imagens/radiohead.png'

function Footer() {
  return (
    <FooterBase>
      <img className='Radiohead' src={Radiohead} alt='Radiohead logo' width='128' height='128'></img>
      <br></br>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
