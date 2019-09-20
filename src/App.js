import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  //https://swapi.co/api/people/

  state = {
    personer: []
  }
  //Hent data når component er mount/klar
  componentDidMount(){
    
    //Brug axios til at kontakt + hente data fra API
    //Tage det her API axios.get ('https://swapi.co/api/people/') og giver resultat
    axios.get ('https://swapi.co/api/people/').then(resultat => { 

      console.log(resultat.data.results[5].name);

      this.setState({
        personer:resultat.data.results
      });

    });
  }

  render() {

    const allepersoner = this.state.personer;

    //map´er (kortlægger) data - hvordan og hvad der skal vises
    const personListe = allepersoner.map( (person,index) => {

      return(
        <div key={index} className="startekst__container">
           <div className="person__tekst">
            Navn: {person.name} 
            <br/>
            Højde: {person.height} 
            <br/>
            Født: {person.birth_year}
            </div>
        </div>
      )
    });

    return (
      <div>
        
        <h1>Star Wars</h1>
        <h2>Personer</h2>
        {personListe}
      </div>
    )
  }
}

export default App

