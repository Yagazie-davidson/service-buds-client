import React, { useState, useEffect, useContext } from "react";
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import ServiceContext from "../context/ServicesContext";

function ServiceTable() {
	const { servicesList, setServicesList } = useContext(ServiceContext);
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const getServices = async () => {
		try {
			const res = await fetch(`${baseUrl}services/all`, {
				method: "get",
				headers: { "Content-Type": "application/json" },
			});
			const data = await res.json();
			setServicesList(data);
			setServicesListt(data);
		} catch {}
	};

	useEffect(() => {
		getServices();
	}, []);
	console.log(servicesList);
	return (
		<div className="mt-10">
			<TableContainer>
				<Table variant="simple">
					<TableCaption>Services</TableCaption>
					<Thead>
						<Tr>
							<Th>Service</Th>
							<Th>Name</Th>
							<Th>Hall</Th>
							<Th>Room</Th>
							<Th>Phone</Th>
						</Tr>
					</Thead>
					<Tbody>
						{servicesList.length > 0 &&
							servicesList.map(service => {
								return (
									<Tr key={service.id}>
										<Td>{service.service}</Td>
										<Td>
											{service.firstName} {service.lastName}
										</Td>
										<Td>{service.hall} Hall</Td>
										<Td>{service.room}</Td>
										<Td>{service.phone}</Td>
									</Tr>
								);
							})}
					</Tbody>
					<Tfoot>
						<Tr>
							<Th>Service</Th>
							<Th>Name</Th>
							<Th>Hall</Th>
							<Th>Room</Th>
							<Th>Phone</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</div>
	);
}

export default ServiceTable;
