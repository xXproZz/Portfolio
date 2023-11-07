import AboutContainer from './aboutcontainer'
import TechnologiesContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'


import '../styles/components/maincontent.sass'


const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer/>
      <TechnologiesContainer />
      <ProjectsContainer/>
      </main>
  )
}

export default MainContent