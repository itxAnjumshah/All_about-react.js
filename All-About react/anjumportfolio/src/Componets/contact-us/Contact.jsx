// import React from 'react'
// import './Contact.css'
// import message_icon from'../Assets/msg-icon-ClKDHhj8.png'
// import icon2 from'../Assets/download (7).png'
// import icon3 from'../Assets/download (8).png'
// import icon4 from'../Assets/download (9).png'
// // import arrow from'../Assets/download (6).png';

// export default function Contact() {
//     const [result, setResult] = React.useState("");

//     const onSubmit = async (event) => {
//       event.preventDefault();
//       setResult("Sending....");
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "b7947e74-9108-4db1-b521-5181acd54975");
  
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     };

//   return (
//     <>
//     <h1 className='mycontact'>my-<span>contact </span></h1>
//     <div className='contact'>
      
//       <div className='contact-col'>
//         <h3>Send us a message <img src={message_icon} alt="" /></h3>
//         <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
//         <ul>
//             <li><img src={icon2} alt="" />anjumshah402@gmail.com</li>
//             <li><img src={icon3} alt="" />+923128622793</li>
//             <li><img src={icon4} alt="" />paris heights B-17 MR-1A </li>
//         </ul>
//       </div>
//       <div className='contact-col'>
//         <form onSubmit={onSubmit}>
// <label>Your name</label>
// <input type="text" name='name' placeholder='Enter your name'required />
// <label>Phone Number</label>
// <input type="tel"name='phone'  placeholder='Enter your mobile number' required/>
// <label>Your Email</label>
// <input type="email" placeholder='Enter your email id ' required/>
// <label>Write  your  message here</label>
// <textarea name="message"  rows="6" placeholder='Enter  your  message' required></textarea>
// <button type='submit' className=''>Submit now </button>
//         </form>
//         <span>{result}</span>
//       </div>
//     </div>

//     </>
//   )
// }
import React from 'react';
import './Contact.css';
import message_icon from '../Assets/msg-icon-ClKDHhj8.png';
import icon2 from '../Assets/download (7).png';
import icon3 from '../Assets/download (8).png';
import icon4 from '../Assets/download (9).png';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add the access key to form data
    formData.append("access_key", "b7947e74-9108-4db1-b521-5181acd54975");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset(); // Clear the form on success
      } else {
        setResult("Failed to submit: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <>
      <h1 className='mycontact'>my-<span>contact </span></h1>
      <div className='contact'>
        <div className='contact-col'>
          <h3>Send us a message <img src={message_icon} alt="Message Icon" /></h3>
          <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
          <ul>
            <li><img src={icon2} alt="Email Icon" /> anjumshah402@gmail.com</li>
            <li><img src={icon3} alt="Phone Icon" /> +923128622793</li>
            <li><img src={icon4} alt="Location Icon" /> Paris Heights B-17 MR-1A</li>
          </ul>
        </div>
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Your Email</label>
            <input type="email" name='email' placeholder='Enter your email ID' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className=''>Submit now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
}
