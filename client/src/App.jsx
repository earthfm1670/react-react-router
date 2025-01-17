import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductForm from "./components/CreateProductForm";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <div className="App">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<CreateProductForm />} />
            <Route
              path="/products/view/:productId"
              element={<ViewProductPage />}
            />
            <Route
              path="/products/edit/:productId"
              element={<EditProductPage />}
            />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
