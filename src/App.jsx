import "./App.css";
import { Navbar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Users from "./components/pages/Users";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import UserForm from "./components/pages/UserForm";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/form" element={<UserForm />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
