import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import AgeVerificationModal from './components/AgeModal/AgeModal';
import Home from "./Pages/Home/Home";
import Reg from "./Pages/Reg/Reg";
import Login from "./Pages/Login/Login";
import Favorites from "./Pages/Favorites/Favorites";
import Basket from "./Pages/Basket/Basket";
import Contacts from "./components/Contacts/Contacts";
import IShop from "./Pages/IShop/IShop";
import Review from "./Pages/Review/Review";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Garants from "./Pages/Garants/Garants";
import Limitation from "./components/Limitation/Limitation";

export default function App() {
  const [isAgeVerificationModalOpen, setIsAgeVerificationModalOpen] = useState(true);

  const handleAgeVerificationConfirm = () => {
    localStorage.setItem('isOver18', 'true');
    setIsAgeVerificationModalOpen(false);
  };

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/reg", element: <Reg /> },
    { path: "/login", element: <Login /> },
    { path: "/fav", element: <Favorites /> },
    { path: "/bask", element: <Basket /> },
    { path: "/IShop", element: <IShop /> },
    { path: "/review", element: <Review /> },
    { path: "/contacts", element: <Contacts /> },
    { path: "/AllProducts", element: <AllProducts /> },
    { path: "/Garant", element: <Garants /> },
    { path: "/limitation", element: <Limitation /> },
  ];

  return (
    <>
      <AgeVerificationModal
        isOpen={isAgeVerificationModalOpen}
        onClose={() => setIsAgeVerificationModalOpen(false)}
        onConfirm={handleAgeVerificationConfirm}
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

// import Reg from "./Pages/Reg/Reg";
// import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import Favorites from "./Pages/Favorites/Favorites";
// import { Layout } from "./Layout/Layout";
// import { Routes, Route } from "react-router-dom";
// import Basket from "./Pages/Basket/Basket";

// import Contacts from "./components/Contacts/Contacts";
// import IShop from "./Pages/IShop/IShop";
// import Review from "./Pages/Review/Review";
// import AllProducts from "./Pages/AllProducts/AllProducts";
// import AgeVerificationModal from './components/AgeModal/AgeModal';
// import Garants from "./Pages/Garants/Garants";
// import { useState } from "react";

// export default function App() {


//   const [isAgeVerificationModalOpen, setIsAgeVerificationModalOpen] = useState(true);

//   const handleAgeVerificationConfirm = () => {
//     localStorage.setItem('isOver18', 'true');
//     setIsAgeVerificationModalOpen(false);
//   };
// const allPages = []
//   return (
//     <><AgeVerificationModal
//       isOpen={isAgeVerificationModalOpen}
//       onClose={() => setIsAgeVerificationModalOpen(false)}
//       onConfirm={handleAgeVerificationConfirm} />


//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="/reg" element={<Reg />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/fav" element={<Favorites />} />
//           <Route path="/bask" element={<Basket />} />
//           <Route path="/IShop" element={<IShop />} />
//           <Route path="/review" element={<Review />} />
//           <Route path="/contacts" element={<Contacts />} />
//           <Route path="/AllProducts" element={<AllProducts />} />
//           <Route path="/Garant" element={<Garants />} />

//         </Route>
//       </Routes>
//     </>
//   );
// }

