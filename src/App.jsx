import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import CourseList from "./components/course-list/CourseList.jsx";

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
        <CourseList />
      </main>
    </>
  );
}

export default App;
