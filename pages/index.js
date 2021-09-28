import Nav from "../components/nav";

import Head from "next/head";
import HomeMiddle from "../components/HomeMiddle";
import HomeTop from "../components/HomeTop";
import HomeBottom from "../components/HomeBottom";
export default function Home() {
	return (
		<div>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="bg-[#1a1a2e] text-white overflow-hidden h-full ">
				<HomeTop />
				<img src="/img/foot_home.svg" className=" w-screen  h-full " />
			</div>
			<HomeMiddle />
			<HomeBottom />
		</div>
	);
}
