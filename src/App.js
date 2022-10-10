import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Index";
import './index.css';
import Home from "./Pages/Home/Index";
import LandingPage from "./Pages/LandingPage";
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
  <Route path ='/' element = {<LandingPage/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
