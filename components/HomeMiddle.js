import { data } from "../db";
import Image from "next/image";
function HomeMiddle() {
	return (
		<div>
			<div className="md:-mt-16">
				<span className="text-[#1a1a2e] text-5xl font-bold patrickHand flex justify-center ">
					SKILLS
				</span>
			</div>
			<div className="bg-[#1a1a2e] pt-10 pb-6 px-5 mx-1 md:mx-5 my-4 rounded-3xl flex flex-nowrap  overflow-x-auto no-scrollbar">
				{data.skills.map((dt) => (
					<div className="mb-5 flex flex-col items-center flex-shrink-0 mr-16 ">
						<Image src={dt.image} alt={dt.name} width={120} height={120} />
						<span className="text-white font-bold flex text-2xl mt-2 ">
							{dt.name}
						</span>
					</div>
				))}
				<div className="mb-5 flex flex-col items-center justify-end  flex-shrink-0 mr-16 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						color="#ffd56b"
						className="animate-bounce"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
					<span className="text-[#ffd56b] font-bold flex text-2xl mt-10 cursor-pointer">
						Know More
					</span>
				</div>
			</div>
			<div>
				<span className="text-[#1a1a2e] text-5xl font-bold primaryText flex justify-center ">
					PROJECTS
				</span>
			</div>
			<div className="bg-[#1a1a2e] py-8 px-1 mx-1 md:px-5 md:mx-5 my-4 rounded-3xl flex flex-nowrap font-bold sm:justify-center overflow-x-auto no-scrollbar">
				<div className="projectNav">All</div>
				<div className="projectNav">React</div>
				<div className="projectNav">Spring</div>
				<div className="projectNav">Express</div>
				<div className="projectNav">React Native</div>
				<div className="projectNav">PWA</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
				{data.projects.map((project) => (
					<div className="bg-[#1a1a2e] text-gray-300 px-5 py-2 mx-1 md:mx-5 my-3 rounded-xl flex flex-col">
						<div className="">
							<span className=" font-bold text-lg flex justify-center mt-1 primaryText">
								{project.title}
							</span>
						</div>

						<div className="flex justify-center mb-2 mt-2 ">
							<img src={project.img} alt="js" className="w-auto h-80	" />
						</div>
						<div className="flex-wrap flex">
							{project.tools.map((tool, index) => (
								<span
									key={index}
									className=" bg-white px-2 py-1 rounded-full text-black mb-2 mr-2 primaryText font-bold text-sm"
								>
									{tool}
								</span>
							))}
						</div>

						<div className="flex mt-1 justify-end  h-full w-full items-end ">
							<a href={project.link} target="_blank">
								<Image
									src="/img/git.png"
									width={50}
									height={30}
									className="cursor-pointer"
								/>
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomeMiddle;
