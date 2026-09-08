import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import PublicService from "./components/PublicService";
import ForTabon from "./components/ForTabon";
import Updates from "./components/Updates";
import Media from "./components/Media";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <PublicService />
        <ForTabon />
        <Updates />
        <Media />
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}