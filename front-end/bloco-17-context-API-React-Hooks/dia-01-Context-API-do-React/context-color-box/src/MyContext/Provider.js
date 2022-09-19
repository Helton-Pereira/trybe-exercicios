import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['blue', 'red', 'yellow'],
      colorIndex: 0,
    };
  }

  handleColorButton = () => {
    const { colorIndex, colors } = this.state;

    if (colorIndex < (colors.length - 1)) {
      this.setState((prevState) => ({ colorIndex: prevState.colorIndex + 1 }))
    } else {
      this.setState({ colorIndex: 0 })
    }
  }


  render() {
    const context = {
      ...this.state,
      nextColor: this.handleColorButton,
    }
    const { children } = this.props;
    return (
      <MyContext.Provider value={ context }>
        { children }
      </MyContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;