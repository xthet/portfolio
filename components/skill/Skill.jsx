import styles from "./Skill.module.css"

export default function Skill({ name, level })
{
  return (
    <div className={styles["portfolio__skill"]}>
      <div className={styles["portfolio__skill--name"]}>
        <p>{name}</p>
        <p>{level}%</p>
      </div>
      <div className={styles["portfolio__skill--level"]}>
        <div style={{ width: `${level}%` }}></div>
      </div>
    </div>
  )
}