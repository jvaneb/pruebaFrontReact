import styles from './HowItWorks.module.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const HowItWorks = () => {
    return (
        <Container className={`${styles.container} d-flex align-items-center justify-content-center p-0`}>
          <Row className={`${styles.cards} align-items-center p-5`}>
                <div className={`col-lg-6 col-md-12 text-center text-lg-start`} >
                    <Col md={6} className={`mb-4 position-absolute top-0 start-0`}>
                        <Card className={`${styles.cards} position-absolute top-0 start-0`}>
                        <Card.Body className={`text-center`}>
                            <i className={`fas fa-calendar-check fa-2x mb-3`}></i>
                            <Card.Title>Reserve</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className={`mb-4`}>
                        <Card className={`${styles.cards} position-absolute top-50 start-30 translate-middle`}>
                        <Card.Body className={`text-center`}>
                            <i className={`fas fa-users fa-2x mb-3`}></i>
                            <Card.Title>Match</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className={`mb-4`}>
                        <Card className={`${styles.cards} position-absolute bottom-0 start-0`}>
                        <Card.Body className={`text-center`}>
                            <i className={`fas fa-dog fa-2x mb-3`}></i>
                            <Card.Title>Relax</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                </div>    

                <div className={`col-lg-6 col-md-12 text-center text-lg-start`} >
                    <h2 className={`${styles.text_how} text-center`}>How it Works</h2>
                    <p className={`${styles.text_p} text-center`}>
                        Because finding a good pet sitter shouldn't be a hassle. With Fetch! it's as easy as...
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
            </Row>
        </Container>
    );
};

export default HowItWorks;