import {Navigate, Route, Routes } from "react-router-dom";
import Customize from "../pages/Custom/Customize.jsx";


const Routing = ( ) => (
  <Routes>
     <Route
        path="/"
        element={<Navigate to="/custom" replace />} 
      />
      <Route
        path="/custom" 
        element= {<Customize />}
      />
      {/* <Route
        path="/customs/:band?/:crown?" 
        element= {<Customize />}
      /> */}
  </Routes>
);

export default Routing;