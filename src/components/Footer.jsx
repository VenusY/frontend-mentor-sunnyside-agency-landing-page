export default function Footer() {
  return (
    <footer className='footer'>
      <img
        src={require('../images/logo-footer.svg')}
        alt='Logo'
        className='footer__logo'
      />

      <nav className='footer__nav'>
        <a href='#' className='footer__page-link'>
          About
        </a>

        <a href='#' className='footer__page-link'>
          Services
        </a>

        <a href='#' className='footer__page-link'>
          Projects
        </a>
      </nav>

      <nav className='footer__socials'>
        <a href='#' className='footer__social-link'>
          <img
            src={require('../images/icon-facebook.svg')}
            alt='Facebook'
            className='footer__social-icon'
          />
        </a>

        <a href='#' className='footer__social-link'>
          <img
            src={require('../images/icon-instagram.svg')}
            alt='Instagram'
            className='footer__social-icon'
          />
        </a>

        <a href='#' className='footer__social-link'>
          <img
            src={require('../images/icon-twitter.svg')}
            alt='Twitter'
            className='footer__social-icon'
          />
        </a>

        <a href='#' className='footer__social-link'>
          <img
            src={require('../images/icon-pinterest.svg')}
            alt='Pinterest'
            className='footer__social-icon'
          />
        </a>
      </nav>
    </footer>
  );
}
