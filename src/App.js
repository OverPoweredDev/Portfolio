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
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
