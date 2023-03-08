import React from "react";
import cons from ".././assets/cons.png";
import Layout from "../Layout/Layout";
function Construction() {
	return (
		<div>
			<Layout>
				<main className="flex flex-col items-center justify-center h-screen">
					<h1 className="font-extrabold text-6xl tablet:text-8xl text-center text-black max-w-6xl">
						This page is under Construction
					</h1>
					<img src={cons} alt="Construction" className="" />
				</main>
			</Layout>
		</div>
	);
}

export default Construction;
