import React, { Component, Fragment } from 'react';
import Like from './../../assets/Like.png'; // import des logos
import DisLike from './../../assets/DisLike.png'; 
import Logo1 from './../../assets/Fav01.png';
import Logo2 from './../../assets/Fav02.png';

class Establishment extends Component {

    constructor(){  // je déclare mes state avec une valeur 0
        super();
        this.state = {
            countLik: 0,
            countDis: 0,
            favori: false
        };
}
add() { // Je modifie le state pour incrémenter le compteur de 1 ( compteur like)
    this.setState({
        countLik: this.state.countLik +1
    });
}
    
min() { // Je modifie le state pour incrémenter le compteur de 1 ( compteur dislike)
    this.setState({
        countDis: this.state.countDis +1
    });

}
favori = () => {
    this.setState({
        favori : !this.state.favori
    })
    
}


    render() { // Fragment car return de plusieurs éléments

        let starIcon    = <i className="fa fa-star-o" aria-hidden="true"></i>

        if (this.state.favori) {
            starIcon = <i className="fa fa-star favoriIcon" aria-hidden="true"></i>
        }

        return (
            <Fragment> 
            <div className='establishment'>
            <div className='establishment-favori' >
                <button onClick={this.favori}>{ starIcon }</button>
            </div>
                <h3>{ this.props.establishment.name }</h3> 
                    { this.props.establishment.description }
                <div>
                    <p> <span> { this.state.favori} </span> </p>
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