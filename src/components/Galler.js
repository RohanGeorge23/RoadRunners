import Carousel from 'react-bootstrap/Carousel';
import one from './assets/assetmore/37.jpeg'
import two from './assets/assetmore/2.jpg'
import three from './assets/assetmore/38.jpeg'
import four from './assets/assetmore/4.jpg'
import five from './assets/assetmore/5.jpg'
import six from './assets/assetmore/6.jpg'
import seven from './assets/assetmore/36.jpeg'
import eight from './assets/assetmore/8.jpg'
import nine from './assets/assetmore/9.jpeg'
import ten from './assets/assetmore/10.jpeg'
import eleven from './assets/assetmore/17.jpeg'
import twelf from './assets/assetmore/21.jpeg'
import thirteen from './assets/assetmore/19.jpeg'
import forteen from './assets/assetmore/18.jpeg'


function Galler() {
  return (
    <div className='homm'>

    <Carousel fade>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={one}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={two}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={three}
          alt="Third slide"
        />

      </Carousel.Item>


      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={four}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={five}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={six}
          alt="Third slide"
        />

      </Carousel.Item>


      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={seven}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h-100"
          src={eight}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={nine}
          alt="Third slide"
        />

      </Carousel.Item>


      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={ten}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={eleven}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={twelf}
          alt="Third slide"
        />

      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={thirteen}
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={forteen}
          alt="Third slide"
        />

      </Carousel.Item>
      
    </Carousel>
    </div>

  );
}

export default Galler;