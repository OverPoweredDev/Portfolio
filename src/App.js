import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text font-mono">
        <Navbar />
        <Routes>
          {/* Default portfolio page */}
          <Route path="/" element={<Portfolio />} />
          {/* 404 Not Found page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
