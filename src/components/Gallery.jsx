import '../styles/scss/Gallery.scss';

export default function Gallery() {
  return (
    <div className='gallery'>
      <img
        src={require('../images/mobile/image-gallery-milkbottles.jpg')}
        alt='Milk bottles'
        className='gallery__image  gallery__image--mobile'
      />
      <img
        src={require('../images/mobile/image-gallery-orange.jpg')}
        alt='Orange on a plate'
        className='gallery__image  gallery__image--mobile'
      />
      <img
        src={require('../images/mobile/image-gallery-cone.jpg')}
        alt='Ice cream cone'
        className='gallery__image  gallery__image--mobile'
      />
      <img
        src={require('../images/mobile/image-gallery-sugar-cubes.jpg')}
        alt='Sugar cubes'
        className='gallery__image  gallery__image--mobile'
      />

      <img
        src={require('../images/desktop/image-gallery-milkbottles.jpg')}
        alt='Milk bottles'
        className='gallery__image  gallery__image--desktop'
      />
      <img
        src={require('../images/desktop/image-gallery-orange.jpg')}
        alt='Orange on a plate'
        className='gallery__image  gallery__image--desktop'
      />
      <img
        src={require('../images/desktop/image-gallery-cone.jpg')}
        alt='Ice cream cone'
        className='gallery__image  gallery__image--desktop'
      />
      <img
        src={require('../images/desktop/image-gallery-sugar-cubes.jpg')}
        alt='Sugar cubes'
        className='gallery__image  gallery__image--desktop'
      />
    </div>
  );
}
