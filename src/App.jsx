import {Routes,Route} from "react-router-dom"
import Edit from "./components/Edit";
import Home from "./components/Home";
import View from "./components/View";

function App() {
  return (
<>
  <Routes>
    <Route path="*" element={<h1>Oops it's error kindly go back.</h1>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/view/:id" element={<View/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>
    
    
    </Routes>
</>
  );
}

export default App;
