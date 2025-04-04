import '../styles/scss/AboutSection.scss';

export default function AboutSection() {
  return (
    <div className='about-section'>
      <div className='about-section__container'>
        <section className='text-box'>
          <h2 className='text-box__heading'>Transform your brand</h2>
          <p className='text-box__description'>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            href='#'
            className='text-box__learn-more-button text-box__learn-more-button--yellow'
          >
            Learn More
          </a>
        </section>

        <img
          src={require('../images/mobile/image-transform.jpg')}
          alt='Egg'
          className='about-section__image about-section__image--mobile'
        />
        <img
          src={require('../images/desktop/image-transform.jpg')}
          alt='Egg'
          className='about-section__image about-section__image--desktop'
        />
      </div>

      <div className='about-section__container'>
        <section className='text-box'>
          <h2 className='text-box__heading'>Stand out to the right audience</h2>
          <p className='text-box__description'>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a
            href='#'
            className='text-box__learn-more-button text-box__learn-more-button--red'
          >
            Learn More
          </a>
        </section>

        <img
          src={require('../images/mobile/image-stand-out.jpg')}
          alt='Cup'
          className='about-section__image about-section__image--mobile'
        />
        <img
          src={require('../images/desktop/image-stand-out.jpg')}
          alt='Cup'
          className='about-section__image about-section__image--desktop'
        />
      </div>

      <div className='about-section__container'>
        <section className='services'>
          <h2 className='services__heading'>Graphic Design</h2>
          <p className='services__description'>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention.
          </p>
        </section>

        <section className='services'>
          <h2 className='services__heading'>Photography</h2>
          <p className='services__description'>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </section>
      </div>
    </div>
  );
}
