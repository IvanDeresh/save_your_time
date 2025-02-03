import "./App.css";
import TheFooter from "./components/layout/TheFooter";
import TheHeader from "./components/layout/TheHeader";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Todo from "./pages/Todo";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="max-container font-nunito">
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;
