import Home from "./pages/Home";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Subcategory from "./components/Subcategory/Subcategory";
import FlashSale from "./components/FlashSale/FlashSale";
import BestSelling from "./components/BestSelling/BestSelling";
import Products from "./components/Products/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/banner" element={<Banner />}></Route>
      <Route path="/category" element={<Category />}></Route>
      <Route path="/subcategory" element={<Subcategory />}></Route>
      <Route path="/flashsale" element={<FlashSale />}></Route>
      <Route path="/bestselling" element={<BestSelling />}></Route>
      <Route path="/product" element={<Products />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
