import { useState } from "react";
import Header from "./components/header/Header.jsx";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  function handleMenu() {
    setMenuIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <Header menuIsOpen={menuIsOpen} onMenu={handleMenu} />
    </>
  );
}

export default App;
