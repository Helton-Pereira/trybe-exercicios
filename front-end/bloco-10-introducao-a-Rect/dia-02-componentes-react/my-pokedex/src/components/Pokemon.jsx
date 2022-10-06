import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        
        const {pokemons: { name, type, averageWeight, image } } = this.props;
        const { value, measurementUnit } = averageWeight;
        
        return (
            <div className="pokemon">
                <h1>{ name }</h1>
                <p>Tipo: { type }</p>
                <p>Peso mèdio: { value}{measurementUnit}</p>
                <img src={image} alt={ name } ></img>
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemons: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string
    }).isRequired,
}

export default Pokemon;