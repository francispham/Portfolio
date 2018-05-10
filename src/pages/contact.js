import React from 'react'

const FooterLinks = [
  {
    name: 'Github: francispham',
    link: 'https://github.com/phongpt1989'
  },{
    name: 'LinkedIn: francispham',
    link: 'http://linkedin.com/in/francispham89'
  },{
    name: 'Gmail: francispham',
    link: 'fransicpham89@gmail.com'
  }
]

const Contact = () => {
  return (
    <div>
      <h2>CONTACT</h2>
      <p>I am available for hire and open to any ideas of cooperation.</p>
      <div>
        {FooterLinks.map(link => (
          <div className="social" style = {{display: 'flex'}}>
            <a target = "_blank" rel = "nofollow" className = {link.name.toLowerCase()} href = {link.link}>
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
