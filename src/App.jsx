import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CourseList from "./components/course-list/CourseList.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isOnSearch, setIsOnSearch] = useState(false);

  function handleMenu() {
    setMenuIsOpen((isOpen) => !isOpen);
  }
  return (
    <>
      <Navigation isOpen={menuIsOpen} onMenu={handleMenu} />
      <Header menuIsOpen={menuIsOpen} onMenu={handleMenu} />
      <main>
        <Hero />
        <CourseList isOnSearch={isOnSearch} setIsOnSearch={setIsOnSearch} />
      </main>
    </>
  );
}

export default App;
