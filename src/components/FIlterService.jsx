import React, { useContext } from "react";
import { Divider, Center } from "@chakra-ui/react";
import ServiceContext from "../context/ServicesContext";
function FIlterService() {
	const { servicesList, setServicesList } = useContext(ServiceContext);
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const filterByHall = async hall => {
		setServicesList([]);
		const res = await fetch(`${baseUrl}services/all?hall=${hall}`, {
			method: "get",
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();
		setServicesList(data);
		console.log(servicesList);
	};

	const halls = [
		"Eninjoku",
		"Jaja",
		"Moremi",
		"Madam tinubu",
		"Kofo",
		"Biobaku",
		"Makama",
		"Amina",
		"Fagunwa",
	];
	return (
		<div className="flex items-center gap-x-5">
			<h2>FIlter Service</h2> |
			<div className="flex justify-between gap-x-16 flex-nowrap">
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
			</div>
		</div>
	);
}

export default FIlterService;
