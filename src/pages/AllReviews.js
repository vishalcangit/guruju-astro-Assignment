import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/leftSideArrow.svg";
import loading from "../assets/loading.svg";
import reviewer from "../assets/nav.png";
import star from "../assets/ratingStar.png";
import starW from "../assets/ratingStarWhite.png";
import styles from "../components/Body/Profile/Ratings/Ratings.module.css";
import StarsContainer from "../components/Body/Profile/Ratings/StarsContainer";

const AllReviews = () => {
  return (
    <div>
      <Link to="/">
        <div className={styles.reviewPageNavbar}>
          <img src={arrow} />
          <p>Back to Liu Lucy’s page</p>
          <h3 className={styles.crHidden}>Customer reviews</h3>
        </div>
      </Link>
      <div className={styles.reviewContainer}>
        <div className={styles.reviewPage}>
          <StarsContainer />
          <div className={styles.borderBtm}></div>
          <div className={styles.reviewOne}>
            <div className={styles.header}>
              <img src={reviewer} />
              <div className={styles.headerNameTime}>
                <span className={styles.headerName}>Mahilda M.</span>
                <span className={styles.headerTime}>Today</span>
              </div>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starW} />
                <img src={starW} />
              </div>
            </div>
            <div className={styles.review}>
              Might as well get right to it, then. At the risk of sounding like
              a contrarian, I did not love this film. Do I love elements of
              this? Yes. did not love this fi did not love this fi did not love
              this fi did not love this fi did not love this fi did not love
              this fi
            </div>
            <div className={styles.reviewLaterContainer}>
              <h3 className={styles.reviewLater}>Add Review 3 Days later</h3>
              <span className={styles.reviewLaterMsg}>
                The last time, I felt like this, in a cinema, I was six years
                old and I was watching Star Wars. I never imagined, I would ever
                find that feeling again in a cinema. That sense of being
                transported to another world.{" "}
              </span>
            </div>
            <div className={styles.astrologerMgsContainer}>
              <h4 className={styles.astrologerMgsContainerHeader}>
                Astrologer Reback
              </h4>
              <span className={styles.astrologerMgsContainerMsg}>
                Might as well get right to it, then. At the risk of sounding
                like a contrarian, I did not love this film. Do I love elements
                of this? Yes.{" "}
              </span>
            </div>
          </div>

          {/* second */}
          <div className={styles.reviewOne}>
            <div className={styles.header}>
              <img src={reviewer} />
              <div className={styles.headerNameTime}>
                <span className={styles.headerName}>Mahilda M.</span>
                <span className={styles.headerTime}>Yesterday</span>
              </div>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starW} />
                <img src={starW} />
              </div>
            </div>
            <div className={styles.review}>
              Might as well get right to it, then. At the risk of sounding like
              a contrarian, I did not love this film. Do I love elements of
              this? Yes. did not love this fi did not love this fi did not love
              this fi did not love this fi did not love this fi did not love
              this fi
            </div>
          </div>

          {/* third */}
          <div className={styles.reviewOne}>
            <div className={styles.header}>
              <img src={reviewer} />
              <div className={styles.headerNameTime}>
                <span className={styles.headerName}>Mahilda M.</span>
                <span className={styles.headerTime}>2 days ago</span>
              </div>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starW} />
                <img src={starW} />
              </div>
            </div>
            <div className={styles.review}>
              Might as well get right to it, then. At the risk of sounding like
              a contrarian, I did not love this film. Do I love elements of
              this? Yes. did not love this fi did not love this fi did not love
              this fi did not love this fi did not love this fi did not love
              this fi
            </div>
          </div>
          {/* fourth */}
          <div className={styles.reviewOne}>
            <div className={styles.header}>
              <img src={reviewer} />
              <div className={styles.headerNameTime}>
                <span className={styles.headerName}>Mahilda M.</span>
                <span className={styles.headerTime}>2 days ago</span>
              </div>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starW} />
                <img src={starW} />
              </div>
            </div>
            <div className={styles.review}>
              Might as well get right to it, then. At the risk of sounding like
              a contrarian, I did not love this film. Do I love elements of
              this? Yes. did not love this fi did not love this fi did not love
              this fi did not love this fi did not love this fi did not love
              this fi
            </div>
          </div>
          {/* fifth */}
          <div className={styles.reviewOne}>
            <div className={styles.header}>
              <img src={reviewer} />
              <div className={styles.headerNameTime}>
                <span className={styles.headerName}>Mahilda M.</span>
                <span className={styles.headerTime}>15 days ago</span>
              </div>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starW} />
                <img src={starW} />
              </div>
            </div>
            <div className={styles.review}>
              Might as well get right to it, then. At the risk of sounding like
              a contrarian, I did not love this film. Do I love elements of
              this? Yes. did not love this fi did not love this fi did not love
              this fi did not love this fi did not love this fi did not love
              this fi
            </div>
          </div>
          {/* sixth */}
          <div className={styles.reviewOne}>
            <div className={styles.header}>
              <img src={reviewer} />
              <div className={styles.headerNameTime}>
                <span className={styles.headerName}>Mahilda M.</span>
                <span className={styles.headerTime}>16 days ago</span>
              </div>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={starW} />
                <img src={starW} />
              </div>
            </div>
            <div className={styles.review}>
              Might as well get right to it, then. At the risk of sounding like
              a contrarian, I did not love this film. Do I love elements of
              this? Yes. did not love this fi did not love this fi did not love
              this fi did not love this fi did not love this fi did not love
              this fi
            </div>
          </div>
        </div>
        <img className={styles.loading} src={loading} />
      </div>
    </div>
  );
};

export default AllReviews;
