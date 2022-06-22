import FeaturedProducts from './FeaturedProducts';
import './App.css';
import React, { useState } from 'react'; 
import { Button } from './Button.js'; 
import { ListComponent } from './ListComponent.js'; 



function App() {
  const [components, setComponents] = useState(["Monday"]);
  const [componentNames, ] = useState(["Tuesday","wednesday","thursday","friday","saurday","sunday"]);

  function addComponent() {
    if (componentNames.length > 0) { 
      
      setComponents([...components, componentNames[0]]);
      componentNames.splice(0, 1);
      
    } else { 
      
      window.alert("No more days to add!");
      
    } 
    
  } 
    
    
  
  return (
    <React.Fragment>
    <div className='App'>
      <FeaturedProducts />
    </div>

<div> 
    <Button onClick={addComponent} text="Add"/>
    <div>
      <ul>
        
      
      {components.map((item, i) => (<li>
        <div classnme="card-container" style={{
          width:"25%",
          height:"25%",

          
          border:"solid 3px #d3d3d3",
          margin:"10px"
        }}>
        
        
         <ListComponent text={item} />
         </div>
         </li>
      ))}

      </ul>
      
    
      </div>
    
</div>






</React.Fragment>

  );
}
export default App;