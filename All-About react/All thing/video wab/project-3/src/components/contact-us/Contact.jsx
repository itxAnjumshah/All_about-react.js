import React from 'react'
import './Contact.css'
import message_icon from'./../../assets/msg-icon-ClKDHhj8.png'
import icon2 from'./../../assets/download (7).png'
import icon3 from'./../../assets/download (8).png'
import icon4 from'./../../assets/download (9).png'
import arrow from'./../../assets/download (6).png';

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b7947e74-9108-4db1-b521-5181acd54975");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={icon2} alt="" />anjumshah402@gmail.com</li>
            <li><img src={icon3} alt="" />+923128622793</li>
            <li><img src={icon4} alt="" />paris heights B-17 MR-1A </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
<label>Your name</label>
<input type="text" name='name' placeholder='Enter your name'required />
<label>Phone Number</label>
<input type="tel"name='phone'  placeholder='Enter your mobile number' required/>
<label>Your Email</label>
<input type="email" placeholder='Enter your email id ' required/>
<label>Write  your  message here</label>
<textarea name="message"  rows="6" placeholder='Enter  your  message' required></textarea>
<button type='submit' className='btn dark-btn'>Submit now <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}
