import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ErrorPage from "./pages/ErrorPage";
import { ServiceProvider } from "./context/ServicesContext";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/services",
		element: <Services />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider>
			<ServiceProvider>
				<RouterProvider router={router} />
			</ServiceProvider>
		</ChakraProvider>
	</React.StrictMode>
);
