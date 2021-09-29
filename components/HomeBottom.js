import React, { useRef, useState } from "react";
import emailjs, { init } from "emailjs-com";

init("user_OZz52nbWNT6Mmy0zPaFZG");

function HomeBottom() {
	const [name, setName] = useState("");
	const [object, setObject] = useState("");
	const [message, setMessage] = useState("");
	const form = useRef();
	const send = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_1capq3t", "template_z288cli", form.current)
			.then(() => {
				setName("");
				setMessage("");
				setObject("");
			});
	};
	return (
		<div className="relative ">
			<img
				src="/img/bgBottom.svg"
				alt="bg"
				className="w-full h-full hidden md:flex "
			/>
			<img
				src="/img/bgBottomMobile.svg"
				alt="bg"
				className="w-full h-full flex md:hidden "
			/>
			<div>
				<form
					className=" absolute mt-[18%] ml-[5%] md:mt-[20%] top-0 md:left-[30%] lg:left-[50%] "
					ref={form}
					onSubmit={send}
				>
					<span className="primaryText text-4xl font-bold flex mb-7 text-white">
						Contact me
					</span>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="Enter your name"
						className="inputMessage"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						type="text"
						name="object"
						id="object"
						placeholder="Enter your Object"
						className="inputMessage"
						value={object}
						onChange={(e) => setObject(e.target.value)}
					/>
					<textarea
						type="text"
						name="message"
						id="message"
						placeholder="Enter your message"
						className="inputMessage overflow-auto"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button
						type="submit"
						className="py-2 px-3 bg-red-600 rounded-lg outline-none focus:outline-none text-white"
					>
						Send
					</button>
				</form>
				<img
					src="/img/mail.svg"
					alt="bg"
					className="w-96 hidden lg:flex absolute  mt-[15%] top-0 ml-[10%]"
				/>
			</div>
		</div>
	);
}

export default HomeBottom;
