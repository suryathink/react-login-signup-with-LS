import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Login from "./Components/Login/Login";
import { Route, Routes } from "react-router-dom";
import LoggedInUserDetails from "./Components/LoggedInUserDetails/LoggedInUserDetails";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<LoggedInUserDetails />} />
        <Route path="*" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
