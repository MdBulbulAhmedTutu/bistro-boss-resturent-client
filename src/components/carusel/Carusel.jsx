import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images1 from '../../assets/images/home/01.jpg'
import images2 from '../../assets/images/home/02.jpg'
import images3 from '../../assets/images/home/03.png'
import images4 from '../../assets/images/home/04.jpg'
import images5 from '../../assets/images/home/05.png'
import images6 from '../../assets/images/home/06.png'
const Carusel = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={images1} alt="" />
                </div>
                <div>
                    <img src={images2} alt="" />
                </div>
                <div>
                    <img src={images3} alt="" />
                </div>
                <div>
                    <img src={images4} alt="" />
                </div>
                <div>
                    <img src={images5} alt="" />
                </div>
                <div>
                    <img src={images6} alt="" />
                </div>
            </Carousel>
        </div>
    );
};

export default Carusel;