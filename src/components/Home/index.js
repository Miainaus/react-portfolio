import './index.scss'
import { useState,useEffect } from 'react'
import LogoTitle from '../../assets/images/logo-m.png'
import AnimatedLetters from '../AnimatedLetters'
import SvgPic from './SvgPic'
import Loader from 'react-loaders'
import {Link} from 'react-scroll'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animated')
  const nameArray = ['i', 'a', ' ', 'Z', 'h', 'a', 'n', 'g']
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  
  useEffect(() => {
    setTimeout(() => setLetterClass('text-animated-hover'), 4000)
  } , []);
  
  return (
    <section id='home'>
    <div className="home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i ,</span>
          <br />
          <span className={`${letterClass} _13`}>I'</span>
          <span className={`${letterClass} _14`}>m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            index={23}
          />
        </h1>
        <h2>Frontend Developer / JavaScript Lover</h2>
          <Link to="/contact" className="flat-button" onClick={() => {
            document.getElementById("contact").scrollIntoView({behavior:'smooth'});
        }}>
          Contact Me
        </Link>
      </div>
      <SvgPic />
      </div>
      <Loader type='pacman' />
      </section>
  )
}

export default Home
