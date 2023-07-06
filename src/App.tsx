import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/root.tsx";
import About from "./pages/about.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
