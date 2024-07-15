import React from "react";
import styles from "./SuperOverLeague.module.css";

const SuperOverLeague = () => {
  return (
    <div className={styles.mainContainer}>
      <section className={styles.superOverLeagueContainer}>
        <h1>Super Over League</h1>
        <div className={styles.iplTeamWrapper}>
          <figure>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
              alt="rec_img"
            />
          </figure>
          <figure>
            <img
              src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
              alt="csk_img"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default SuperOverLeague;
