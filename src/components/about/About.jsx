import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaProjectDiagram} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt= 'Me'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Expericence</h5>
              <small>3rd Year of Studies at Belgium Campus ITVersity</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Interests</h5>
              <small>I enjoy gaming, playing guitar, drums, listening to music, the gym and coding/working with computers</small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon'/>
              <h5>Projects</h5>
              <small>Currently working on a BMW project for detection of fatigue in a driver with the use of eye tracking and facial sensors</small>
            </article>
          </div>
          <p>
          I am a hard working, motivated student who is willing and eager to learn something new everyday. I am looking
          for a position that will test and challenge my skills within the I.T world in order to improve my self and bring value to the company
          </p>
          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About