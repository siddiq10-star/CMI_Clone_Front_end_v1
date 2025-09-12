// src/App.jsx
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Buy from "./Components/Buy";
import ProductDetails from "./Components/ProductDetails";
import BuyForm from "./Components/BuyForm";
import Sell from "./Pages/Sell";
import PageNotFound from "./Components/PageNotFound";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductsPage from "./Pages/ProductsPage"; // ✅ Import the new component

function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "70px" }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* About */}
          <Route
            path="/about"
            element={
              <div className="container mt-4">
                <About />
              </div>
            }
          />

          {/* Sell */}
          <Route
            path="/sell"
            element={
              <div className="container mt-4">
                <Sell />
              </div>
            }
          />
          <Route path="/sell/:categoryId" element={<Sell />} />

          {/* Buy */}
          <Route
            path="/buy"
            element={
              <div className="container mt-4">
                <Buy />
              </div>
            }
          />
          <Route
            path="/buy-form"
            element={
              <div className="container mt-4">
                <BuyForm />
              </div>
            }
          />

          {/* Product Details */}
          <Route
            path="/productDetails/:id"
            element={
              <div className="container mt-4">
                <ProductDetails />
              </div>
            }
          />

          {/* Brand Products Page ✅ Add this route */}
          <Route
            path="/brand/:brandId"
            element={
              <div className="container mt-4">
                <ProductsPage />
              </div>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <div className="container mt-4">
                <Contact />
              </div>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="container mt-4">
                <PageNotFound />
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
