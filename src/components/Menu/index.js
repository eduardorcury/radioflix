import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imagens/Logo.png'
import './Menu.css';
import Button from '../Button';

function Menu() {

    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt='Radioflix logo'></img>
            </Link>

            <Button as={Link} className='ButtonLink' to='/cadastro/video'>
                Novo vídeo
            </Button>
        </nav>
    );

}

export default Menu;