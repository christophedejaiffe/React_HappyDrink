import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { establishments } from './establishments/fixtures';
import Establishment from './establishments/Establishment';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { pseudo : "inconnu" }
    }

    randomPseudo = () => {

        let randomPseudo    = ""
        const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const size          = Math.floor(Math.random() * 10) + 5
        for( let i=0; i < size; i++ ){
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        // On met à jour le state via la fonction "setState" héritée de la classe Component
        this.setState({
            pseudo : randomPseudo
        })
    }
  
    render() {

      const listEstablishment = establishments.map( (establishment) => {
            return (
              // L'attribut "key" permet à React d'identifier les éléments.
              // Cela améliore les performances lors de l'ajout,
              // la modification et la suppression d'un élément.
              <Establishment 
              key={establishment.id}
              establishment={establishment}
              />
          )
      })
            return (
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
                    </div>
                    <div className="App-intro">
                        <p> <a onClick={ this.randomPseudo } ><button>Next</button></a></p>
                        <section>
                        { listEstablishment }
                        </section>
                    </div>
                    <div class="App-intro">

                    </div>
                </div>
      
    );
}
}

export default App;
