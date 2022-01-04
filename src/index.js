import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CCO from "./routes/cco";
import Shedule from "./routes/shedule";
import Barbershop from "./routes/barber";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cco" element={<CCO />} />
      <Route path="/shedule" element={<Shedule />} />
      <Route path="/barber" element={<Barbershop />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
