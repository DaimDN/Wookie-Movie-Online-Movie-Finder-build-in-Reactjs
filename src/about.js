import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component{

    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <div>
            <div className="jumbotron bg-dark text-white">
              <h1 className="text-center display-2"> About Wookie Home </h1>
            </div>
                <h1 className="text-center text-white"> Build By : Daim  </h1>
            </div>
        )
    }

}

export default About;