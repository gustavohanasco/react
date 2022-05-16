import React, { useState } from 'react';

import './App.css';

const App = () => {
 const [message, setmessage] =useState( "hello word"); 

   return ( 
     <> 
       <div className="container">{message}</div>
       <button onClick={() => setmessage("teste")}>mudar mensa
       gem</button>
       </>
   );
 
};
export default App;

