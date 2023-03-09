import { createContext, useState } from "react";
const ServiceContext = createContext();

export function ServiceProvider({ children }) {
	const [servicesList, setServicesList] = useState([]);
	return (
		<ServiceContext.Provider value={{ servicesList, setServicesList }}>
			{" "}
			{children}{" "}
		</ServiceContext.Provider>
	);
}

export default ServiceContext;
