import rehypeHighlight from "rehype-highlight";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import CodeBlock from "@/components/code-block";
type Frontmatter = {
	title: string;
	description: string;
	date: string;
	image: string;
};

export async function getBlogFrontMatterBySlug(slug: string) {
	try {
		const singleBlog = await fs.readFileSync(
			path.join(process.cwd(), `./blog-data/${slug}.mdx`),
			"utf-8",
		);

		const { frontmatter } = await compileMDX<Frontmatter>({
			source: singleBlog,
			options: { parseFrontmatter: true },
		});

		return frontmatter;
	} catch (error) {
		console.error(`Error reading blog post ${slug}:`, error);
		return null;
	}
}

export async function getAllBlogs() {
	try {
		const files = await fs.readdirSync(path.join(process.cwd(), "./blog-data"));
		const allBlogs = await Promise.all(
			files.map(async (file: string) => {
				const slug = file.replace(".mdx", "");
				const frontmatter = await getBlogFrontMatterBySlug(slug);
				return { slug, ...frontmatter };
			}),
		);
		return allBlogs;
	} catch (error) {
		console.error("Error reading blog directory:", error);
		return [];
	}
}

export async function getSingleBlog(slug: string) {
	try {
		const singleBlog = await fs.readFileSync(
			path.join(process.cwd(), `./blog-data/${slug}.mdx`),
			"utf-8",
		);

		if (!singleBlog) {
			return null;
		}

		const { content, frontmatter } = await compileMDX<Frontmatter>({
			source: singleBlog,
			options: {
				parseFrontmatter: true,
				mdxOptions: { rehypePlugins: [rehypeHighlight] },
			},
			components: {
				pre: CodeBlock,
			},
		});

		return { content, frontmatter };
	} catch (error) {
		console.error(`Error reading blog post ${slug}:`, error);
		return null;
	}
}
