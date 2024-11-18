import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./SliderTestimonial.module.css";
import img from '../../assets/img/testimonio.png'

interface Testimonial {
  name: string;
  image: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kenned Dsouza",
    image: img,
    feedback:
    " I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
  {
    name: "Sarah Johnson",
    image: img,
    feedback:
    " I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
  {
    name: "Michael Brown",
    image: img,
    feedback:
    " I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
];

const SliderTestimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <Container className={`${styles.sliderContainer} text-center`}>
      <h2 className={`${styles.title} mb-5`}>
        Here's what pet owners have to <br /> say about Fetch! Pet Care...
      </h2>
      <div className={`${styles.sliderWrapper}`}>
        {testimonials.map((testimonial, index) => {
          const position =
            index === currentIndex
              ? "active"
              : index === (currentIndex - 1 + testimonials.length) % testimonials.length
              ? "prev"
              : "next";

          return (
            <div key={index} className={`${styles.card} ${styles[position]}`}>
              <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={`${styles.avatar} p-1`}
                />             
              <h5>{testimonial.name}</h5>
              <p className={`${styles.feedback} p-1`}>{testimonial.feedback}</p>
            </div>
          );
        })}
        <Button
          variant="light"
          onClick={handlePrev}
          className={`${styles.arrow} ${styles.prevArrow}`}
        >
          &#8406;
        </Button>
        <Button
          variant="light"
          onClick={handleNext}
          className={`${styles.arrow} ${styles.nextArrow}`}
        >
          &#8407;
        </Button>
      </div>
    </Container>
  );
};

export default SliderTestimonial;
