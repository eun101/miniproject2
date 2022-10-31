import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Pricing from './Pricing';
import Login from './Login';
import{ Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Header/>
      <Routes>
      <Route path="/aboutus" element= {<AboutUs />} />
      </Routes>


    </>
  );
}

export default App;
