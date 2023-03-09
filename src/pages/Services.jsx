import React, { useState } from "react";
import AddServiceForm from "../components/AddServiceForm";
import Button from "../components/Button";
import FIlterService from "../components/FIlterService";
import ServiceTable from "../components/ServiceTable";
import Layout from "../Layout/Layout";

function Services() {
	const [addServiceState, setAddServiceState] = useState(false);
	const toggleAddServiceForm = () => {
		setAddServiceState(prevState => !prevState);
	};
	return (
		<div>
			<Layout>
				<main className="mt-10">
					<h1 className="text-center font-bold text-3xl">Explore Services</h1>
					<ServiceTable />
					<Button onClick={toggleAddServiceForm} text={"Add your service"} />
					{addServiceState && <AddServiceForm />}
				</main>
			</Layout>
		</div>
	);
}

export default Services;
