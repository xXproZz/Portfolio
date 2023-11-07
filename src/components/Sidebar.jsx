import SocialNetwork from './SocialNetwork';

import Avatar from '../img/img.jpg'

import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';


const Sidebar = () => {
  return (<aside id="sidebar">
    <img src={Avatar} alt="Juan Pires Souza" />
    <p className="title">Desenvolvedor</p>
    <SocialNetwork />
    <InformationContainer />
    <a href="" className="btn">
      Download currículo
    </a>
  </aside>
  )  
  
}

export default Sidebar