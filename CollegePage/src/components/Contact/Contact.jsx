import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon2.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import red_arrow from '../../assets/red_arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3bcc4ccd-f038-48dd-ada2-533aa07cb651");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    

    if (data.success) {
      setResult("Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact
            informtion below. Your feedback, questions, and suggestions are 
            important to us we strive to the writing community.
            <ul>
                <li> <img src={mail_icon} alt="" />CodexOfWorlds@gmail.com</li>
                <li> <img src={phone_icon} alt="" />123-456-7890</li>
                <li> <img src={location_icon} alt="" />The HeartWyald</li>
            </ul>
        </p>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone number</label>
          <input type="tel" name='phone' placeholder='Enter phone number' required/>
          <label>Write your message here</label>
          <textarea name="message" row="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit <img src={red_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact