import React from "react";
import Navbar from "../../screens/navbar/navbar";
import Hero from "../../screens/LandingPage/hero";
import Blog from "../../screens/LandingPage/blog";
import Footer from "../../screens/footer/footer";
import Cards from "../../screens/LandingPage/cards";
export default async function page() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      {/* <Cards />
      <Blog />
      <Footer /> */}
    </div>
  );
}
