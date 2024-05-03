import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((_, i) => {
                const stars = i + 1;

                return (
                    <label key={i}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={stars}
                            onClick={() => setRating(stars)}
                            onMouseEnter={() => setHover(stars)}
                            onMouseLeave={() => setHover(null)}
                        />
                        <FaStar
                            className="star"
                            color={stars <= (hover || rating) ? "ffc100": "#e4e5e9"} 
                            size={40}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default Rating;
