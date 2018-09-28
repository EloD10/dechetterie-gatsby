import "../../output.css";

import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";

export default ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
