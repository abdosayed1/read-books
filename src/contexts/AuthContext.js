// import React, { Component, createContext } from 'react';

// export const AuthContext = createContext();

// class AuthContextProvider extends Component {
//   state = {
//     isAuthenticated: false
//   }
//   toggleAuth = () => {
//     this.setState({ isAuthenticated: !this.state.isAuthenticated });
//   }
//   render() { 
//     return (
//       <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
//         {this.props.children}
//       </AuthContext.Provider>
//     );
//   }
// }
 
// export default AuthContextProvider;

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

  const [isAuthenticated, setAuth] = useState(false);

  const toggleAuth = () => {

    setAuth(!isAuthenticated);

  }
  return ( 
    <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
      {props.children}
    </AuthContext.Provider>
   );
}
 
export default AuthContextProvider;