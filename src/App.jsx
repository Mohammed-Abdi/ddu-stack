import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CourseList from "./components/course-list/CourseList.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Faq from "./components/faq/FAQ.jsx";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleMenu() {
    setMenuIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <Navigation isOpen={menuIsOpen} onMenu={handleMenu} />
      <Header menuIsOpen={menuIsOpen} onMenu={handleMenu} />
      <main>
        <Hero />
        <CourseList />
        <About />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
