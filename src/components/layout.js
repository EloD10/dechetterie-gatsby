import "../../output.css";

import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default ({ children }) => (
  <div className="h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);
