import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Movieview from './movieview';
  import { Carousel } from 'react-responsive-carousel';

class AdapterModel extends React.Component{
    
    constructor(props){
        super(props)
        this.state ={            
            Moviegenres : [],
            text : 'welcome'
        }     
       
      
    }

    render(){
        return(
                <Router>
                     
                <div className="">                

               {this.props.value.map((value, index)=>{
                return <div key={index} className=" ">
                <div>
                <Switch>
                    <Route path={"/" + value.slug}>
                   
                    <Movieview 
                    Title={value.title} 
                    poster={value.poster}
                    director= {value.director}
                    imdb ={value.imdb_rating}
                    genres = {value.genres}
                    age = {value.classification}
                    time = {value.released_on}
                    duration = {value.length}
                    about = {value.overview}
                    slug = {value.slug}
                    cast = {value.cast}

                    />
                    
                    </Route>
                    </Switch>
                </div>

                
                <div>
                <div className="jumbotron bg-dark text-white " style={{boxShadow: '0 0 30px 3px #fff'}} >
                <div className="row">

                <div className="col-xl-4 "> 
                <img className="img-fluid" src={value.poster}/>
                 </div>
                <div className="col-xl-8">
                 <h1 className="display-4">
                 <Link className="nav-link" style={{marginLeft: '-30px', marginTop: '-28px'}} to={value.slug}>{value.title}</Link>
                   
                 
                 </h1>
                 
                 <h6>Directed By : {value.director}</h6>
                 <p> IMDB : {value.imdb_rating}</p>
                 <div className="col-xl-10">  
                    <div className="row" >
                    <p style={{marginLeft: '10px', marginLeft: '-1px'}}>Cast : </p>
                        {value.cast.map((value, index)=>{
                            return <div  key={index}>
                            <p>{value + ', '}</p>
                            </div>
                        })}
                    </div>
                
                  </div>
                 <b><i> 
                 
                    <div className="row" >
                      &nbsp; <p style={{marginLeft: '10px'}}>Genres : </p>
                        {value.genres.map((value, index)=>{
                            return <div  key={index}>
                            <p>{value + ', '}</p>
                            </div>
                        })}
                    </div>

                 </i></b>
                 <p> Age Group: {value.classification}</p>
                 <p> Movie Duration: {value.length}</p>
                 <p> Release Date : {value.released_on}</p>


                 <p>About : {value.overview}</p>
                 </div>
                 </div>
                
                <br/>

               
                
                </div>
                
                    
                </div>
               
               
          
                
               
                
                </div>
              })}

                
                </div>
                </Router>
        )
    }
}
export default AdapterModel;