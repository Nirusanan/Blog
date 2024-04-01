import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Createpost from "./screens/createpost/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";
import Editpost from "./screens/editpost/Editpost";
import './App.css'
import { useThemeContext } from './hooks/useThemeContext';
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import Navbar from "./components/navbar/Navbar";
import ThemeSwitch from "./components/switch/Themeswitch";

function App() {


  const { theme } = useThemeContext()

  const { user, isAuthReady } = useAuthContext()

  return (
    <div className={`App ${theme}bg`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSwitch />
        <div className="container">
          {isAuthReady && <Routes>
            <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path="/create" element={user ? <Createpost /> : <Navigate to='/login' />} />
            <Route path="/post/:id" element={user ? <Postdetail /> : <Navigate to='/login' />} />
            <Route path="/edit/:id" element={user ? <Editpost /> : <Navigate to='/login' />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />
          </Routes>}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
