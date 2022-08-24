import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import styles from "./Header.module.css"

export default function Header()
{
  const [letsTalk, setLetsTalk] = useState(false)

  return (
    <div className={styles["portfolio__header"]} id="home">
      <div className={styles["portfolio__header--background_cube"]}></div>
      <div className={styles["portfolio__header--background_cube"]}></div>
      <div className={`section__padding ${styles["portfolio__header--hero"]}`}>
        <h2>{"Hello, I'm"}</h2>
        <div className={styles["portfolio__header--hero--name"]}>
          <h1>IFEDAPO</h1>
          <h1>ODERINDE</h1>
        </div>
        <h3>BLOCKCHAIN DEVELOPER</h3>
        <Link href="/#contact">
          <div 
            className={styles["portfolio__header--hero--lets_talk"]} 
            onMouseEnter={()=>{setLetsTalk(true)}} onMouseLeave={()=>{setLetsTalk(false)}}
          >
            <p>{"LET'S TALK"}</p>
            <FontAwesomeIcon icon="fa-solid fa-arrow-right-long" className={styles["long-arrow"]}/>
          </div>
        </Link>
        <div className={styles["portfolio__header--hero--social_container"]}>
          <div className={styles["portfolio__header--hero--social"]}>
            <div className={styles["portfolio__header--hero--social--case_rule"]}></div>
            <div className={styles["portfolio__header--hero--social--icons"]}>
              <a href={process.env.NEXT_PUBLIC_LINKEDIN_SOCIAL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" className={styles["social-icon"]}/>
              </a>
              <a href={process.env.NEXT_PUBLIC_GITHUB_SOCIAL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-square-github" className={styles["social-icon"]}/>
              </a>
              <a href={process.env.NEXT_PUBLIC_TWITTER_SOCIAL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="fa-brands fa-square-twitter" className={styles["social-icon"]}/>
              </a>
            </div>
            <div className={styles["portfolio__header--hero--social--case_rule"]}></div>
          </div>
        </div>
      </div>
    </div>
  )
}