import { JSX } from "react";
import kartik from "./assets/me-removebg-preview-modified.png";

function App(): JSX.Element {
	return (
		// <div className="bg-gray-900 text-white flex flex-col w-svw h-svw">
		  
		// 	<header className="flex justify-between px-40 py-6">
		// 		<nav>
		// 		<ul className="flex space-x-10">
		// 			<li className="hover:text-purple-600 cursor-pointer">About</li>
		// 			<li className="hover:text-purple-600 cursor-pointer">Case Studies</li>
		// 		</ul>
		// 		</nav>
		// 	</header>
			
		//   {/* Hero Section */}
		// 	<section className="flex flex-col md:flex-row items-center w-11/12 max-w-5xl py-20 px-50">
		// 		<div className="w-full md:w-1/2">
		// 		<h2 className="text-8xl font-bold leading-tight">
		// 			Kartik Agrawal,
		// 		</h2>
		// 		<p className="text-gray-400 mt-4">
		// 		Kartik is a dedicated learner balancing college, DSA, and ML studies while building innovative projects. Passionate about AI and machine learning, he has honed skills in TypeScript, Python, and cloud technologies like AWS, PostgreSQL, and Docker. His problem-solving mindset and strong determination position him as a future-ready ML Engineer.
		// 		</p>
		// 		<p className="text-purple-600 mt-6 font-semibold">BY HARDWORK & DETERMINATION</p>
		// 		<p className="text-gray-400">I'm currently Design Lead at <span className="text-purple-600">Adobe</span>.</p>
		// 		</div>
		// 		<div className="w-full md:w-1/2 relative">
		// 		<div className="absolute inset-0 bg-purple-600 w-1/2 h-full right-0"></div>
		// 		<img 
		// 			src="/profile.jpg" 
		// 			alt="Daniel Pinkman" 
		// 			className="relative z-10 w-full object-cover"
		// 		/>
		// 		</div>
		// 	</section>
			
		// 	{/* Awards Section */}
		// 	<section className="text-right pr-10">
		// 		<p className="text-gray-400">The FWA - Awards</p>
		// 		<p className="text-gray-400">CSS Design Awards</p>
		// 		<p className="text-gray-400">Awwwards - Website Awards</p>
		// 	</section>
			
		// 	{/* Projects Section */}
		// 	<section className="w-full text-center py-20">
		// 		<h3 className="text-gray-400">5 most recent works</h3>
		// 		<h2 className="text-4xl font-bold">Projects</h2>
		// 	</section>
		// </div>

		<div className="bg-[#212025] text-white flex flex-col w-lvw h-lvh">
			<nav className="flex flex-row fixed px-50 py-5 w-1/3 justify-between cursor-pointer text-2xl">
				<a href="#" className="hover:text-[#9D84B8]">About</a>
				<a href="#" className="hover:text-[#9D84B8]">Projects</a>
			</nav>
			<div className="flex flex-row w-full h-full">
				<div className="w-1/2 flex justify-center items-center">
					<div>
						<h1 className="text-9xl">Kartik</h1>
						<h1 className="text-9xl text-[#9D84B8]">Agrawal,</h1>
					</div>

				</div>
				<div className="w-1/6 bg-[#9D84B8] relative overflow-visible">
					<img 
						src={kartik}
						alt="Kartik"
						className="transform scale-225 absolute bottom-44" 
					/>
				</div>
				<div className="w-1/3"></div>
			</div>
		</div>
	  );
}

export default App;