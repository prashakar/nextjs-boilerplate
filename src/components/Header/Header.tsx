import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

function Header() {
  const { sitename, sitetagline, siteurl, sitelogo } = data;
  return (
    <section className="container mx-auto p-4 text-center">
      <img src={sitelogo} alt={sitename} className="w-10 h-10" />
    </section>
  );
}

export default Header;
