import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import LinkTree from "./pages/LinkTree";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden flex flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text font-mono">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/home" element={<Portfolio />} />
            <Route path="/about" element={<Portfolio />} />

            <Route path="/contact" element={<LinkTree />} />
            <Route path="/links" element={<LinkTree />} />
            <Route path="/linktree" element={<LinkTree />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
