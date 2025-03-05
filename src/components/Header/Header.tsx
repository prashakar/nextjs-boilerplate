import React from "react";
import data from "../../../data/data";
import Navigation from "../Navigation/Navigation";

function Header() {
  const { sitename, sitetagline, siteurl } = data;
  return (
    <section className="container mx-auto p-4 text-center"></section>
  );
}

export default Header;
