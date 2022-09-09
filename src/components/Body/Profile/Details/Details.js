import React from "react";
import profilePic from "../../../../assets/Ellipse.png";
import audio from "../../../../assets/graph.png";
import lang from "../../../../assets/language.png";
import leftArrow from "../../../../assets/leftArrow.png";
import pic1 from "../../../../assets/photos1.png";
import pic2 from "../../../../assets/photos2.png";
import rightArrow from "../../../../assets/rightArrow.png";
import skill from "../../../../assets/vedic.png";
import styles from "./Details.module.css";

const Details = () => {
  return (
    <div className={styles.profileDetailscontainer}>
      <div className={styles.pic}>
        <img src={profilePic} />
      </div>
      <div className={styles.info}>
        <div className={styles.lineOne}>
          <div className={styles.name}>Liu Lucy</div>
          <div className={styles.audio}>
            <img src={audio} />
            <p>37'</p>
          </div>
          <div className={styles.followBtn}>Follow</div>
        </div>

        <div className={styles.lineTwo}>
          <div className={styles.followers}>
            Followers <strong>123</strong>
          </div>
          <div className={styles.served}>
            Served <strong>36k</strong>
          </div>
          <div className={styles.exp}>
            Exp(years) <strong>15</strong>
          </div>
        </div>
        {/* languages */}
        <div className={styles.lineLang}>
          <img src={lang} />
          <p>English, Hindi, Tamil</p>
        </div>
        {/* skills */}
        <div className={styles.lineSkill}>
          <img src={skill} />
          <p> &nbsp;Vedic, Tarot, Vastu, Face Reading</p>
        </div>
        {/* introduction */}
        <div className={styles.intro}>
          <div className={styles.personalIntro}>
            <strong>What is a personal introduction？</strong>
          </div>
          <div className={styles.introAns}>
            I was a really nice and professional teacher! It was only a
            shorttime, but I learned so many new things already. She prepared
            acustomized lesson plan for me as well based on what we talked about
            in our initial chat. She teaches really well accompanied with nice
            learning materials.
          </div>
          <div className={styles.picsContainer}>
            <span className={styles.leftArrow}>
              <img src={leftArrow} />
            </span>
            <img className={styles.imgs} src={pic1} />
            <img className={styles.imgs} src={pic2} />
            <img className={styles.imgs} src={pic1} />
            <img className={styles.imgs} src={pic2} />
            <img className={styles.imgs} src={pic1} />
            <img className={styles.imgs} src={pic2} />
            <img className={styles.imgs} src={pic2} />
            <span className={styles.rightArrow}>
              <img src={rightArrow} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
