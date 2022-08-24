import Image from "next/image"
import Link from "next/link"
import logo from "../../assets/IfedapoOderinde.svg"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { useEffect, useState } from "react"
import styles from "./Navbar.module.css"

function Menu()
{
  return (
    <>
      <Link href="/"><p>HOME</p></Link>
      <Link href="/#skills"><p>SKILLS</p></Link>
      <Link href="/#about"><p>ABOUT</p></Link>
      <Link href="/#portfolio"><p>PROJECTS</p></Link>
      <Link href="/#contact"><p>CONTACT</p></Link>
    </>
  )
}

export default function Navbar()
{
  const [toggleMenu, setToggleMenu] = useState(false)
  const [navBg, setNavBg] = useState(false)

  function handleScroll(event)
  {
    if(window.scrollY > 0)
    {
      setNavBg(true)
    }
    else{setNavBg(false)}
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  },[navBg])

  return (
    <div className={`${navBg && styles["navBg"]} ${styles["portfolio__navbar"]}`} onScroll={handleScroll}>
      <div className={styles["portfolio__navbar--links_container"]}>
        <Link href="/">
          <div className={styles["portfolio__navbar--links_container--logo"]}>
            <h1>IFEDAPO</h1>
            <h1>ODERINDE</h1>
          </div>
        </Link>
        <div className={styles["portfolio__navbar--links_container--menu"]}>
          <Menu/>
        </div>
        <div className={styles["portfolio__navbar--links_container--hamburger_menu"]}>
          {
            toggleMenu
              ? <RiCloseLine color="#fff" size={25} onClick={()=>{setToggleMenu(false)}}/>
              : <RiMenu3Line color="#fff" size={25} onClick={()=>{setToggleMenu(true)}}/>
          }
          
          {
            toggleMenu && 
              <div className={`${styles["portfolio__navbar--links_container--hamburger_menu--container"]}`}>
                <div className={styles["portfolio__navbar--links_container--hamburger_menu--links"]}>
                  <Menu/>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}