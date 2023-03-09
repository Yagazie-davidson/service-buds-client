import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from ".././assets/Logo.png";

function NavBar() {
	const navItems = [
		{
			href: "/services",
			title: "Services",
		},
	];
	return (
		<div className="">
			<header className="flex items-center justify-between">
				<div className="">
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</div>
				<nav className="text-sm text-gr font-medium mr-0 tablet:mr-10">
					{navItems.map((item, index) => {
						return (
							<Link to={item.href} key={index}>
								{item.title}
							</Link>
						);
					})}
				</nav>
			</header>
		</div>
	);
}

export default NavBar;
