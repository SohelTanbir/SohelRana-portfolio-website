import React from 'react';

const ThemeToggle = () => {
	React.useEffect(() => {
		const stored = localStorage.getItem('theme');
		const root = document.documentElement;
		if (stored === 'light') {
			root.classList.remove('dark');
		} else {
			root.classList.add('dark');
		}
	}, []);

	const toggle = () => {
		const root = document.documentElement;
		const isDark = root.classList.toggle('dark');
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	};

	return (
		<button
			onClick={toggle}
			className="inline-flex items-center rounded-md border border-zinc-700 px-3 py-1.5 text-sm font-medium text-zinc-200 shadow-sm transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-900"
			title="Toggle theme"
		>
			<span className="hidden sm:inline">Toggle Theme</span>
			<span className="sm:hidden">Theme</span>
		</button>
	);
};

export default ThemeToggle;




