import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState(true)

  const handleClick = ()=>{
    setAppClass(!appClass)
  }
 

  return (
    <div className={appClass ? "App light":"App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} >{appClass ? 'Light Mode':'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;





































// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const [isDarkTheme, setIsDarkTheme] = useState(true);
//   const appClass = isDarkTheme ? "App dark" : "App light";

//   function handleClick() {
//      setIsDarkTheme((isDarkTheme) => !isDarkTheme)
//   }

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleClick}>{isDarkTheme ? "Light Mode" : "Dark Mode"} </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
