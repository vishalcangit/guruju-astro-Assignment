import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllReviews from "./pages/AllReviews";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="all-reviews"  element={<AllReviews />} />
    </Routes>
  );
}

export default App;
