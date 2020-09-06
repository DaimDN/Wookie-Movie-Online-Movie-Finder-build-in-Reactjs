import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import './index.css';


  class Movieview extends React.Component{
      constructor(props){
          super(props)
      }
  
      render(){
          
        return  (
            
            <div className="container model-y">                
                   
                <div className="jumbotron bg-light fixed-top  " style={{boxShadow: '0 0 60px 20px #fff', marginTop: '-60px'}} >
                <div className="mx-auto top pull-left"><a href="/" className="btn btn-primary ml-auto">Back to Home</a></div>
                
                <br/><br/>
                <div className="row">

                <div className="col-xl-3 col-xm-6 col-md-6 col-sm-6 "> 
                <img className="img-fluid img-media" style={{height: '60%'}} src={this.props.poster}/> 
                 </div>
                <div className="col-xl-9 col-xl-9 col-xm-6 col-md-6 col-sm-6">
                 <h1 className="display-4">
                 <a href={this.props.slug} style={{marginLeft: '-30px', marginTop: '-28px'}} className="nav-link mobile-d">{this.props.Title}</a>
                 
                 </h1>
                 
                 <h6>Directed By : {this.props.director}</h6>
                 <p> IMDB : {this.props.imdb}</p>
                 <div className="col-xl-10">  
                    <div className="row" >
                    <p style={{marginLeft: '10px', marginLeft: '-1px'}}>Cast :{this.props.cast} </p>
                        
                    </div>
                
                  </div>
                 <b><i> 
                 
                    <div className="row" >
                      &nbsp; <p style={{marginLeft: '10px'}}>Genres : {this.props.genres} </p>
                       
                    </div>

                 </i></b>
                 <p> Age Group: {this.props.age}</p>
                 <p> Movie Duration: {this.props.duration}</p>
                 <p> Release Date : {this.props.time}</p>


                 <p>About : {this.props.about}</p>
                 </div>
                 </div>
                
                <br/>

               
                
                </div>
                
                
                </div>
       
        )
      }
  }
  export default Movieview;