import { JSX } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

import kartik from "./assets/Me.png";
import hf from "./assets/hf_logo.svg";

function App(): JSX.Element {
	return (
		<div className="bg-[#1E1D22] text-white flex flex-col w-lvw h-lvh">
			<nav className="flex flex-row px-50 py-5 w-1/3 justify-between cursor-pointer text-2xl">
				<a href="#" className="hover:text-[#9D84B8]">About</a>
				<a href="#" className="hover:text-[#9D84B8]">Projects</a>
			</nav>
			<div className="flex flex-row w-full h-full items-center">
				<div className="w-1/2 justify-center items-center px-50">
					<div className="mb-10">
						<h1 className="text-9xl">Kartik</h1>
						<h1 className="text-9xl text-[#9D84B8]">Agrawal,</h1>
					</div>
					<div>
						<p className="text-[#88878C] scale-110">
							A diligent college student from Noida, India, balancing academic pursuits with personal growth, creativity, and a passion for continuous self-improvement.
						</p>
					</div>
				</div>
				<div className="w-1/2 flex flex-col items-end">
					<img src={kartik} alt="Kartik" className="w-4/7 mr-20" />
					<div className="flex flex-row justify-evenly w-3/4">
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
		</div>
	  );
}

export default App;