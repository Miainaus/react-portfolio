import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import project1 from '../../assets/images/project-1.png';
import project2 from '../../assets/images/project-2.png';
import project3 from '../../assets/images/project-3.png';
import project4 from '../../assets/images/project-4.png';
import project5 from '../../assets/images/project-5.png';
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
            <a className="image" href="http://www.mymolamola.com/">
              <img src={project1} alt='portfolio' />
              <h2>Molamola</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="https://miainaus.github.io/movieLandingPage/">
              <img src={project2}  alt='' className="mainImg" />
              <h2>IMovie</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="https://miainaus.github.io/js-portfolio/">
              <img src={project3}  alt='' className="mainImg" />
              <h2>Portfolio</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="https://my-daily-blog-e3e6f8065fc4.herokuapp.com/">
              <img src={project4}  alt='' className="mainImg" />
              <h2>Blog</h2>
            </a>
          </div>
          <div className="card">
            <a className="image" href="https://mia-task-master-1b73de9e2c8c.herokuapp.com/">
              <img src={project5}  alt='' className="mainImg" />
              <h2>Taskmaster</h2>
            </a>
          </div>
          <div className="card last">
            <a className="image" href="#1">
              <img src={project5}  alt='' className="mainImg" />
              <h2>title</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
