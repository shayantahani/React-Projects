import React from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import Teams from "./Components/Teams";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Cards />
      <Search />
      <Teams />
      <Footer/>
    </div>
  );
};

export default App;
