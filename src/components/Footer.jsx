import React from "react";

function Footer() {
	return (
		<footer className="flex h-24 items-center justify-center gap-x-2">
			<p className="font-normal">SB | Developed with 🖤 by Letam </p>
			<div className="text-sm font-medium">© {new Date().getFullYear()}</div>
		</footer>
	);
}

export default Footer;
