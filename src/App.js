import logo from './logo.svg';
import './App.css';
import Hero from './pages/Hero/Hero';
import Services from './pages/Services/Services';
import Working from './components/Working/Working';
import Price from './pages/Price/Price';
import Delivery from './pages/Delivery/Delivery';
import Faq from './pages/FAQ/Faq';
import { Switch, Route } from "react-router-dom"
// import Header from './compoenents/Header/Header';
// funimport Header from './Header/Header';
import Header from "./components/Header/Header"
function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Switch>
          <Route path='/' component={Hero} exact />
          <Route path='/home' component={Hero} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/services/bdfjk" component={Price} />
          <Route path="/faq" component={Faq} />
          <Route path="/pricing" component={Price} />
        </Switch>
      </div>
      {/* <Footer />  */}
    </div>
  );
}
// /services/kdsnkdsj !== /services
// localhost:3000/
// paht = "/"
// path="/services" false

export default App;
