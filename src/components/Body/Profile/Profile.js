import React from "react";
import Details from "./Details/Details";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <Details />
    </div>
  );
};

export default Profile;
