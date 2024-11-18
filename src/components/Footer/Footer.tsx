import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={2} className={styles.column}>
            <h5 className={styles.heading}>Company</h5>
            <ul className={styles.list}>
              <li>
                <a href="#about" className={styles.link}>About Us</a>
              </li>
              <li>
                <a href="#careers" className={styles.link}>Careers</a>
              </li>
              <li>
                <a href="#blog" className={styles.link}>Blog</a>
              </li>
            </ul>
          </Col>
          <Col md={2} className={styles.column}>
            <h5 className={styles.heading}>Support</h5>
            <ul className={styles.list}>
              <li>
                <a href="#help" className={styles.link}>Help Center</a>
              </li>
              <li>
                <a href="#contact" className={styles.link}>Contact Us</a>
              </li>
              <li>
                <a href="#faq" className={styles.link}>FAQ</a>
              </li>
            </ul>
          </Col>
          <Col md={2} className={styles.column}>
            <h5 className={styles.heading}>Services</h5>
            <ul className={styles.list}>
              <li>
                <a href="#pricing" className={styles.link}>Pricing</a>
              </li>
              <li>
                <a href="#features" className={styles.link}>Features</a>
              </li>
              <li>
                <a href="#integrations" className={styles.link}>Integrations</a>
              </li>
            </ul>
          </Col>
          <Col md={2} className={styles.column}>
            <h5 className={styles.heading}>Legal</h5>
            <ul className={styles.list}>
              <li>
                <a href="#terms" className={styles.link}>Terms of Service</a>
              </li>
              <li>
                <a href="#privacy" className={styles.link}>Privacy Policy</a>
              </li>
              <li>
                <a href="#cookies" className={styles.link}>Cookie Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className={styles.column}>
            <h5 className={styles.heading}>Subscribe</h5>
            <p className={styles.text}>Get the latest updates and offers.</p>
            <form>
              <div className="d-flex">
                <input
                  type="email"
                  className={`${styles.input} form-control me-2`}
                  placeholder="Your email"
                  aria-label="Email"
                />
                <button type="submit" className={`btn btn-primary ${styles.button}`}>
                  Subscribe
                </button>
              </div>
            </form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className={styles.textCenter}>
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
