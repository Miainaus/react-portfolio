import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import imgPort from '../../assets/images/portfolio.png'
import img from '../../assets/images/logo1.png'
import './index.scss'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animated')

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animated-hover'), 4000)
  }, [])

  return (
    <section id="projects">
      <div className="projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              index={15}
            />
          </h1>
        </div>
        <div className="demo">
          <div className="card">
            <a className="image" href="https://miainaus.github.io/react-portfolio/">
              <img src={imgPort} alt='portfolio' />
              <h2>Portfolio</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="#1">
              <img src={img}  alt='' className="mainImg" />
              <h2>title</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="#1">
              <img src={img}  alt='' className="mainImg" />
              <h2>title</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="#1">
              <img src={img}  alt='' className="mainImg" />
              <h2>title</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="#1">
              <img src={img}  alt='' className="mainImg" />
              <h2>title</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="#1">
              <img src={img}  alt='' className="mainImg" />
              <h2>title</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
