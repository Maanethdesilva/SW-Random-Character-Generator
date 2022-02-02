import './App.css';
import React from 'react';

class FilmList extends React.Component {
  render(){
    return(
      <li><a href={this.props.link} >{this.props.link}</a></li>
    )
  }
}

class StarWars extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      hasCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: []
    }
  }

  getNewCharacter(){
    const randChar = Math.round(Math.random()*82)
    const url = `https://swapi.dev/api/people/${randChar}/`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          hasCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films
        })
      })  
  }

  render() {

    const movies = this.state.films.map((url,i) => {
      return <FilmList key={i} link={url}/>
    })

    return (
      <div>
        {
          this.state.hasCharacter &&
            <div>
              <h1>{this.state.name}</h1>
              <p>{this.state.height} cm</p>
              <p><a className="homelink" href = {this.state.homeworld}>Homeworld</a></p>
              <ul>
                {movies}
              </ul>
            </div>
        }
        <button 
          type="button" 
          onClick={() => this.getNewCharacter()} 
          className="btn"
        >
          Random character
        </button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
