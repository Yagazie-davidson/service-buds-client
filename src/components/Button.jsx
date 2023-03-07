import React from "react";

function Button({ text, className, onClick }) {
	return (
		<button
			className={`bg-pri text-white py-2 px-4 font-normal text-base rounded ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
}

export default Button;
