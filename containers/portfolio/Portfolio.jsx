import { Project } from "../../components/exportComps"
import apio from "../../assets/images/apio-screenshot.png"
import styles from "./Portfolio.module.css"

export default function Portfolio()
{
  return (
    <div className={styles["portfolio__portfolio--background"]}>
      {/* <div className={styles["portfolio__portfolio--background_cube"]}></div> */}
      {/* <div className={styles["portfolio__portfolio--background_cube"]}></div> */}

      <div className={`section__padding ${styles["portfolio__portfolio"]}`} id="portfolio">
        <div className={styles["portfolio__projects--heading"]}>
          <h1>PORTFOLIO</h1>
          <h2>VIEW MY WORKS</h2>
          <p>Check out the Live Demos as well as the code!!</p>
        </div>
        <div className={styles["portfolio__projects_container"]}>
          <Project
            title={"NFT MARKETPLACE"}
            name={"apio"}
            description={"A fully decentralized NFT Marketplace."}
            stack={"Ethers.js, Hardhat, Solidity, Next.js, NodeJS, Javascript, TheGraph"}
            image={apio}
            code={"https://github.com/xapski2671/apio-nft-marketplace"}
            demo={"https://apio-nft-marketplace.vercel.app/"}
          />
        </div>
      </div>
    </div>
  )
}