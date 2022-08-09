import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import DetailPage from "./components/DetailPage";
import Notfound from "./components/Notfound";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/about/*" element={<AboutUs />}>
            <Route path="insta" element={<p>social-media-link-insta</p>} />
            <Route path="telegram" element={<p>social-media-link-telegram</p>}/>
            <Route path="twitter" element={<p>social-media-link-twitter</p>} />
          </Route>
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
