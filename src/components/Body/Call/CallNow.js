import React from "react";
import bow from "../../../assets/bow.png";
import call from "../../../assets/call.png";
import star from "../../../assets/icon-star-active.png";
import styles from "./CallNow.module.css";

const CallNow = () => {
  return (
    <div className={styles.callnow}>
      <div className={styles.callnowContainer}>
        <div className={styles.priceContainer}>
          <span>
            <h1 className={styles.flex}>₹5</h1>
            <strong>/min </strong>{" "}
          </span>

          <span className={styles.strikeoff}>₹123/min</span>
        </div>
        <div className={styles.offerContainer}>
          <img src={bow} />
          <div>
            <span>
              <highlight>New user specail offer </highlight>- Trial for Max 6
              mins
            </span>
          </div>
        </div>
        <div className={styles.starContainer}>
          <img src={star} />
          <div>
            <diff>4.9 |</diff>
            <span> 123 reviews</span>
          </div>
        </div>
        <button className={styles.callNowBtn}>
          <img src={call} />
          Call Now
        </button>
      </div>
    </div>
  );
};

export default CallNow;
