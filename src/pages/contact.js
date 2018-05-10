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
      <div style = {{display: 'flex'}}>
        {FooterLinks.map(link => (
          <div className="social" style = {{marginRight: '2em'}}>
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
