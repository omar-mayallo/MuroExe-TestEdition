import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//Router
import { BrowserRouter } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store/store";
import { PersistGate } from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
