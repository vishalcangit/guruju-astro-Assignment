import React from "react";
import styles from "./Footer.module.css";

const Community = () => {
  return (
    <div className={styles.aboutContainer}>
      <h3 className={styles.footerTitle}>Community</h3>
      <span className={styles.footerLink}>How air bnb works</span>
      <span className={styles.footerLink}>Newsroom</span>
      <span className={styles.footerLink}>Airbnb 2021</span>
      <span className={styles.footerLink}>Investors</span>
      <span className={styles.footerLink}>Airbnb Plus</span>
      <span className={styles.footerLink}>Airbnb Luxe</span>
      <span className={styles.footerLink}>HotelTonight</span>
      <span className={styles.footerLink}>Airbnb for Work</span>
      <span className={styles.footerLink}>Made possible by Hosts</span>
      <span className={styles.footerLink}>Careers</span>
      <span className={styles.footerLink}>Founders Letter</span>
    </div>
  );
};

export default Community;
