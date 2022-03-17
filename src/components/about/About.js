import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

import "./About.css";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: -100,
      });
    }
  }, [inView, animation]);

  return (
    <div className="about-sect" id="about">
      <motion.span animate={animation} ref={ref}>
        Hi! I am Cynthia Clarissa, a hard-working and organized penultimate
        student from Universitas Prasetiya Mulya majoring in Business
        Mathematics and concentrating in Actuarial Mathematics. Experienced in
        working with others through involvement in various organizations,
        volunteering programs, and internships. I always seek opportunities in
        financial and actuarial sectors to further develop analytical and
        critical thinking skills whilst establishing new relationships and
        gaining experiences through involvement in decision-making roles.
      </motion.span>
    </div>
  );
};

export default About;
