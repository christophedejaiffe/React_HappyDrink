import React, { Component, Fragment } from 'react';
import Like from './../../assets/Like.png'; // import des logos
import DisLike from './../../assets/DisLike.png'; 
import Favoris1 from './../../assets/Fav01.png';
import Favoris2 from './../../assets/Fav02.png';


class Establishment extends Component {

    constructor(){  // je déclare mes state avec une valeur 0
        super();
        this.state = {
            countLik: 0,
            countDis: 0,
            Favori: Favoris1
        };
}
add() { // Je modifie le state pour incrémenter le compteur de 1 ( compteur like)
    this.setState({
        countLik: this.state.countLik +1
    });
}
    
min() { // Je modifie le state pour incrémenter le compteur de 1 ( compteur like)
    this.setState({
        countDis: this.state.countDis +1
    });

}
fav() {
    this.setState({
        Favori : this.state.Favori.Favoris2
    })
    
}

    render() { // Fragment car return de plusieurs éléments

        return (
            <Fragment> 
            <div className='establishment'>
                <h3>{ this.props.establishment.name }</h3> 

                    { this.props.establishment.description }
                <div className= 'Button'>
                <p><button onClick={() => this.fav()}><img src={Favoris1} alt="Favoris" /></button> </p>
                </div>   
                <p><button onClick={() => this.add()}><img src={Like} alt="Like" /></button>========<button onClick={() => this.min()}><img src={DisLike} alt="DisLike" /></button></p>   
                <div>
                    <span> { this.state.countLik }</span>============<span> { this.state.countDis }</span>
                </div>
            </div>
        </Fragment>
    )} // affichage des props : Nom, description, like, dislike et compteur
}

export default Establishment;