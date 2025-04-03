export default function Testimonials() {
  return (
    <section className='testimonials-section'>
      <h2 className='testimonials-section__heading'>Client Testimonials</h2>

      <div className='testimonials-section__container'>
        <section className='testimonial'>
          <img
            src={require('../images/image-emily.jpg')}
            alt='Avatar'
            className='testimonial__avatar'
          />
          <p className='testimonial__statement'>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3 className='testimonial__name'>Emily R.</h3>
          <p className='testimonial__title'>Marketing Director</p>
        </section>

        <section className='testimonial'>
          <img
            src={require('../images/image-thomas.jpg')}
            alt='Avatar'
            className='testimonial__avatar'
          />
          <p className='testimonial__statement'>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <h3 className='testimonial__name'>Thomas S.</h3>
          <p className='testimonial__title'>Chief Operating Officer</p>
        </section>

        <section className='testimonial'>
          <img
            src={require('../images/image-jennie.jpg')}
            alt='Avatar'
            className='testimonial__avatar'
          />
          <p className='testimonial__statement'>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h3 className='testimonial__name'>Jennie F.</h3>
          <p className='testimonial__title'>Business Owner</p>
        </section>
      </div>
    </section>
  );
}
