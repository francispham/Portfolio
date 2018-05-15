import React from 'react'

const FooterLinks = [
  {
    name: 'Github',
    link: 'https://github.com/phongpt1989'
  },{
    name: 'LinkedIn',
    link: 'http://linkedin.com/in/francispham89'
  },{
    name: 'Gmail',
    link: 'fransicpham89@gmail.com'
  }
]

const Contact = () => {
  return (
    <div>
      <h2>CONTACT</h2>
      <p>I am available for hire and open to any ideas of cooperation.</p>
      <p>More Questions? Please send me a message, Thank you!</p>
      <div>
        <form className="form flex" name = "contactForm" method = "POST"
              action ="/thankyou" data-netlify='true'
              netlify-honeypot="bot-field" netlify
        >
            <input name = "name" placeholder= "Your Name" type = "text" />
            <input name = "email" placeholder = "name@name.com" type = "email" />
            <textarea name = 'message' placeholder = "Your Message" />
            <button type="submit">Send</button>
        </form>
      </div>
      <br/>
      <hr/>
      <div style = {{display: 'flex', justifyContent:'center'}}>
        {FooterLinks.map(link => (
          <div className="social" style = {{marginRight: '2em'}}>
            <a target = "_blank" rel = "nofollow" className = {link.name.toLowerCase()} href = {link.link}>
              {link.name}
            </a>
          </div>
        ))}
      </div>
      <br/>
    </div>
  )
}

export default Contact
