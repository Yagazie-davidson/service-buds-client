import { Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../Layout/Layout";

function Home() {
	return (
		<Layout>
			<main className="flex flex-col justify-center items-center mt-32">
				<h1 className="font-extrabold text-6xl tablet:text-8xl text-center text-black max-w-6xl">
					A town hall different from bala blu
				</h1>
				<p className="text-center text-asht font-normal text-lg mt-5 mx-2 tablet:mx-28">
					The farmers will make more money. Your lunch will not be imported,
					cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the
					dinner would be cassava, eba, ewa and everything.
				</p>
				<Link to="/services">
					<Button text={"Explore Services"} className={"mt-10"} />
				</Link>
			</main>
		</Layout>
	);
}

export default Home;
