"use client";

import { IconCheck, IconClipboard } from "@tabler/icons-react";
import React, { useState } from "react";

export default function CodeBlock({
	children,
	...props
}: React.PropsWithChildren<React.ComponentPropsWithoutRef<"pre">>) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		let code = "";
		if (typeof children === "string") {
			code = children;
		} else if (React.isValidElement(children)) {
			const element = children as React.ReactElement<
				{
					children?: React.ReactNode;
				},
				string | React.JSXElementConstructor<unknown>
			>;
			const inner = element.props?.children;
			if (typeof inner === "string") code = inner;
			else if (Array.isArray(inner))
				code = inner
					.map((item) => (typeof item === "string" ? item : String(item)))
					.join("");
			else code = String(inner ?? "");
		} else {
			code = String(children ?? "");
		}
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative group">
			<button
				onClick={handleCopy}
				className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-neutral-300 dark:hover:bg-neutral-800 text-neutral-400 dark:text-neutral-700 p-2 rounded cursor-pointer"
			>
				{copied ? <IconCheck size={16} /> : <IconClipboard size={16} />}
			</button>
			<pre {...props}>{children}</pre>
		</div>
	);
}
