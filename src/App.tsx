import "./App.css";
import Router from "./components/router.tsx";
import Route from "./components/route.tsx";
import Root from "./pages/root.tsx";
import About from "./pages/about.tsx";

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
