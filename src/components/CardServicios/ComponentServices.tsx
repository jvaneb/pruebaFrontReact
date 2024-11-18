import React from "react";
import styles from './Servicios.module.css';
import { Container, Row } from "react-bootstrap";
import imgDog from '../../assets/svg/dog.svg';
import imgCat from '../../assets/svg/cat.svg';
import imghouse from '../../assets/svg/house.svg';
import imgOtherServices from '../../assets/svg/other-services.svg';

const ComponentServices: React.FC = () => {
  return (
    <div className={`${styles.bg_blue}`}>
      <Container className={`${styles.services_section} d-flex align-items-center justify-content-center p-0`} >
        <Row className={`align-items-center p-5`} >
            <div className={`col-lg-6 col-md-12 text-center text-lg-start ${styles.services_info}`} >
              <h2 className={`${styles.text_danger} pt-4 pb-2`} >Our Services</h2>
              <p className={`${styles.text_muted_personalized} text-muted pb-2`} >
                National Brand With a Local Feel. <br />
                Experience the Fetch! Difference
              </p>
              <p className={`${styles.text_danger}`} >
                <strong>Enter Your Location and Fetch Our Services</strong>
              </p>
              <div className={`${styles.zip_code_input} text-center`} >
                <input
                  type="text"                    
                  className={`${styles.form_control} form-control`}
                  placeholder="Zip Code"
                  aria-label="Zip Code"
                />
                <input className={`${styles.btn}`} value={'→'}  type="button" />
              </div>
            </div>

            <div className={`col-lg-6 col-md-12 d-flex flex-wrap justify-content-center ${styles.services_grid}`} >
              {/* Card 1 */}
              <div className={`${styles.service_card}`} >
                <div className={`${styles.icon_placeholder}`} ><img src={imgDog} width={50} height={50} /></div>
                <p className={`${styles.text_cards_services}`}>Dog Walking</p>
              </div>

              {/* Card 2 */}
              <div className={`${styles.service_card}`} >
                <div className={`${styles.icon_placeholder}`} ><img src={imgCat} width={50} height={50} /></div>
                <p className={`${styles.text_cards_services}`}>Pet Sitting</p>
              </div>

              {/* Card 3 */}
              <div className={`${styles.service_card}`} >
                <div className={`${styles.icon_placeholder}`} ><img src={imgCat} width={50} height={50} /></div>
                <p className={`${styles.text_cards_services}`}>Overnight Care</p>
              </div>

              {/* Card 4 */}
              <div className={`${styles.service_card}`} >
                <div className={`${styles.icon_placeholder}`} ><img src={imgOtherServices} width={50} height={50} /></div>
                <p className={`${styles.text_cards_services}`}>Other Services</p>
              </div>
            </div>
        </Row>
      </Container>
    </div>
  );
};

export default ComponentServices;
