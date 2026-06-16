"use client";

import Navbar from "../components/Navbar";
import Author from "../components/Author";
import Footer from "../components/Footer";

export default function AuthorPage() {
  return (
    <>
      <Navbar />
      <main
        className="m-0 min-h-screen p-0"
        style={{ paddingTop: 72 }}
      >
        <Author />
      </main>
      <Footer />
    </>
  );
}
