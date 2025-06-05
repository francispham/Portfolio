import React, { useState } from 'react'

import Layout from '../components/layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const FooterLinks = [
  {
    name: 'Github',
    link: 'https://github.com/francispham23',
  },
  {
    name: 'LinkedIn',
    link: 'http://linkedin.com/in/francisphamca',
  },
  {
    name: 'Email',
    link: 'mailto:hello@francispham.ca',
  },
]

const Contact = () => {
  const [formState, setFormState] = useState({})

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactmeme', ...formState }),
    })
      .then(() => (window.location = '/thankyou/'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  return (
    <Layout>
      <h2 className="animation">CONTACT</h2>
      <hr className="hr" />
      <p>I am available for hire and open to any ideas of cooperation.</p>
      <p>More Questions? Please send me a message, Thank you!</p>
      <form
        className="form flex"
        name="contacted"
        method="post"
        action="/thankyou/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" onChange={handleChange} />
        <input
          name="name"
          placeholder="Your Name"
          type="text"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="name@name.com"
          type="email"
          onChange={handleChange}
        />
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
          />
        </div>
        <input className="button" type="submit" value="Send" />
      </form>

      <br />
      <hr />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {FooterLinks.map((link) => (
          <div
            className="social"
            style={{ marginRight: '2em' }}
            key={link.name}
          >
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              className={link.name.toLowerCase()}
              href={link.link}
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
      <br />
    </Layout>
  )
}

export default Contact
