import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/AdminPortal";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={<Shop />}
        />

        <Route
          path="/admin"
          element={<AdminPortal />}
        />
      </Routes>
    </>
  );
}

export default App;