import { Project } from "../../components/exportComps"
import styles from "./Portfolio.module.css"

export default function Portfolio() {
	return (
		<div className={styles["portfolio__portfolio--background"]}>
			{/* <div className={styles["portfolio__portfolio--background_cube"]}></div> */}
			{/* <div className={styles["portfolio__portfolio--background_cube"]}></div> */}

			<div
				className={`section__padding ${styles["portfolio__portfolio"]}`}
				id="portfolio"
			>
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
						stack={
							"Ethers.js, Hardhat, Solidity, Next.js, NodeJS, Javascript, TheGraph"
						}
						image={[
							"/projectImages/prj_apio_lg.png",
							"/projectImages/prj_apio_sm.png",
						]}
						code={"https://github.com/xapski2671/apio-nft-marketplace"}
						demo={"https://apio-nft-marketplace.vercel.app/"}
					/>
					<Project
						title={"ERC20 DEX AGGREGATOR"}
						name={"muudiswap"}
						description={"An ERC20 DEX layered on UNISWAP AutoRouter API"}
						stack={"Ethers.js, Next.js, TypeScript, SASS, UNISWAP"}
						image={[
							"/projectImages/prj_muudi_lg.png",
							"/projectImages/prj_muudi_sm.png",
						]}
						code={"https://github.com/xapski2671/nx-muudi-swap"}
						demo={"https://muudiswap.vercel.app/"}
					/>
					<Project
						title={"CROWDFUNDING PLATFORM"}
						name={"manger"}
						description={
							"A fully decentralized reward-based crowdfunding platform using smart contracts"
						}
						stack={"Ethers.js, Next.js, TypeScript, SASS, Solidity, TheGraph"}
						image={[
							"/projectImages/prj_manger_lg.png",
							"/projectImages/prj_manger_sm.png",
						]}
						code={"https://github.com/xapski2671/nx-manger-project"}
						demo={"https://manger-project.vercel.app/"}
					/>
				</div>
			</div>
		</div>
	)
}
