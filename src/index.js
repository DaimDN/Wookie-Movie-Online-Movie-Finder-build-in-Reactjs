import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import 'bootstrap/dist/css/bootstrap.min.css';
  import ApiAdapter from './ApiAdapter';
  import Header from './Header';
  import Genres from './Genres';
  import About from './about';


class Thether extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <Router>
            <div>
             <Header />
              {}
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
               <Route path="/genre">
                   <Genres />
               </Route>
                <Route path="/">
                  <ApiAdapter />
                </Route>
              </Switch>
            </div>
          </Router>
        )
    }
}

  
  
  
 

ReactDOM.render(
    <Thether/>, 
    document.getElementById('root')
)