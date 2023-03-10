import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = ({ children }) => {
	return (
		<div className="mx-5 sm:mx-20 mt-5">
			<NavBar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
