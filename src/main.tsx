import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";
import { AppRouter } from "./routes";
// import Fallback from './components/dom/Fallback'
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppRouter />
	</React.StrictMode>,
);
