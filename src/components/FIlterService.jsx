import React, { useContext } from "react";
import { Divider, Center } from "@chakra-ui/react";
import ServiceContext from "../context/ServicesContext";
function FIlterService() {
	const { servicesList, setServicesList, loadingService, setLoadingService } =
		useContext(ServiceContext);
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const filterByHall = async hall => {
		setLoadingService(true);
		try {
			setServicesList([]);
			const res = await fetch(`${baseUrl}services/all?hall=${hall}`, {
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

	const halls = [
		"Eninjoku",
		"Jaja",
		"Moremi",
		"Madam tinubu",
		"Kofo",
		"Biobaku",
		"Makama",
		"Mariere",
		"Amina",
		"Fagunwa",
	];
	return (
		<div className="flex items-center gap-x-5 mt-7">
			<h2>FIlter Service</h2> |
			<div className="flex justify-between gap-x-16 overflow-x-auto">
				{halls.map((hall, index) => {
					return (
						<button
							key={index}
							onClick={() => filterByHall(hall.toLocaleLowerCase())}
						>
							{hall}
						</button>
					);
				})}
				<button onClick={() => filterByHall("")}>Clear</button>
			</div>
		</div>
	);
}

export default FIlterService;
