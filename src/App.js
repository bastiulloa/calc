
import './App.css';

import RenderButtons from './components/NumberButtons/RenderButtons';
import RenderOpButtons from './components/OperationButtons/RenderOpButtons.js';
import RenderScreen from './components/Screen/RenderScreen';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  

  return (
    <div className="App">
      
      <header className="App-header">
        <p>Le Calculator</p>
      </header>
      
      <div className="calcFrame">
        
        <RenderScreen value={value}/>

        <RenderButtons setValue={setValue}/>

        <RenderOpButtons setValue={setValue}/>

      </div>

    </div>
  );
}

export default App;
