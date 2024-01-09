
import './App.css';



import AnnouncementBar from './component/AnnouncementBar'
import NavBar from './component/NavBar'
import  HeroSectionWithBg from './component/HeroSectionWithBg'
import LogoCloud from './component/LogoCloud'
import Feature1 from './component/Feature1'
import Feature2 from './component/Feature2'
import Component1 from './component/Component1'
import Testimonial from './component/Testimonial'
import CallToAction from './component/CallToAction';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <AnnouncementBar></AnnouncementBar>
      <NavBar></NavBar>
      <HeroSectionWithBg></HeroSectionWithBg>
      <LogoCloud></LogoCloud>
      <Feature1></Feature1>
      <Feature2></Feature2>
      <Component1></Component1>
      <Testimonial></Testimonial>
      <CallToAction></CallToAction>
      <Footer></Footer>

    </div>
  );
}

export default App;
