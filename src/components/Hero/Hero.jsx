import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<section id="hero" className="dark:bg-zinc-950 bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
				<div className="grid items-center gap-10 md:grid-cols-2">
					<div>
						<motion.h1
							className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							Hi, I'm Sohel Rana
						</motion.h1>
						<motion.p
							className="mt-4 text-lg leading-7 text-zinc-600 dark:text-zinc-300"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							Frontend Developer specialized in the MERN stack. I build responsive, scalable apps with React, Next.js, Redux Toolkit, Tailwind CSS, and add real-time features with WebSocket and RTK Query.
						</motion.p>
						<div className="mt-8 flex flex-wrap gap-3">
							<motion.a
								href="#projects"
								className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								View Projects
							</motion.a>
							<motion.a
								href="#contact"
								className="inline-flex items-center rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-800 dark:bg-zinc-900"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								Contact
							</motion.a>
						</div>
					</div>
					<motion.div
						className="h-64 w-full rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-fuchsia-600/20 ring-1 ring-inset ring-white/10 md:h-80"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.15 }}
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;



