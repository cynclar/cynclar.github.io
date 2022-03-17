import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Works } from "../../Data";
import { fadeRight, fadeUp, stagger } from "../../Animation";

import "./WorkComponent.css";

const WorkComponent = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("inView becomes true");
      animation.start("visible");
    }
  }, [inView, animation]);

  return (
    <div className="work-component" ref={ref}>
      {Works.map((work) => {
        return (
          <motion.div
            initial="hidden"
            animate={animation}
            className="work-container"
          >
            <motion.div variants={stagger} className="work-left">
              <motion.img
                variants={fadeRight}
                src={work.logo}
                style={{ width: "200px", height: "200px" }}
                alt={work.company}
              />
              <motion.h3 variants={fadeRight}>{work.company}</motion.h3>
              <motion.h2 variants={fadeRight}>{work.position}</motion.h2>
              <motion.hr variants={fadeRight} />
              <motion.p variants={fadeRight}>{work.location}</motion.p>
              <motion.p variants={fadeRight}>{work.date}</motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animation}
              className="work-right"
            >
              <motion.ul variants={stagger}>
                {work.description.map((desc) => {
                  return (
                    <motion.li variants={fadeUp} key={desc}>
                      {desc}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default WorkComponent;
