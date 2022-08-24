import Head from "next/head"
import { Navbar } from "../components/exportComps"
import { About, Contact, Footer, Header, Portfolio, Skills } from "../containers/exportConts"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Ifedapo Oderinde</title>
        <meta name="Ifedapo Oderinde" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      <Skills/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}
