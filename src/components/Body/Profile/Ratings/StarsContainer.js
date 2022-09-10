import React from "react";
import people from "../../../../assets/people.png";
import star from "../../../../assets/star.png";
import styles from "./Ratings.module.css";

const StarsContainer = () => {
  return (
    <div className={styles.starContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.ratingAvg}>4.27</div>
        <div className={styles.ratingTotal}>
          <img src={people} />
          84,559 Total
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.fiveStar}>
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <div className={styles.barContainer}>
            <div className={styles.greyBar}></div>
            <div className={styles.purpleBarFive}></div>
          </div>
        </div>

        <div className={styles.fiveStar}>
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <div className={styles.barContainer}>
            <div className={styles.greyBar}></div>
            <div className={styles.purpleBarFour}></div>
          </div>
        </div>

        <div className={styles.fiveStar}>
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <div className={styles.barContainer}>
            <div className={styles.greyBar}></div>
            <div className={styles.purpleBarThree}></div>
          </div>
        </div>

        <div className={styles.fiveStar}>
          <img className={styles.star} src={star} />
          <img className={styles.star} src={star} />
          <div className={styles.barContainer}>
            <div className={styles.greyBar}></div>
            <div className={styles.purpleBarTwo}></div>
          </div>
        </div>

        <div className={styles.fiveStar}>
          <img className={styles.star} src={star} />
          <div></div>
          <div className={styles.barContainer}>
            <div className={styles.greyBar}></div>
            <div className={styles.purpleBarOne}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarsContainer;
