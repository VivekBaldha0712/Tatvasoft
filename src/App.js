import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Counter from './component/Counter';
import { useState } from 'react';
import About from './component/About';

function App() {
  const [page,setPage]=useState(0);
  // if (page==0) {
  //   return (<Home/>);
  // }
  // else{
  //   return (<About/>);
  // }
  
  return (
      <div className="App">
    <button onClick={()=>page==0?setPage(1):setPage(0)}>Click me</button>

      {page==0?<About/>:<Home/>}
      
     </div>
   );
}

export default App;
