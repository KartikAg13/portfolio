import { JSX } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle, SiGmail } from "react-icons/si";

import kartik from "./assets/Me.png";
import hf from "./assets/hf_logo.svg";
import output from "./assets/output.png";

function App(): JSX.Element {
	return (
		<div className="bg-[#1E1D22] text-white flex flex-col">
			<nav className="flex flex-row px-50 py-5 w-1/3 justify-between cursor-pointer text-2xl">
				<a href="#" className="hover:text-[#9D84B8]">About</a>
				<a href="#" className="hover:text-[#9D84B8]">Projects</a>
			</nav>
			<div className="flex flex-row w-full h-full items-center">
				<div className="w-1/2 justify-center items-center px-50 mt-[-10%]">
					<div className="mb-10 font-semibold">
						<h1 className="text-9xl">Kartik</h1>
						<h1 className="text-9xl text-[#9D84B8]">Agrawal,</h1>
					</div>
					<div className="px-5">
						<p className="text-[#ebeaee] scale-110">
							A diligent college student from Noida, India, balancing academic pursuits with personal growth, creativity, and a passion for continuous self-improvement.
						</p>
					</div>
				</div>
				<div className="w-1/2 flex flex-col items-end">
					<img src={kartik} alt="Kartik" className="w-4/7 mr-20" />
					<div className="flex flex-row justify-evenly w-3/4">
						<a 
							href="mailto:kartikag.23.04@gmail.com"
							aria-label="Gmail"
							className="transition transform duration-500 hover:scale-125 hover:-translate-y-2"
						>
							<SiGmail size={40} />
						</a>
						<a 
							href="https://github.com/KartikAg13" 
							aria-label="GitHub"
							className="transition transform duration-500 hover:scale-125 hover:-translate-y-2"	
						>
							<FaGithub size={40} />
						</a>
						<a 
							href="https://www.linkedin.com/in/kartik-agrawal-410946282/" 
							aria-label="LinkedIn"
							className="transition transform duration-500 hover:scale-125 hover:-translate-y-2"
						>
							<FaLinkedin size={40} />
						</a>
						<a 
							href="https://www.kaggle.com/kartikag234" 
							aria-label="Kaggle"
							className="transition transform duration-500 hover:scale-125 hover:-translate-y-2"	
						>
							<SiKaggle size={50} />
						</a>
						<a 
							href="https://huggingface.co/kartikag234" 
							aria-label="Hugging Face"
							className="transition transform duration-500 hover:scale-125 hover:-translate-y-2"
						>
							<img src={hf} alt="Hugging Face" width={40} height={40} />
						</a>
					</div>
				</div>
			</div>
			<div className="mt-25">
				<div className="w-full h-full">
					<h1 className="text-8xl text-center">Projets</h1>
					<div className="flex flex-wrap justify-evenly">
						<div className="w-80 h-100 mt-10 flex-col">
							<div className="bg-black">
								<img src={output} alt="Output" height={40} />
							</div>
							<div className="bg-red-800 h-0.5">
								<h1>Project Name</h1>
								<ul>
									<li>something1</li>
									<li>something2</li>
									<li>something3</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	  );
}

export default App;