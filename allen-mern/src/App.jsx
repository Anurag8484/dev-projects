import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Landing } from "./components/Landing";
function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path="/"/>
      </Routes>
    </BrowserRouter>
  )



}



export default App;
