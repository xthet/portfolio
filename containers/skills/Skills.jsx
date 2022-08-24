import styles from "./Skills.module.css"
import { Skill } from "../../components/exportComps"

export default function Skills()
{
  return (
    <div className={`section__padding ${styles["portfolio__skills"]}`} id="skills">
      <div className={styles["portfolio__skills--heading"]}>
        <h2>MY SKILLS</h2>
        <h3>PROGRAMMING SKILLS</h3>
      </div>
      <div className={styles["portfolio__skills_container"]}>
        <Skill name={"HTML"} level="95"/>
        <Skill name={"CSS"} level="85"/>
        <Skill name={"React.js"} level="88"/>
        <Skill name={"Solidity"} level="92"/>
        <Skill name={"Ethers.js"} level="93"/>
        <Skill name={"Hardhat"} level="85"/>
        <Skill name={"NodeJS"} level="90"/>
      </div>
    </div>
  )
}