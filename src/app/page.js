import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
