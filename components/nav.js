function nav() {
	return (
		<>
			<div className="grid grid-cols-4 grid-rows-1 sm:grid-rows-1   md:grid-cols-3 lg:grid-cols-2 ">
				<div className=" hidden  md:flex md:justify-evenly md:col-span-2  md:col-start-2 mt-1">
					<div className="nav__hover">Home</div>
					<div className="nav__hover">About</div>
					<div className="nav__hover">Education</div>
				</div>
			</div>
		</>
	);
}

export default nav;
