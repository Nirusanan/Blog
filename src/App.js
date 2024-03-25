import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Createpost from "./screens/createpost/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";
import Editpost from "./screens/editpost/Editpost";
import './App.css'
import { useThemeContext } from './hooks/useThemeContext';
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";

function App() {


  const {theme} = useThemeContext()

  return (
    <div className={`App ${theme}bg`}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Createpost />} />
            <Route path="/post/:id" element={<Postdetail />} />
            <Route path="/edit/:id" element={<Editpost/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
