import { useState } from "react";
import './StarRating.css'
const StarRating = ({ initialRating = 0, editable = false, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (newRating) => {
    if (editable) {
      setRating(newRating);
      if (onChange) {
        onChange(newRating);
      }
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`star-rating__star ${
            value <= rating ? "star-rating__star--active" : ""
          } ${editable ? "star-rating__star--editable" : ""}`}
          onClick={() => handleStarClick(value)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
