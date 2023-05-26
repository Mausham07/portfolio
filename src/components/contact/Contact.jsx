import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tjyabv1",
        "template_qygn4k5", 
        formRef.current,
        "KXaMTLuEJZ001EvaR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <h1 className="title">Contact</h1>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              (619)-648-9482
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              maushambista0@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              364 S 1st W, APT 5, Rexburg, Idaho
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Hey, </b> <br/>  I am open to collaboration opportunities for 
            projects that align with my skills and interests. If you have an 
            exciting project in mind, feel free to reach out. I am passionate 
            about freelancing and eager to contribute my expertise to create 
            meaningful and innovative solutions together. If you have a fitting role 
            available, I would love to discuss how I can add value to your team 
            and help drive innovation and success.Let's connect and 
            explore the possibilities of working together on impactful projects.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" required/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" required />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" required />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" required />
            <button>Submit</button>
            <br />
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
