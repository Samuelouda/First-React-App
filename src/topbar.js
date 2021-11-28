import React  from 'react';
import classes from './topbar.module.css';


const Topbar = ( ) => { 
      return(
   <header className="App-header">
        <nav className={classes.Topbar}>
          <img src="./images/image4.png" alt= "Amazon Logo"/>
        </nav>
   </header>

      );

}
export default Topbar;