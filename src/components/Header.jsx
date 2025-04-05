import { useState } from 'react';
import '../styles/scss/Header.scss';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navOpen);
  }

  return (
    <header className='header'>
      <nav className='nav-bar'>
        <a href='' className='logo__link'>
          <img src={require('../images/logo.svg')} alt='' className='logo' />
        </a>

        <div className={`links ${navOpen ? 'links--visible' : ''}`}>
          <div className='links__container'>
            <a href='#' className='links__page'>
              About
            </a>
            <a href='#' className='links__page'>
              Services
            </a>
            <a href='#' className='links__page'>
              Projects
            </a>
          </div>
          <button className='links__contact-button'>Contact</button>
        </div>

        <button className='nav-bar__menu-button' onClick={toggleNav}>
          <img
            src={require('../images/icon-hamburger.svg')}
            alt='Hamburger menu'
            className='nav-bar__hamburger'
          />
        </button>
      </nav>

      <section className='intro'>
        <h1 className='intro__heading'>We Are Creatives</h1>
        <img
          src={require('../images/icon-arrow-down.svg')}
          alt='Arrow'
          className='intro__arrow'
        />
      </section>
    </header>
  );
}
