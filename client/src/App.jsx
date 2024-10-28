import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/product/:Id" element={<ViewProductPage />} />
          <Route path="/product/edit/:Id" element={<EditProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
