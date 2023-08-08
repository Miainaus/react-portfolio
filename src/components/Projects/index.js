import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';

const Projects = () => {
  
  const [letterClass, setLetterClass] = useState('text-animated')

  useEffect(() => {
    setTimeout(() => setLetterClass('text-animated-hover'), 4000)
  } , []);


  return (
    <>
    <div className="container projects-page">
      <div className="text-zone">
      <h1>
          <AnimatedLetters
             letterClass={letterClass}
              strArray={['P','r','o','j','e','c','t','s']}
              index={15}
            />
          </h1>
      </div>
      </div>
      </>
  );
}

export default Projects;
