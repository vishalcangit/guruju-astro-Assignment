import React from "react";
import styles from "./Ratings.module.css";
import StarsContainer from "./StarsContainer";

const Ratings = () => {
  return (
    <div className={styles.ratingsContaieer}>
      <StarsContainer />
    </div>
  );
};

export default Ratings;
