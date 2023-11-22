
import Reg from "./Pages/Reg/Reg";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Favorites from "./Pages/Favorites/Favorites";
import { Layout } from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Basket from "./Pages/Basket/Basket";

import Contacts from "./components/Contacts/Contacts";
import IShop from "./Pages/IShop/IShop";
import Review from "./Pages/Review/Review";
import AllProducts from "./Pages/AllProducts/AllProducts";
import AgeVerificationModal from './components/AgeModal/AgeModal';
import Garants from "./Pages/Garants/Garants";
import { useState } from "react";

export default function App() {


  const [isAgeVerificationModalOpen, setIsAgeVerificationModalOpen] = useState(true);

  const handleAgeVerificationConfirm = () => {
    localStorage.setItem('isOver18', 'true');
    setIsAgeVerificationModalOpen(false);
  };
const allPages = []
  return (
    <><AgeVerificationModal
      isOpen={isAgeVerificationModalOpen}
      onClose={() => setIsAgeVerificationModalOpen(false)}
      onConfirm={handleAgeVerificationConfirm} />


      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/login" element={<Login />} />
          <Route path="/fav" element={<Favorites />} />
          <Route path="/bask" element={<Basket />} />
          <Route path="/IShop" element={<IShop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/Garant" element={<Garants />} />

        </Route>
      </Routes>
    </>
  );
}

