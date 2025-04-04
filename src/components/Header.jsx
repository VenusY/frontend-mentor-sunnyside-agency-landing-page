import '../styles/scss/Header.scss';

export default function Header() {
  return (
    <header className='header'>
      <nav className='nav-bar'>
        <a href='' className='logo__link'>
          <img src={require('../images/logo.svg')} alt='' className='logo' />
        </a>

        <div className='links'>
          <a href='#' className='links__page'>
            About
          </a>
          <a href='#' className='links__page'>
            Services
          </a>
          <a href='#' className='links__page'>
            Projects
          </a>
          <button className='links__contact-button'>Contact</button>
        </div>

        <button className='nav-bar__menu-button'>
          <img
            src={require('../images/icon-hamburger.svg')}
            alt='Hamburger menu'
            className='nav-bar__hamburger'
          />
        </button>
      </nav>

      <section className='intro'>
        <h1 className='intro__heading'>We Are Creatives</h1>
        <div className='intro__arrow'></div>
      </section>
    </header>
  );
}
