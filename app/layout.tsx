import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/navbar/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Portfolio | Dhruv Sabharwal",
	description:
		"A professional portfolio website of Dhruv Sabharwal showcases his skills and projects.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main
						className={`${inter.variable} relative overflow-x-hidden bg-neutral-100 antialiased [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-neutral-100)]/5`}
					>
						<Toaster position="top-center" />
						<Navbar />
						{children}
						<Footer />
					</main>
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
