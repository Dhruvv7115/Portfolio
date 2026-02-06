"use client";

import { IconCheck, IconClipboard } from "@tabler/icons-react";
import { useState } from "react";

export default function CodeBlock({ children, ...props }: any) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		const code = children?.props?.children || "";
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
