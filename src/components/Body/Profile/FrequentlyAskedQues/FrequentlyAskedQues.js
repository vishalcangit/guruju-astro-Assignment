import React, { useState } from "react";
import down from "../../../../assets/downarrow.png";
import up from "../../../../assets/uparrow.png";
import styles from "./FrequentlyAskedQues.module.css";

const FrequentlyAskedQues = () => {
  const [showDropdown1, setShowDropdown1] = useState("true");
  const [showDropdown2, setShowDropdown2] = useState("false");
  const [showDropdown3, setShowDropdown3] = useState("false");
  const [showDropdown4, setShowDropdown4] = useState("false");
  return (
    <div className={styles.faqContainer}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.listsContainer}>
        {/* list1 */}
        <div className={styles.list}>
          <div
            className={styles.question}
            onClick={() => setShowDropdown1(!showDropdown1)}
          >
            <span>
              How consultation from astrologer over the phone will be beneficial
              for me?
            </span>
            {showDropdown1 ? <img src={up} /> : <img src={down} />}
          </div>
          {showDropdown1 && (
            <p className={styles.ans}>
              When you just don’t know who should you approach for guidance when
              problems crop up, then consultation from astrologers over the
              phone helps you out. You can receive instant advice on your
              specific queries from anywhere in the world. It will also save
              your time and cost which you usually spend by visiting an
              astrologer. You will get a response you can feel confident about
              and also peace of mind.
            </p>
          )}
        </div>

        {/* list 2 */}
        <div className={styles.list}>
          <div
            className={styles.question}
            onClick={() => setShowDropdown2(!showDropdown2)}
          >
            <span>Why should you choose Guruji?</span>
            {showDropdown2 ? <img src={down} /> : <img src={up} />}
          </div>
          {!showDropdown2 && (
            <p className={styles.ans}>
              When you just don’t know who should you approach for guidance when
              problems crop up, then consultation from astrologers over the
              phone helps you out. You can receive instant advice on your
              specific queries from anywhere in the world. It will also save
              your time and cost which you usually spend by visiting an
              astrologer. You will get a response you can feel confident about
              and also peace of mind.
            </p>
          )}
        </div>
        {/* list3 */}
        <div className={styles.list}>
          <div
            className={styles.question}
            onClick={() => setShowDropdown3(!showDropdown3)}
          >
            <span>Why is your service so expensive?</span>
            {showDropdown3 ? <img src={down} /> : <img src={up} />}
          </div>
          {!showDropdown3 && (
            <p className={styles.ans}>
              When you just don’t know who should you approach for guidance when
              problems crop up, then consultation from astrologers over the
              phone helps you out. You can receive instant advice on your
              specific queries from anywhere in the world. It will also save
              your time and cost which you usually spend by visiting an
              astrologer. You will get a response you can feel confident about
              and also peace of mind.
            </p>
          )}
        </div>

        {/* list 3 */}
        <div className={styles.list}>
          <div
            className={styles.question}
            onClick={() => setShowDropdown4(!showDropdown4)}
          >
            <span>Will my personal information be kept confidential?</span>
            {showDropdown4 ? <img src={down} /> : <img src={up} />}
          </div>
          {!showDropdown4 && (
            <p className={styles.ans}>
              When you just don’t know who should you approach for guidance when
              problems crop up, then consultation from astrologers over the
              phone helps you out. You can receive instant advice on your
              specific queries from anywhere in the world. It will also save
              your time and cost which you usually spend by visiting an
              astrologer. You will get a response you can feel confident about
              and also peace of mind.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQues;
