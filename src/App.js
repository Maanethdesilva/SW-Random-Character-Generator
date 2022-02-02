import './App.css';
import React from 'react';


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
    const randChar = Math.round(Math.random()*88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randChar}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          hasCharacter: true,
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.affiliations,
          image: data.image
        })
      })  
  }

  render() {

    return (
      <div>
        {
          this.state.hasCharacter &&
            <div>
              <img src={this.state.image} className="charPhoto"/>
              <h1>{this.state.name}</h1>
              <p>Height: {this.state.height} m</p>
              <p>Homeworld: {this.state.homeworld}</p>
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
