import React, { useContext, useState } from "react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Select,
} from "@chakra-ui/react";
import Button from "./Button";
import ServiceContext from "../context/ServicesContext";
import BeatLoader from "react-spinners/BeatLoader";

function AddServiceForm() {
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const { setAddServiceState, getServices } = useContext(ServiceContext);
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [service, setService] = useState("");
	const [phone, setPhone] = useState("");
	const [hall, setHall] = useState("");
	const [room, setRoom] = useState("");
	const [loading, setLoading] = useState(false);
	const addService = async () => {
		setLoading(true);
		try {
			const id = Math.floor(100000 + Math.random() * 900000);
			const date = `${new Date().getDate()}-${
				new Date().getMonth() + 1
			}-${new Date().getFullYear()}`;
			const payload = {
				id,
				email: email.toLowerCase(),
				firstName: firstName.toLowerCase(),
				lastName: lastName.toLowerCase(),
				service: service.toLowerCase(),
				phone,
				hall: hall.toLowerCase(),
				room: room.toLowerCase(),
				date,
			};
			const res = await fetch(`${baseUrl}services/new`, {
				method: "post",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});
			const data = await res.json();
			setLoading(false);
			console.log(data);
			setAddServiceState(false);
			alert(data.message);
			getServices(baseUrl);
		} catch (error) {
			setLoading(false);
			console.log(error);
			setAddServiceState(false);
		}
		set;
		setEmail("");
		setFirstName("");
		setLastName("");
		setService("");
		setPhone("");
		setHall("");
		setRoom("");
	};
	return (
		<main className="mt-10 mr-0 sm:mr-24">
			<FormControl>
				<FormLabel>Email address</FormLabel>
				<Input
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<FormHelperText>We'll never share your email.</FormHelperText>
				<FormLabel>First Name</FormLabel>
				<Input
					type="text"
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
				/>
				<FormLabel>Last Name</FormLabel>
				<Input
					type="text"
					value={lastName}
					onChange={e => setLastName(e.target.value)}
				/>
				<FormLabel>Service</FormLabel>
				<Input
					type="text"
					value={service}
					onChange={e => setService(e.target.value)}
				/>
				<FormLabel>Phone Number</FormLabel>
				<Input
					type="number"
					value={phone}
					onChange={e => setPhone(e.target.value)}
				/>
				<FormLabel>Hall</FormLabel>
				<Select
					value={hall}
					placeholder="Select Hall"
					onChange={e => setHall(e.target.value)}
				>
					<option value="eninjoku">Eninjoku Hall</option>
					<option value="jaja">Jaja Hall</option>
					<option value="moremi">Moremi Hall</option>
					<option value="madam tinubu">Madam Tinubu Hall (MTH)</option>
					<option value="kofo">Kofo Hall</option>
					<option value="biobaku">Biobaku Hall</option>
					<option value="makama">Makama Hall</option>
					<option value="amina">Amina Hall</option>
					<option value="fagunwa">Fagunwa Hall</option>
				</Select>
				<FormLabel>Room</FormLabel>
				<Input
					type="text"
					value={room}
					onChange={e => setRoom(e.target.value)}
				/>
				{!loading ? (
					<Button
						text={"Add service"}
						onClick={addService}
						className={"my-10"}
					/>
				) : (
					<BeatLoader
						color="black"
						size={10}
						aria-label="Loading Spinner"
						data-testid="loader"
						className="my-10"
					/>
				)}
			</FormControl>
		</main>
	);
}

export default AddServiceForm;
