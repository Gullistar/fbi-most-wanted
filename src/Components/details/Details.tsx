import React from "react";
import "./Details.css";
import { DetailProps } from "./types";

const Details: React.FC<DetailProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="details-container">
      <h2>{item.title}</h2>
      <div className="detail-image-container">
        {item.images.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={image.caption || "Wanted individual"}
          />
        ))}
      </div>

      <div>{item.description}</div>
      <div>Aliases: {item.ailiases}</div>
      <div>Nationality: {item.nationality}</div>
      <div>Reward: {item.reward_text}</div>

      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default Details;
