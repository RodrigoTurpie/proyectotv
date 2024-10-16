import Admin from "../Admin/Admin";
import Card from "../Card/Card";
import { UserProvider } from "../Context/UserContext";
import DetailsCard from "../DetailsCard/DetailsCard";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import NotFound from "../NotFound/NotFound";
import SearchChannel from "../SearchChannel/SearchChannel";
import "./App.css";
import { Routes, Route } from "react-router-dom";


function App() {

  const nombre = ' Jorge Sepulveda'

  return (
    <div className="App">
      <UserProvider value={{name:nombre}}>
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Card />} />
            <Route path="search/*" element={<SearchChannel nombre={nombre} />} />
            <Route path="admin" element={<Admin />} />
            <Route path="details/:id" element={<DetailsCard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        </UserProvider>
    
    </div>
  );
}

export default App;
