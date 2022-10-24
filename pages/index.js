import Head from "next/head";
import Image from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";




export default function Home() {

  return (
    <div id="app">
      <Head>
        <title>eshwars portfolio</title>{" "}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&family=Alkalami&family=Amatic+SC:wght@700&family=Caveat&family=Cedarville+Cursive&family=Comforter+Brush&family=Dancing+Script&family=Edu+NSW+ACT+Foundation&family=Fasthand&family=Fuzzy+Bubbles&family=Grape+Nuts&family=Inconsolata:wght@300&family=Inspiration&family=Island+Moments&family=Josefin+Sans:wght@200&family=Nanum+Gothic+Coding:wght@700&family=Neucha&family=Open+Sans:ital@1&family=Pacifico&family=Permanent+Marker&family=Playfair+Display:ital,wght@1,500&family=Roboto+Mono:wght@500&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
    </div>
  );
}
