import { createContext, useState } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import { AdmiPanel } from "./authentication/AdmiPanel";
import { Login } from "./authentication/Login";
import Debounce from "./debounce/Debounce";
import { Filter } from "./filter/Filter";
import { Landing } from "./Landing";
import { Cart } from "./shopping-cart/Cart";
import { ProductView } from "./shopping-cart/ProductView";
export const dataContaxt = createContext();
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/task1Login" element={<Login />} />
      <Route path="/Dashboard" element={<AdmiPanel />} />
      <Route path="/Products" element={<ProductView />} />
      <Route path="/Cart" element={<Cart />}></Route>
      <Route path="/Filter" element={<Filter />} />
      <Route path="/Debounce" element={<Debounce />} />
    </>
  )
);
function App() {
  const [user, setUser] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [product, setProduct] = useState([]);
  const [productClone, setProductClone] = useState([]);
  const [userClone, setUserClone] = useState([]);
  return (
    <div className="App">
      <dataContaxt.Provider
        value={{
          user,
          setUser,
          cartArr,
          setCartArr,
          product,
          setProduct,
          productClone,
          setProductClone,
          userClone,
          setUserClone,
        }}
      >
        <RouterProvider router={router} />
      </dataContaxt.Provider>
    </div>
  );
}

export default App;
