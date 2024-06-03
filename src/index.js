//index.js
import React from "react"
import reactDOM from "react-dom/client"
import App from "./App"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
