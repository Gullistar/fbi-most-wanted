import React from "react";
import "./Details.css";
import { DetailProps } from "./types";
import placeholderImage from "../../thief-icon.jpg";

const Details: React.FC<DetailProps> = ({ onClose, item }) => {
  return (
    <div className="detail-container" onClick={onClose}>
      <div className="details-content">
        <div className="close-button-container">
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close details"
            tabIndex={0}
          >
            X
          </button>
        </div>
        <h2>{item?.title}</h2>
        <div className="detail-image-container">
          {item?.images &&
            item.images.map((image, index) => (
              <img
                key={index}
                src={image.thumb ?? placeholderImage}
                alt={image.caption || "Wanted individual"}
              />
            ))}
        </div>
        <div className="description-content">
          <h3> Description</h3>
          <p>{item?.description}</p>
          <div className="description-item">
            <h4>Nationality:</h4>
            <p>{item?.nationality ?? "Unknown"}</p>
          </div>
          <div className="description-item">
            <h4>Reward:</h4>
            <p>{item?.reward_text ?? "No reward"}</p>
          </div>
          <div className="description-item">
            <h4>Sex:</h4>
            <p>{item?.sex ?? "Unknown"}</p>
          </div>
          <div className="description-item">
            <h4>Publication:</h4>
            <p>{item?.publication ?? "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
