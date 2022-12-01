import React,{useState} from 'react'
import sendEmail from '../../email_js';
import './Contact.css'
function Contact() {
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [message, setMessage] = useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
sendEmail(name,phone,message)
alert('Thank You For Contacting Us. We will Get Back To You Soon')

setName('')  
setPhone('')
setMessage('')
  }
  return (
    <div>
<section id="contact" className=''>
  <h1 className="section-header">Contact</h1>
  <div className="contact-wrapper">
    {/* Left contact page */} 
    <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit} role="form">
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name"  required 
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="form-group">
        <div className="col-sm-12">
          <input type="phone" className="form-control" id="email" placeholder="PHONE" name="phone"  required
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}/>
        </div>
      </div>
      <br />
      <textarea className="form-control" rows={10} placeholder="MESSAGE" name="message" required 
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      />
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i className="fa fa-paper-plane" /><span className="send-text">SEND</span>
        </div>
      </button>
    </form>
    {/* Left contact page */} 
    <div className="direct-contact-container">
      <ul className="contact-list">
        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Pandalam, Pathanamthitta, Kerala</span></i></li>
        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:91-808-985-1572" title="Give me a call">+91 8089851572</a></span></i></li>
        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:prostack21@gmail.com" title="Send me an email">prostack21@gmail.com</a></span></i></li>
        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:shahid04m@gmail.com" title="Send me an email">shahid04m@gmail.com</a></span></i></li>

      </ul>
      <hr />
      <ul className="social-media-list">
        <li><a href="https://github.com/Muhammed-Shahid" target="_blank" className="contact-icon">
            <i className="fab fa-github" aria-hidden="true" /></a>
        </li>
        <li><a href="https://medium.com/@shahid04m" target="_blank" className="contact-icon">
            <i className="fab fa-medium" aria-hidden="true" /></a>
        </li>
        {/* <li><a href="#" target="_blank" className="contact-icon">
            <i className="fab fa-twitter" aria-hidden="true" /></a>
        </li>
        <li><a href="https://www.instagram.com/prostack_web_developers/" target="_blank" className="contact-icon">
            <i className="fab fa-instagram" aria-hidden="true" /></a>
        </li>        */}
      </ul>
      <hr />
   
    </div>
  </div>
</section>
 
  
    </div>
  )
}

export default Contact