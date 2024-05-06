import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./ratingStyle";

const Rate = () => {
    const [rate, setRate] = useState(0);
    const [hover, setHover] = useState(null);
    const [error, setError] = useState(false); // State to track error

    const handleStarClick = (givenRating) => {
        setRate(givenRating);
        setError(false); // Reset error when a star is clicked
        alert(`Are you sure you want to give ${givenRating} stars?`);
    };

    const handleStarHover = (givenRating) => {
        setHover(givenRating);
    };

    const handleSubmit = () => {
        if (rate === 0) {
            setError(true); // Set error if no star is selected
            return;
        }
        // Submit rating logic can be added here
    };

    return (
        <Container>
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label key={index} htmlFor={`star-${givenRating}`}>
                        <Rating>
                            <FaStar
                                color={
                                    givenRating <= (hover || rate)
                                        ? "#ffc100"
                                        : "rgb(192,192,192)"
                                }
                            />
                            <Radio
                                id={`star-${givenRating}`}
                                type="radio"
                                value={givenRating}
                                onClick={() => handleStarClick(givenRating)}
                                onMouseEnter={() => handleStarHover(givenRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </Rating>
                    </label>
                );
            })}
            {error && <div style={{ color: 'red' }}>Please select a star to rate.</div>} {/* Error message */}
            <button onClick={handleSubmit}>Submit</button> {/* Button to submit rating */}
        </Container>
    );
};


export default Rate;