// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark, toggleTheme } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div className= 'toggle-theme' onClick={toggleTheme} >{theme.name} theme</div>
//     );
//   }
// }

// export default ThemeToggle;
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return ( <div onClick={toggleTheme}>Toggle the theme</div>);
};
 
export default ThemeToggle;