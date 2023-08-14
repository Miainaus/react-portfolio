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
          Suspendisse nec justo massa. Morbi neque lacus, accumsan id ex ac,
          mattis tincidunt felis. Proin at lectus ac libero molestie auctor.
          Vestibulum et fringilla lacus. Donec interdum vestibulum euismod.
          Donec est sapien, pellentesque eu neque ut, sagittis imperdiet erat.
          Suspendisse cursus mauris vestibulum lacus interdum aliquet. Donec a
          turpis vehicula, finibus velit a, convallis enim. Maecenas pretium est
          sed nulla fermentum, nec facilisis nibh pellentesque. In fermentum
          interdum turpis quis tincidunt. Integer lacus neque, ultrices euismod
          erat vel, pharetra sodales massa. Donec ac scelerisque turpis. Sed
          quis congue sem, sed varius tellus. Aliquam sapien mi, vehicula sed
          fermentum non, fermentum posuere nisl. In hac habitasse platea
          dictumst. Maecenas ullamcorper malesuada luctus.
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