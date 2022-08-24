import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Image from "next/image"
import aboutImg from "../../assets/images/about_img.svg"
import styles from "./About.module.css"

export default function About()
{
  return (
    <div className={styles["portfolio__about--background"]}>
      <div className={styles["portfolio__about--background_cube"]}></div>
      <div className={styles["portfolio__about--background_cube"]}></div>

      <div className={`section__padding ${styles["portfolio__about"]}`} id="about">
        <div className={styles["portfolio__about--heading"]}>
          <h1>ABOUT ME</h1>
          <div className={styles["portfolio__about--heading--subheading"]}>
            <p>IMAGINE</p>
            <p>CREATE</p>
          </div>
        </div>
        <div className={styles["portfolio__about--body"]}>
          <div className={styles["portfolio__about--body--image_container"]}>
            <div className={styles["portfolio__about--body--image"]}>
              {/* <div className={styles["nimg"]}><Image alt="about" src={aboutImg}/></div> */}
              <FontAwesomeIcon icon="fa-solid fa-cubes" className={styles["fa-cube"]}/>
            </div>
          </div>
      
          <div className={styles["portfolio__about--body--details_container"]}>
            <div className={styles["portfolio__about--body--details"]}>
              <div className={styles["portfolio__about--body--details--about_me"]}>
                <p>
                  {
                    "I am a Blockchain Software Developer proficient in back-end and front-end frameworks " +
                    "necessary for creating decentralized applications, " +
                    "who brings hardwork, resourcefulness and great communication skills. " +
                    "My passion lies in solving real world problems with technology."
                  }
                </p>
              </div>
              <div className={styles["portfolio__about--body--details--socials"]}>
                <a href={process.env.NEXT_PUBLIC_LINKEDIN_SOCIAL} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" className={styles["fa-icon"]}/>
                </a>
                <a href={process.env.NEXT_PUBLIC_GITHUB_SOCIAL} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-square-github" className={styles["fa-icon"]}/>
                </a>
                <a href={process.env.NEXT_PUBLIC_TWITTER_SOCIAL} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-square-twitter" className={styles["fa-icon"]}/>
                </a>
              </div>
              <Link href={process.env.NEXT_PUBLIC_RESUME_LINK} target="_blank" rel="noopener noreferrer">
                <div className={styles["portfolio__about--body--details--resume"]}>
                  <FontAwesomeIcon icon="fa-solid fa-file-invoice" className={styles["fa-icon"]}/>
                  <p>RESUME</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}