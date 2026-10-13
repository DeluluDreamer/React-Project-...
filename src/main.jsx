import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import { MessageProvider } from "./context/MessageContext";
import App from "./App";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessageProvider>
      <StudentProvider>
        <BrowserRouter><App /></BrowserRouter>
      </StudentProvider>
    </MessageProvider>
  </React.StrictMode>
);
