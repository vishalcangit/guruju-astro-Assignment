import React from "react";
import styles from "./Ratings.module.css";
import Review from "./Review";
import StarsContainer from "./StarsContainer";

const Ratings = () => {
  return (
    <div className={styles.ratingsContaieer}>
      <StarsContainer />
      <Review />
    </div>
  );
};

export default Ratings;
