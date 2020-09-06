import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdapterModel from './AdapterModel';


class SModel extends React.Component{
    constructor(props){
        super(props)
    }


    render(){

        return(
            <div className="container">                

            {this.props.dataset.map((value, index)=>{
                return <div key={index} className=" ">
                
                <div className="jumbotron bg-dark text-white " style={{boxShadow: '0 0 60px 20px #fff'}} >
                <h1 className="display-4">Searched Results No : {index + 1}</h1>
                <br/><br/>
                <div className="row">

                <div className="col-xl-4 "> 
                <img className="img-fluid"  src={value.poster}/> 
                 </div>
                <div className="col-xl-8">
                 <h1 className="display-4">
                 <a href={value.slug} style={{marginLeft: '-30px', marginTop: '-28px'}} className="nav-link">{value.title}</a>
                 
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
           })}

             
             </div>
        )
        
    }
}

export default SModel;