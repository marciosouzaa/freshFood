import SlickSlider from 'react-slick';
import { Container } from './styles';

export function Slider({ children }) {
  const settings = {
    arrows: false,
    slidesToShow: 3.4,
    infinite: false,
    speed: 500,

    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          
          slidesToShow: 3.4,
        },
      },
      
      {
        breakpoint: 700,
        settings: {
          
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          
          slidesToShow: 1.1,
          
        },
      },
    ],
  };
  return (
    <Container>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Container>
  );
}
