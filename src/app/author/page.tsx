"use client";

import Navbar from "../components/Navbar";
import Author from "../components/Author";
import Footer from "../components/Footer";

export default function AuthorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Author />
      </main>
      <Footer />
    </>
  );
}
