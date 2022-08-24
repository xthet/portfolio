import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import styles from "./Contact.module.css"

export default function Contact()
{
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")
  const [emailNotice, setEmailNotice] = useState(false)

  async function handleSubmit(event)
  {
    event.preventDefault()
    console.log(name, email, body)
    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, event.target, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })

    setName("")
    setEmail("")
    setBody("")
    setEmailNotice(true)
  }

  useEffect(()=>{
    if(emailNotice)
    {
      const remove = setTimeout(()=>{setEmailNotice(false)}, 4000)
    }
  },[emailNotice])

  return (
    <div className={styles["portfolio__contact--background"]}>
      <div className={styles["portfolio__contact--background_cube"]}></div>
      <div className={styles["portfolio__contact--background_cube"]}></div>

      <div className={`section__padding ${styles["portfolio__contact"]}`} id="contact">
        <div className={styles["portfolio__contact--heading"]}>
          <h1>CONTACT</h1>
          <h3>KEEP IN TOUCH</h3>
        </div>
        <div className={styles["portfolio__contact--container"]}>
          <div className={styles["portfolio__contact--details_container"]}>
            <div className={styles["portfolio__contact--details"]}>
              <h3>TEL: +2348141905659</h3>
              <h3>22 OLOWOOKERE AVE, IGODO</h3>
              <h3>MAGBORO, 110115, OGUN STATE, NIGERIA</h3>
              <p>oderindeifedapoo@gmail.com</p>
              <div className={styles["portfolio__contact--details--social"]}>
                <a href={process.env.NEXT_PUBLIC_LINKEDIN_SOCIAL} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" className={styles["social-icon"]}/>
                </a>
                <a href={process.env.NEXT_PUBLIC_GITHUB_SOCIAL} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-github" className={styles["social-icon"]}/>
                </a>
              </div>
            </div>
          </div>
      
          <div className={styles["portfolio__contact--form_container"]}>
            <div className={styles["portfolio__contact--form"]}>
              <form onSubmit={handleSubmit}>
                <div className={styles["portfolio__contact--form--creds"]}>
                  <input type="text" name="from_name" placeholder="Name" onChange={(event)=>{setName(event.target.value)}} value={name}/>
                  <input type="email" name="from_email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}} value={email}/>
                </div>
                <div className={styles["portfolio__contact--form--body"]}>
                  <textarea name="message" id="" cols="60" rows="12" onChange={(event)=>{setBody(event.target.value)}} value={body}></textarea>
                </div>
                <div className={styles["portfolio__contact--form--submit"]}>
                  <button type="submit">SEND</button>
                  <div className={`${emailNotice ? styles["email-visible"] : styles["email-invisible"]} ${styles["portfolio__contact--form--submit--notice"]}`}>
                    <p>EMAIL SENT!</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}