import { BrowserRouter as Router, Routes, Route,  Outlet, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import { useEffect } from "react";
import './index.css'
import TechBloom from "./Pages/TechBloom/HomeTech";
import Zentara from "./Pages/Zentara/HomeZentara";
import Synergio from "./Pages/Synergio/HomeSynergio";
import NotFound from "./Pages/Eror";


// ✅ Komponen untuk mengupdate title
const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - Adinata Group",
      "/Zentara": "Zentara - Adinata Group",
      "/TechBloom": "TechBloom - Adinata Group",
      "/Synergio": "Synergio - Adinata Group",
    };
    document.title = titles[location.pathname] || "Adinata Group";
  }, [location]);

  return null;
};

// ✅ Layout utama
const Layout = () => {
  return (
    <>
      <TitleUpdater />
      <Outlet />
    </>
  );
};

// ✅ Komponen utama App
function App() {
  return (
    <Router>
      <Routes>
        {/* Layout sebagai wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Zentara" element={<Zentara />} />
          <Route path="Synergio" element={<Synergio />} />
          <Route path="TechBloom" element={<TechBloom />} />
          {/* Catch all not found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}





// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/TechBloom" element={<HomeTech/>} />
//         <Route path="/Zentara" element={<HomeZentara/>} />
//         <Route path="/Synergio" element={<HomeSynergio/>} />

//       </Routes>
//     </Router>
//   )
// }

export default App
