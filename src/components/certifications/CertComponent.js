import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

import { Certs } from "../../Data";

import "./CertComponent.css";

gsap.registerPlugin(Draggable);

const Card = ({ score, title, description, date }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-title">
          <h2>{score}</h2>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-date">{date}</div>
      </div>
    </div>
  );
};

const CertComponent = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    Draggable.create(cardRef.current, {
      type: "x",
    });
  }, []);

  return (
    <div id="cards" className="cards" ref={cardRef}>
      {Certs.map((cert, index) => {
        return (
          <Card
            key={index}
            title={cert.title}
            description={cert.description}
            image={cert.image}
            date={cert.date}
            score={cert.score}
          />
        );
      })}
    </div>
  );
};

export default CertComponent;

// SET THE BACKGROUND IMAGE HERE USING `STYLE`!!
