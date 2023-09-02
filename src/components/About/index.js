import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact,faJs,faNode ,faHtml5,faCss3, faGitAlt} from '@fortawesome/free-brands-svg-icons'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animated');
  useEffect(() => {
    setTimeout(() => setLetterClass('text-animated-hover'), 4000)
  } , []);
  return (
    <section id='about'>
    <div className="about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
        <p>
        Hello there! I'm a self-taught developer driven by an unquenchable passion for coding. Coding isn't just a skill for me, it's a way of life.
I wake up each day with a burning desire to dive into lines of code and create something remarkable.
If you're seeking a developer who's passionate, innovative, and ready to contribute meaningfully to your projects, look no further. Let's collaborate and make some digital magic happen!
        </p>
       
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4E28" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faNode} color="#1A5D1A" />
          </div>
          <div className='face5'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face6'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
        </div>
      </div>
    </div>
      </section>
  )
}

export default About
