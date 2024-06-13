import './App.css';
import AnyManyMore from './Components/AnyManyMore';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Management from './Components/Management';
import Navbar from './Components/Navbar';
import PplSay from './Components/PplSay';
import PricingPlan from './Components/PricingPlan';
import SmartPayRoll from './Components/SmartPayRoll';
import SmartPeople from './Components/SmartPeople';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Management/>
     <SmartPayRoll/>
    <AnyManyMore/>
    <SmartPeople/>
    <PplSay/>
    <PricingPlan/>
    <Faqs/>
    <Footer/>
    </div>
  );
}

export default App;
