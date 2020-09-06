import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdapterModel from './AdapterModel';
import SModel from './searchModel';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value: '',
            error: null,
            isLoaded: false,
            items: [],
            newValue: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        }
        handleChange(event) {
            this.setState({value: event.target.value});
            
        }
        
        handleSubmit(event) {
            this.setState({newValue: this.state.value});
                event.preventDefault();
                var url = "https://wookie.codesubmit.io/movies?q=" + this.state.newValue;
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

        componentDidMount() {
        
          }
          

        render(){
        const { error, isLoaded, items } = this.state;


        return(
            <div>
            <nav class="navbar navbar-dark bg-dark  navbar-expand-lg sticky-top">
            <a class="navbar-brand" href="/">Wookie Movie</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Wookie Homepage <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/genre">Genres</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <form onSubmit={this.handleSubmit} className="form-inline">
                    <label>
                    
                    <input type="text" placeholder="Search, Movies, Generes" style={{width: '300px',boxShadow: '0 0 10px 3px #fff'}} className="form-control mr-sm-2" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit"  style={{boxShadow: '0 0 10px 3px #fff'}} className="btn btn-outline-light my-2 my-sm-0" value="Search" />
                </form>
                    </ul>
                </div>
            
            
           
           
          </nav>
          <div>
              <div className="text-white  ">
            
                <SModel dataset={this.state.items} />
               
                 
              </div>
          </div>
          </div>
        )
    }
}
export default Header;