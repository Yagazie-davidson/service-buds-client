import { createContext, useState } from "react";
const ServiceContext = createContext();

export function ServiceProvider({ children }) {
	const [servicesList, setServicesList] = useState([]);
	const [loadingService, setLoadingService] = useState(false);
	return (
		<ServiceContext.Provider
			value={{
				servicesList,
				setServicesList,
				loadingService,
				setLoadingService,
			}}
		>
			{" "}
			{children}{" "}
		</ServiceContext.Provider>
	);
}

export default ServiceContext;
