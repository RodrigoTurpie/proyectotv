import Admin from "../Admin/Admin";
import Card from "../Card/Card";
import DetailsCard from "../DetailsCard/DetailsCard";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import SearchChannel from "../SearchChannel/SearchChannel";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="cards" element={<Card />} />
          <Route path="search/:id" element={<SearchChannel />} />
          <Route path="admin" element={<Admin />} />
          <Route path="details/:id" element={<DetailsCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
