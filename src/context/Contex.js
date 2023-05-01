import React from 'react';
// import { useContext } from 'react';
import { useState } from 'react';

export const Appcontext = React.createContext();
const Contex = ({children}) => {

  const [clickandopen,setClickandopen] = useState(false);

  const isopen = () => {
    setClickandopen(true);
  }
   

  const isclose = () => {
    setClickandopen(false);
  }



    return (
        <div>
            <Appcontext.Provider value={{clickandopen,isopen,isclose}}>
                    {children}
            </Appcontext.Provider>
            
        </div>

    );
};


// export const Globalcontex = () => {
//     return useContext(Appcontext)
//   }

export default Contex;

