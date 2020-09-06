import React from 'react';
import ReactDOM from 'react-dom';
import AdapterModel from './AdapterModel';
import { render } from '@testing-library/react';


class Genres extends React.Component{
  
    constructor(props){
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []  ,
            newArray : []          
        }   
        this.dataLoader = this.dataLoader.bind(this);    
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
          this.dataLoader();
        
          }
          
      dataLoader(){
        var fulldataset = [];
        for(var i=0; i < this.state.items.length; i++){
          for(var x =0; x< this.state.items[i].genres.length; x++){
            fulldataset.push(this.state.items[i].genres[x])         
          }   
        }       
         return fulldataset;
           }    



      render(){
        var name = "daim";
        var array = this.dataLoader();
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div className="text-center text-white">Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div className="text-center text-white">Loading...</div>;
        } else {
          return (
            <div onLoad={()=> this.dataLoader()}>
            <br/>
        
           
            <div className="container">
            <h1 className="display-4 text-white" style={{marginLeft: '45px'}}>Wookie Movies </h1>

            {array.map((value, index) => {

              
              return <div className="jumbotron bg-secondary" key={index} >
              
                <h1 className="display-4 text-white text-center">{value}</h1> 
                <hr/>
                <div className="row mx-auto text-center">

                {this.state.items.map((val, i)=> 
                {
                  return   <div className="col-xl-3  jumbotron bg-secondary text-white" style={{marginRight: '40px'}}  key={i}>
                  <img src={val.poster} style={{width: '160%'}}></img>
                  <hr  />
                  <a className="nav-link text-center" style={{color: 'white', fontSize: '18px'}} href={val.slug}>{val.title}</a>
                  
                  </div>
                }
                
               
                
                
                
                )}

                 

                </div>
              
              
              </div>
            })}
              
            </div>
              
              
            </div>
          );
         
        }
    }
}



export default Genres;
