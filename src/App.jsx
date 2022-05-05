import React, {useEffect} from "react";
import { Routes ,Route } from 'react-router-dom';
import Aos from 'aos'
import RCWeb from './pages/RCWeb'
import 'aos/dist/aos.css';
import './assets/css/General.css';
import './assets/css/bootstrap.min.css';
import './assets/css/responsive.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';



const App = () => {

  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  return (
    
    	<div className="App">
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <Route path="/" exact component={RCWeb} />
	    </div>    
  );
}

export default App;