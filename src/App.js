import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
    return (
      <>
      
  <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <Home />
      <About />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </>
  )
}

export default App;