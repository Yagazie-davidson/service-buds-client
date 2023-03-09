import { createContext, useState } from "react";
const ServiceContext = createContext();

export function ServiceProvider({ children }) {
	const [servicesList, setServicesList] = useState([]);
	const [loadingService, setLoadingService] = useState(false);
	const [addServiceState, setAddServiceState] = useState(false);

	return (
		<ServiceContext.Provider
			value={{
				servicesList,
				setServicesList,
				loadingService,
				setLoadingService,
				addServiceState,
				setAddServiceState,
			}}
		>
			{" "}
			{children}{" "}
		</ServiceContext.Provider>
	);
}

export default ServiceContext;
