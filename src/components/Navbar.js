// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
// import { AuthContext } from '../contexts/AuthContext';

// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext>{(authContext) => (
//         <ThemeContext.Consumer>{(themeContext) => {
//           const { isAuthenticated, toggleAuth } = authContext;
//           const { isLightTheme, light, dark } = themeContext;
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <div>
//                 { isAuthenticated ? 'Logged in' : 'Logged out' }
//               </div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//                 <li onClick={toggleAuth}>{isAuthenticated ? 'logout' : 'login'}</li>
//               </ul>
//             </nav>
//           )
//         }}</ThemeContext.Consumer>
//       )}</AuthContext>
//     );
//   }
// }
 
// export default Navbar;

import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';
import ThemeToggle from './ToggleTheme';

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div>
        { isAuthenticated ? 'Logged in' : 'Logged out' }
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li onClick={toggleAuth}>{isAuthenticated ? 'logout' : 'login'}</li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>
  );
}
 
export default Navbar;