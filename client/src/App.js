import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";
import Privateroute from "./routes/privateroute";
import { useEffect } from "react";
import { getCurrent } from "./Redux/Action/userAction";
import { useDispatch } from "react-redux";
import Addmovie from "./Components/Addmovie";
import Movielist from "./Components/Movielist";
import Editmovie from "./Components/Editmovie";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent);
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addmovie" element={<Addmovie />}></Route>
        <Route path="/edit/:id" element={<Editmovie></Editmovie>}></Route>

        <Route
          path="/profile"
          element={
            <Privateroute>
              <Profile />
            </Privateroute>
          }
        ></Route>
        <Route
          path="/movielist"
          element={
            <Privateroute>
              <Movielist />
            </Privateroute>
          }
        ></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
