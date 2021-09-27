function HomeTop() {
	return (
		<div className="grid grid-cols-4 grid-rows-6 md:grid-rows-2  items-center  ">
			<div className="flex col-span-4 items-center row-start-3 md:row-span-2 md:col-span-2 justify-center text-3xl lg:text-4xl">
				<div className="home__font ml-2">
					Hi,
					<br />
					I'm
					<span className=" col-span-1 text-[#ffd56b] "> GHACHI</span>
					Abdessamad <br />
					I'm a Software Engineer
				</div>
			</div>
			<div className="md:col-start-3 flex col-span-4 items-center row-span-2 md:col-span-2 justify-center  ">
				<img
					src="/img/js.svg"
					className="h-full w-96 md:w-full mt-5 hidden md:block "
				/>
			</div>
		</div>
	);
}

export default HomeTop;
