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
	const {
		servicesList,
		setServicesList,
		loadingService,
		setLoadingService,
		getServices,
	} = useContext(ServiceContext);
	const baseUrl = import.meta.env.VITE_BASE_URL;

	useEffect(() => {
		getServices(baseUrl);
	}, []);
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
						{!loadingService ? (
							servicesList.length > 0 &&
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
							})
						) : (
							<Tr>
								<Td>Loading...</Td>
								<Td>Loading...</Td>
								<Td>Loading...</Td>
								<Td>Loading...</Td>
								<Td>Loading...</Td>
							</Tr>
						)}
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
