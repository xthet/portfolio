import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Footer.module.css"

export default function Footer()
{
  return (
    <div className={styles["portfolio__footer"]}>
      <div className={styles["portfolio__footer--details"]}>
        <h2>IFEDAPO | ODERINDE</h2>
        <div className={styles["portfolio__footer--details-socials"]}>
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_SOCIAL} target="_blank" rel="noopener noreferrer">
            <div className={styles["portfolio__footer--details--socials--social_box"]}>
              <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className={styles["social_icon"]}/>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_GITHUB_SOCIAL} target="_blank" rel="noopener noreferrer">
            <div className={styles["portfolio__footer--details--socials--social_box"]}>
              <FontAwesomeIcon icon="fa-brands fa-github" className={styles["social_icon"]}/>
            </div>
          </a>
          <a href={process.env.NEXT_PUBLIC_TWITTER_SOCIAL} target="_blank" rel="noopener noreferrer">
            <div className={styles["portfolio__footer--details--socials--social_box"]}>
              <FontAwesomeIcon icon="fa-brands fa-twitter" className={styles["social_icon"]}/>
            </div>
          </a>
        </div>
      </div>
      <div className={styles["portfolio__footer--copyright"]}>
        <p>© 2022 IFEDAPO ODERINDE</p>
      </div>
    </div>
  )
}