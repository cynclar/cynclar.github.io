import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Schools } from "../../Data";
import { fadeRight, fadeUp, stagger } from "../../Animation";

import "./EduComponent.css";

const EduComponent = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  return (
    <div className="edu-component" ref={ref}>
      {Schools.map((school) => {
        return (
          <motion.div initial="hidden" animate={animation} key={school.id}>
            <motion.div className="school-wrapper">
              <motion.div variants={stagger} className="school-left">
                <motion.h3 variants={fadeRight}>{school.name}</motion.h3>
                <motion.h5 variants={fadeRight}>{school.location}</motion.h5>
              </motion.div>

              <motion.div variants={stagger} className="school-right">
                <motion.h5 variants={fadeUp}>{school.date}</motion.h5>
                {school.description.map((desc) => {
                  return (
                    <motion.p variants={fadeUp} key={desc}>
                      {desc}
                    </motion.p>
                  );
                })}
              </motion.div>
            </motion.div>

            {school.id === "1" ? null : <hr className="line-divider" />}
          </motion.div>
        );
      })}
    </div>
  );
};

export default EduComponent;
