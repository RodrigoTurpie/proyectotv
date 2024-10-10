import Admin from "../Admin/Admin";
import Card from "../Card/Card";
import DetailsCard from "../DetailsCard/DetailsCard";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import "./App.css";
import { Routes, Route } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Layout />}>
        <Route index="index" element={<Main />}/>
          <Route exact path="/cards" element={<Card />} />
          <Route exact path="/search" element={<Card />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/details/:id" element={<DetailsCard />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
