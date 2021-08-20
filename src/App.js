import React from 'react';
import Card from './Card';
import Comedy from './Comedy';
import Sdata from './Sdata';
import Drama from './Drama';

// without if else condition code is look like this

// function App(){
//   return(
//     <>
//       <h1 className = "heading_style">List of TOP 5 Serials on SABTV</h1>
    
//       {Sdata.map((value) =>{
//         return(
//           <Card 
//             key={value.id}
//             imagesrc = {value.imagesrc}
//             title = {value.title}
//             sname = {value.sname}
//             link = {value.link}
//           />
//         );
//       })}
//     </>
//   );
// }

// after applying  if else condition code is given 

// const favSerial =  "";

// const FavS = ()=>{
//   if (favSerial === "comedy"){
//     return(
//       <Comedy />
//     );
//   }else{
//     return(
//       <Drama />
//     );
//   }
// }

// const App = () =>{
//   return(
//     <> <h1 className = "heading_style">List of TOP 5 Serials on SABTV</h1>
//     <FavS />
//   </>
//   );
// }


// ternery operatior condition 

const favSerial = "comedy";
const App = () => {
  return (
    <>
    <h1 className = "heading_style">List of TOP 5 Serials on SABTV</h1>

    {favSerial === "comedy" ? <Comedy /> : <Drama/>}
    </>
  );
};
export default App;