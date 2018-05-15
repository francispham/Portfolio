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
        <form name = "contactForm" method = "POST" data-netlify='true' netlify-honeypot="bot-field" netlify>
          <label className="form flex">Your Name:
            <input name = "name" type = "text" />
          </label>
          <label className="form flex">Your Email:
            <input name = "email" type = "email" />
          </label>
          <label className="form flex">
            <textarea name = 'message' placeholder = "Your message" />
          </label>
          <p>
            <button type="submit">Send</button>
          </p>
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
