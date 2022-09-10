import React from "react";
import Details from "./Details/Details";
import FrequentlyAskedQues from "./FrequentlyAskedQues/FrequentlyAskedQues";
import styles from "./Profile.module.css";
import Ratings from "./Ratings/Ratings";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <Details />
      <Ratings />
      <FrequentlyAskedQues />
    </div>
  );
};

export default Profile;
