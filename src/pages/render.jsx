import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import "../styles/global.css";

export function renderPage(Page) {
  const root = document.getElementById("root");
  if (!root) throw new Error("Élément #root introuvable");
  createRoot(root).render(
    <React.StrictMode>
      <Navbar />
      <main><Page /></main>
      <Footer />
      <WhatsAppButton />
    </React.StrictMode>
  );
}
