
import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";

export function renderPage(Page) {
  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </React.StrictMode>
  );
}
