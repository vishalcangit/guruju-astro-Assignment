import React from "react";
import Details from "./Details/Details";
import FrequentlyAskedQues from "./FrequentlyAskedQues/FrequentlyAskedQues";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <Details />
      <FrequentlyAskedQues />
    </div>
  );
};

export default Profile;
