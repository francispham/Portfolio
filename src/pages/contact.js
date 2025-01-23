import React from 'react'

import Layout from '../components/layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const FooterLinks = [
  {
    name: 'Github',
    link: 'https://github.com/francispham',
  },
  {
    name: 'LinkedIn',
    link: 'http://linkedin.com/in/francisphamca',
  },
  {
    name: 'Gmail',
    link: 'mailto:francis.pham.ca@gmail.com',
  },
]

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactmeme', ...this.state }),
    })
      .then(() => (window.location = '/thankyou/'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  render() {
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
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="bot-field" onChange={this.handleChange} />
          <input
            name="name"
            placeholder="Your Name"
            type="text"
            onChange={this.handleChange}
          />
          <input
            name="email"
            placeholder="name@name.com"
            type="email"
            onChange={this.handleChange}
          />
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={this.handleChange}
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
}
