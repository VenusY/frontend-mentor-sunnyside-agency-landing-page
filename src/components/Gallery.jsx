export default function Gallery() {
  return (
    <div className='gallery'>
      <img
        src={require('../images/mobile/image-gallery-milkbottles')}
        alt='Milk bottles'
        className='gallery__image  gallery__image--mobile'
      />
      <img
        src={require('../images/mobile/image-gallery-orange')}
        alt='Orange on a plate'
        className='gallery__image  gallery__image--mobile'
      />
      <img
        src={require('../images/mobile/image-gallery-cone')}
        alt='Ice cream cone'
        className='gallery__image  gallery__image--mobile'
      />
      <img
        src={require('../images/mobile/image-gallery-sugar-cubes')}
        alt='Sugar cubes'
        className='gallery__image  gallery__image--mobile'
      />

      <img
        src={require('../images/desktop/image-gallery-milkbottles')}
        alt='Milk bottles'
        className='gallery__image  gallery__image--desktop'
      />
      <img
        src={require('../images/desktop/image-gallery-orange')}
        alt='Orange on a plate'
        className='gallery__image  gallery__image--desktop'
      />
      <img
        src={require('../images/desktop/image-gallery-cone')}
        alt='Ice cream cone'
        className='gallery__image  gallery__image--desktop'
      />
      <img
        src={require('../images/desktop/image-gallery-sugar-cubes')}
        alt='Sugar cubes'
        className='gallery__image  gallery__image--desktop'
      />
    </div>
  );
}
