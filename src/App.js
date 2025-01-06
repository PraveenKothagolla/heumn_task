import './App.css';
import Cards from './Google/Card';
import Fast from './Google/Fast';
import GoogleFooter from './Google/Footer';
import Home from './Google/home';
import ColorSchemesExample from './Google/Navbar';
import RoundedNavBar from './Google/Roundednavbar';
import Update from './Google/Udateimages';
import FAQ from './Google/FAQ';
import Extend from './Google/extend';
import Password from './Google/password';
import Fastway from './Google/fastway';
import MediaCarousel from './Google/carousel';
import Built from './Google/built';
import Access from './Google/access';
import LastCard from './Google/lastcard';
function App() {
  return (
   <div>
    <ColorSchemesExample/>
    <Home/>
    <RoundedNavBar/>
    <Update/>
    <Cards/>
    <Fast/>
    <Extend/>
    <Password/>
    <Fastway/>
     <MediaCarousel/>
     <Built/>
     <Access/>
     <LastCard/>
    <FAQ/>
    <GoogleFooter/>
   </div>
  );
}

export default App;
