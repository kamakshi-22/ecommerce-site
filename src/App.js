import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home/Home"
import {Products} from "./pages/Products/Products"
import {Product} from "./pages/Product/Product"
import {Header} from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
