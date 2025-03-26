import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./components/CategoryPage";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import About from "./pages/About";
import PrivacyPolicy from "./pages/privacy";
import SiteMap from "./pages/SiteMap";

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/sitemap" element={<SiteMap/>} />
        <Route path="/thanks" element={<Thanks/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
