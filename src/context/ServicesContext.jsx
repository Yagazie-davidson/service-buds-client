import { createContext, useState } from "react";
const ServiceContext = createContext();

export function ServiceProvider({ children }) {
	const [servicesList, setServicesList] = useState([]);
	const [loadingService, setLoadingService] = useState(false);
	const [addServiceState, setAddServiceState] = useState(false);
	const getServices = async baseUrl => {
		setLoadingService(true);
		try {
			const res = await fetch(`${baseUrl}services/all`, {
				method: "get",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			setServicesList(data);
			setLoadingService(false);
		} catch {
			setLoadingService(false);
		}
	};
	return (
		<ServiceContext.Provider
			value={{
				servicesList,
				setServicesList,
				loadingService,
				setLoadingService,
				addServiceState,
				setAddServiceState,
				getServices,
			}}
		>
			{" "}
			{children}{" "}
		</ServiceContext.Provider>
	);
}

export default ServiceContext;
