import React from 'react';
import ComponentNavbar from '../../components/Navbar/ComponentNavbar';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Home.module.css';
import imgGolden from '../../assets/img/golden.png'
import ComponentServices from '../../components/CardServicios/ComponentServices';
import SliderTestimonial from '../../components/SliderTestimonials/SliderTestimonial';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {

  return (
    <div>
      <ComponentNavbar />      
      <Container className={`d-flex align-items-center justify-content-center p-0`} >
        <Row className={`${styles.bg_wave} w-100`} >
          <Col md={6} className={`align-items-center justify-content-center position-absolute top-50 start-5 translate-middle-y m-5`} >
            <h1 className={`text-start`} >We Get Pet Care!</h1>
            <h5 className={`${styles.span_personalized_home}`} >
              For over 17 Years, Fetch! Pet Care has been a trusted <br /> partner in keeping pets healthy and happy!
            </h5>        
          </Col>

          <Col md={6} className={`d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y`} >
            <div className={`${styles.circle_yellow}`} >
              <div className={`${styles.circulo2}`} >
                <img src={imgGolden} alt="" className={`${styles.img_golden}`}/>
              </div>
            </div>
          </Col>
        </Row>   
      </Container>
      <ComponentServices/>
      <SliderTestimonial/>
      {/* <HowItWorks/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home;