import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Form from "./components/Form/Form";
import BrandForm from "./components/Brand/Brand";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetail />}/>
      <Route path="/create" element={<Form />}/>
      <Route path="/brand" element={<BrandForm />}/>
    </Routes>
  </>
  );
}

export default App;
