import React from 'react'

import html5 from '../img/icon/html5.png'
import css3 from '../img/icon/css3.png'
import sass from '../img/icon/sass.png'
import react from '../img/icon/react.png'
import gatsbyjs from '../img/icon/gatsbyjs.png'
import jquery from '../img/icon/jquery.png'
import bootstrap from '../img/icon/bootstrap.png'

import rails from '../img/icon/rails.png'
import nodejs from '../img/icon/nodejs.png'
import express from '../img/icon/express.png'
import postgresql from '../img/icon/postgresql.png'
import mysql from '../img/icon/mysql.png'
import mongodb from '../img/icon/mongodb.png'

import javascript from '../img/icon/javascript.png'
import ruby from '../img/icon/ruby.png'
import webpack from '../img/icon/webpack.png'
import github from '../img/icon/github.png'
import heroku from '../img/icon/heroku.png'
import netlify from '../img/icon/netlify.png'
import graphql from '../img/icon/graphql.png'


const Skills = () => {
  return (
    <div >
      <h2>My Super Power</h2>
      <div>
        <div className="box">
          <h3 style = {{margin: '15px'}}> Front End </h3>
          <hr/>
          <div className='container'>
            <div className='gridBox'><img src={html5} alt='html5'/>HTML5 </div>
            <div className='gridBox'><img src={css3} alt='css3'/>CSS3</div>
            <div className='gridBox'><img src={react} alt='react'/>React</div>
            <div className='gridBox'><img src={gatsbyjs} alt='gatsbyjs'/>Gatsby</div>
            <div className='gridBox'><img src={sass} alt='sass'/>Sass</div>
            <div className='gridBox'><img src={jquery} alt='jquery'/>Jquery</div>
            <div className='gridBox'><img src={bootstrap} alt='bootstrap'/>Bootstrap</div>
          </div>
        </div>
        <br/>
        <div className="box">
          <h3 style = {{margin: '15px'}}>Back End </h3>
          <hr/>
          <div className='container'>
            <div className='gridBox'><img src={rails} alt='rails'/>Rails</div>
            <div className='gridBox'><img src={express} alt='express'/>Express</div>
            <div className='gridBox'><img src={postgresql} alt='postgresql'/>PostgreSQL</div>
            <div className='gridBox'><img src={nodejs} alt='nodejs'/>Nodejs</div>
            <div className='gridBox'><img src={mysql} alt='mysql'/>MySQL</div>
            <div className='gridBox'><img src={mongodb} alt='mongodb'/>mongodb</div>
          </div>
        </div>
        <br/>
        <div className="box">
          <h3 style = {{margin: '15px'}}>Languages & Tools </h3>
          <hr/>
          <div className='container'>
            <div className='gridBox'><img src={javascript} alt='javascript'/>Javascript</div>
            <div className='gridBox'><img src={ruby} alt='ruby'/>Ruby</div>
            <div className='gridBox'><img src={graphql} alt='graphql'/>GraphQL</div>
            <div className='gridBox'><img src={webpack} alt='webpack'/>Webpack</div>
            <div className='gridBox'><img src={github} alt='github'/>Github</div>
            <div className='gridBox'><img src={heroku} alt='heroku'/>Heroku</div>
            <div className='gridBox'><img src={netlify} alt='netlify'/>Netlify</div>
          </div>
        </div>
        <br/>
      </div>
    </div>
  )
}

export default Skills
