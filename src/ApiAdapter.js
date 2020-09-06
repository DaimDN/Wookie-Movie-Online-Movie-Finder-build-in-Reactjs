import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdapterModel from './AdapterModel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class ApiAdapter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
        
    }


    componentDidMount() {
        var url = "https://wookie.codesubmit.io/movies";
        fetch(url, {
            headers: {
                Authorization: "Bearer Wookie2019"
            }
        })
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.movies
              });
            },
         
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    

      render() {
          
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div className="text-center text-white">Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div className="text-center text-white">Loading...</div>;
        } else {
          return (
            <div>
           
           
            <div className="container">
            <h1 className="display-4 text-white" style={{marginLeft: '45px'}}>Wookie Movies </h1>

          
            <AdapterModel value={this.state.items} />
    
            
              
            </div>
              
              
            </div>
          );
         
        }
      }
}

export default ApiAdapter;