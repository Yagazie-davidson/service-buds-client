import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../Layout/Layout";

function Home() {
	return (
		<Layout>
			<main className="flex flex-col justify-center items-center mt-32">
				<h1 className="font-extrabold text-6xl tablet:text-8xl text-center text-black max-w-6xl">
					All the information you need in one Place
				</h1>
				<p className="text-center text-asht font-normal text-lg mt-5 mx-2 tablet:mx-28">
					Having issues? Need help? Want assistance? Want a service provider?
					Get a provider in you Hostel through service buds! Check out our List
					today to see services available to your hostel and contact
					information.
				</p>
				<Link to="/services">
					<Button text={"Explore Services"} className={"mt-10"} />
				</Link>
			</main>
		</Layout>
	);
}

export default Home;
