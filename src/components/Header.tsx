"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
	{ id: "about", label: "О нас" },
	{ id: "services", label: "Услуги и цены" },
	{ id: "team", label: "Команда" },
	{ id: "cases", label: "Кейсы" },
	{ id: "contact", label: "Контакты" }
];

function scrollToSection(id: string) {
	const el = document.getElementById(id);
	if (el) {
		const rect = el.getBoundingClientRect();
		const offset = rect.top + window.scrollY - 80;
		window.scrollTo({ top: offset, behavior: "smooth" });
	}
}

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [activeId, setActiveId] = useState<string>("about");
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 30);
			const positions = SECTIONS.map(section => {
				const el = document.getElementById(section.id);
				if (!el) return { id: section.id, top: Infinity };
				const rect = el.getBoundingClientRect();
				return { id: section.id, top: Math.abs(rect.top - 90) };
			});
			positions.sort((a, b) => a.top - b.top);
			setActiveId(positions[0]?.id ?? "about");
		};
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-40 transition-all ${
				scrolled ? "backdrop-blur-xl bg-black/70 dark:bg-black/70" : "bg-transparent"
			}`}
		>
			<nav className="section-padding">
				<div className="max-width flex items-center justify-between py-4">
					<button
						className="flex items-center gap-3 text-base font-bold uppercase tracking-[0.18em]"
						onClick={() => scrollToSection("hero")}
						aria-label="Вернуться в начало"
					>
						<img src="/logo.svg" alt="HAND Logo" className="h-10 w-10 object-contain" />
						<span className="inline font-nunito text-base sm:text-lg">HAND Agency</span>
					</button>

					<div className="flex items-center gap-4">
						<div className="hidden md:flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs font-medium backdrop-blur-lg border border-white/10">
							{SECTIONS.map(item => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`relative px-3 py-1 rounded-full transition-colors ${
										activeId === item.id ? "text-black" : "text-white/70 hover:text-white"
									}`}
									aria-label={item.label}
								>
									{activeId === item.id && (
										<motion.span
											layoutId="nav-pill"
											className="absolute inset-0 rounded-full bg-white"
											transition={{ type: "spring", stiffness: 400, damping: 30 }}
										/>
									)}
									<span className="relative z-10">{item.label}</span>
								</button>
							))}
						</div>

						<button
							className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm text-white md:hidden"
							onClick={() => setMobileOpen(o => !o)}
							aria-label="Открыть меню"
							aria-expanded={mobileOpen}
						>
							<motion.span
								animate={mobileOpen ? { rotate: 45, y: 1 } : { rotate: 0, y: -4 }}
								className="absolute h-[1.5px] w-4 bg-white"
							/>
							<motion.span
								animate={mobileOpen ? { rotate: -45, y: 1 } : { rotate: 0, y: 4 }}
								className="absolute h-[1.5px] w-4 bg-white"
							/>
						</button>
					</div>
				</div>
			</nav>

			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-30 bg-black/80 backdrop-blur-2xl md:hidden"
					>
						<div className="section-padding">
							<div className="max-width pt-24 space-y-6">
								{SECTIONS.map(item => (
									<button
										key={item.id}
										onClick={() => {
											scrollToSection(item.id);
											setMobileOpen(false);
										}}
										className="block w-full text-left text-2xl font-semibold tracking-wide text-white"
									>
										{item.label}
									</button>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};
