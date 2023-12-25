import React from 'react'
import './Contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import InstagramIcon from '../../assets/instagram.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'






const Contacts = () => {
  return (
    <section id="ContactPage">
      <div id="clients">
        <h1 className="clientPageTitle">My Clients</h1>
        <p className="clientDescription">Reference site about Lorem Ipsum, giving information on its origins,</p>
        <div className="clientImgs">
          <img src={Walmart} alt="" className="clientImg" />
          <img src={Adobe} alt="" className="clientImg" />
          <img src={Microsoft} alt="" className="clientImg" />
          <img src={Facebook} alt="" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactdescription">Reference site about Lorem Ipsum, giving information on its origins,</span>
        <form action="" className='contactForm'>
          <input type="text" className='name' placeholder='enter your name'/>
          <input type="email" className='email' placeholder='enter your email'/>
          <textarea className='msg' name="message"  rows="5" placeholder='enter your messages'/>
          <button type='submit' value='Send' className="submitBtn">Send Me</button>

          <div className="links">
            <img src={FacebookIcon} alt="" className="link" />
            <img src={InstagramIcon} alt="" className="link" />
            <img src={TwitterIcon} alt="" className="link" />
            <img src={YoutubeIcon} alt="" className="link" />

          </div>

        </form>

      </div>
    </section>
  )
}

export default Contacts