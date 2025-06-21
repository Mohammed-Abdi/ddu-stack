import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function handleMenu() {
    setMenuIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <Header menuIsOpen={menuIsOpen} onMenu={handleMenu} />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
