// ./components/ColorBox.js
import React from 'react';
import '../styles/box.css';
import MyContext from '../MyContext/MyContext';

class ColorBox extends React.Component {
  render() {
    const { nextColor, colors, colorIndex } = this.context;
  
    return(

      <button
        type="button"
        className="box"
        style={{ backgroundColor: colors[colorIndex] }}
        onClick={ () => nextColor() }
      >
          Click me to change my color!
        </button>
    )
  }
}

ColorBox.contextType = MyContext;

export default ColorBox;