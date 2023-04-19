import Image from "next/image"
import styles from "./Project.module.css"
import { useMediaQuery } from "react-responsive"


export default function Project({ name, title, description, image, code, demo, stack })
{
  const isVSmallScreen = useMediaQuery({ query: "(max-width: 550px)" })

  return (
    <div className={styles["portfolio__project"]}>
      <div className={styles["portfolio__project--details"]}>
        <h3>{name}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Built with: {stack}</p>
        <div className={styles["portfolio__project--details--links"]}>
          <a href={code} target="_blank" rel="noopener noreferrer"><button>CODE</button></a>
          <a href={demo} target="_blank" rel="noopener noreferrer"><button>DEMO</button></a>
        </div>
      </div>
      <div className={styles["portfolio__project--image"]}>
        <div className={styles["nimg"]}><Image alt="project image" src={isVSmallScreen ? image[1] : image[0]} layout="fill" objectFit="cover"/></div>
      </div>
    </div>
  )
}